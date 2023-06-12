
const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  device: {
    type: String,
    enum: ['Laptop', 'Tablet', 'Mobile'],
    required: true,
  },
  no_of_comments: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model('Post', postSchema);
