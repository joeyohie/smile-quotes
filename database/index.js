const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/test');

const quoteSchema = new mongoose.Schema({
  text: String,
  author: String,
  categroy: String
});

const Quote = mongoose.model('Quote', quoteSchema);

