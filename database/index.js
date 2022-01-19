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
      callback();
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

module.exports = { save, retrieveRandom }