const mongoose = require('mongoose');

const bookObjectSchema = new mongoose.Schema({
  id: Number,
  title: String,
  author: String,
  publisher: String,
  year: Number,
  rating: Number,
  pages: Number,
});

const bookObjectModel = mongoose.model('Book', bookObjectSchema);

module.exports = bookObjectModel;