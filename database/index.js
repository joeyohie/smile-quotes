const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/smile-quotes');

const quoteSchema = new mongoose.Schema({
  text: { type: String, unique: true, required: true },
  author: { type: String, default: 'anonymous' },
  category: String
},
  {
    timestamps: true
  });

const Quote = mongoose.model('Quote', quoteSchema);

const save = function (data, callback) {
  Quote.updateOne({ text: data.text }, { author: data.author, category: data.category }, { upsert: true }, (err, results) => {
    if (err) {
      console.log('error in saving quote', err);
      callback(err);
    } else {
      if (results.upsertedCount === 1) {
        callback(null, 'saved')
      }
      if (results.modifiedCount === 1)
        callback(null, 'updated');
    }
  });
}

const retrieveRandom = function (callback) {
  Quote.estimatedDocumentCount((err, results) => {
    if (err) {
      console.log('error in retrieveRandom-estimatedDocumentCount', err);
      callback(err);
    } else {
      var random = Math.floor(Math.random() * results);
      Quote.findOne().skip(random).exec((err, findOneResults) => {
        if (err) {
          console.log('error in retrieveRandom-findOne', err);
          callback(err);
        } else {
          callback(null, findOneResults);
        }
      })
    }
  })
}

const search = function (filter, callback) {
  var key = Object.keys(filter)[0];
  var value = filter[key];
  // format filter using regex
  var regexFilter = {
    [key]: {
      $regex: value,
      $options: 'i'
    }
  }

  Quote.find(regexFilter).sort({ updatedAt: -1 }).exec((err, searchResults) => {
    if (err) {
      console.log('error in searching for quotes', err);
      callback(err);
    } else {
      callback(null, searchResults);
    }
  })
}

const retrieveFiveMostRecent = function (callback) {
  Quote.find({}).sort({ createdAt: -1 }).exec((err, results) => {
    if (err) {
      console.log('error in retrieving quotes', err);
      callback(err);
    } else {
      var fiveMostRecent = results.slice(0, 5);
      callback(null, fiveMostRecent);
    }
  });
}

module.exports = { save, retrieveRandom, search, retrieveFiveMostRecent }