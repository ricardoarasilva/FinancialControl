// Entry.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Entry
let Entry = new Schema({
  account: {
    type: Schema.Types.ObjectId,
    ref: 'account'
  },
  type: {
    type: String
  },
  description: {
    type: String
  },
  value:{
    type: mongoose.Schema.Types.Decimal128
  },
  done: {
    type: Boolean
  }
},{
    collection: 'entry'
});

module.exports = mongoose.model('Entry', Entry);