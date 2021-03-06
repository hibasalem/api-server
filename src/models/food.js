'use strict';

const mongoose = require('mongoose');

const foodSchema = mongoose.Schema({
  name: { type: String, required: true },
  type: { type: String },
});

const foodModel = mongoose.model('Food', foodSchema);

module.exports = foodModel;
