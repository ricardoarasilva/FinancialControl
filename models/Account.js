// Account.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Entry
let Account = new Schema({
  name: {
    type: String
  },
  description: {
    type: String
  },
  actual_value:{
    type: mongoose.Schema.Types.Decimal128
  },
  done: {
    type: Boolean
  }
},{
    collection: 'account'
});

module.exports = mongoose.model('Account', Account);