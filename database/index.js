const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/smile-quotes');

const quoteSchema = new mongoose.Schema({
  text: { type: String, unique: true },
  author: { type: String, default: 'anonymous' },
  category: String
},
  {
    timestamps: true
  });

const Quote = mongoose.model('Quote', quoteSchema);

const save = function (data, callback) {
  console.log('in save');
  Quote.updateOne({ text: data.text }, { author: data.author, category: data.category }, { upsert: true }, (err, results) => {
    if (err) {
      console.log('error in saving quote', err);
      callback('error in saving quote');
    } else {
      console.log('results from save', results);
      if (results.upsertedCount === 1) {
        callback('saved')
      }
      if (results.modifiedCount === 1)
        callback('updated');
    }
  });
}

const retrieveRandom = function (callback) {
  Quote.estimatedDocumentCount((err, results) => {
    if (err) {
      console.log('error in retrieveRandom-estimatedDocumentCount', err);
    } else {
      var random = Math.floor(Math.random() * results);
      Quote.findOne().skip(random).exec((err, findOneResults) => {
        if (err) {
          console.log('error in retrieveRandom-findOne', err);
        } else {
          callback(findOneResults);
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
    } else {
      console.log('search results', searchResults);
      callback(searchResults);
    }
  })
}

const retrieveFiveMostRecent = function (callback) {
  Quote.find({}).sort({ updatedAt: -1 }).exec((err, results) => {
    if (err) {
      console.log('error in retrieving quotes', err);
    } else {
      var fiveMostRecent = results.slice(0, 5);
      console.log('retrieve results', fiveMostRecent);
      callback();
    }
  });
}

module.exports = { save, retrieveRandom, search }