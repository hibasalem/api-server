'use strict';

const express = require('express');
const validator = require('../middleware/validator');
const router = express.Router();

const foodModel = require('../models/food');
const Collection = require('../models/data-collection-class');
const food = new Collection(foodModel);

router.get('/', getFood);
router.get('/:id', getFood);
router.post('/', validator, addFood);
router.put('/:id', validator, updateFood);
router.delete('/:id', deleteFood);

async function getFood(req, res, next) {
  try {
    const result = await food.read(req.params.id);
    res.json(result);
  } catch (e) {
    next(e);
  }
}

async function addFood(req, res, next) {
  try {
    const result = await food.create(req.body);
    res.json(result);
  } catch (e) {
    next(e);
  }
}

async function updateFood(req, res, next) {
  try {
    const result = await food.update(req.params.id, req.body);
    res.json(result);
  } catch (e) {
    next(e);
  }
}

async function deleteFood(req, res, next) {
  try {
    const result = await food.delete(req.params.id);
    res.json(result);
  } catch (e) {
    next(e);
  }
}

module.exports = router;
