'use strict';

const express = require('express');
const validator = require('../middleware/validator');
const router = express.Router();

const clothesModel = require('../models/clothes');
const Collection = require('../models/data-collection-class');
const clothes = new Collection(clothesModel);

router.get('/', getClothes);
router.get('/:id', getClothes);
router.post('/', validator, addClothes);
router.put('/:id', validator, updateClothes);
router.delete('/:id', deleteClothes);

async function getClothes(req, res, next) {
  try {
    const result = await clothes.read(req.params.id);
    res.json({ result });
  } catch (e) {
    next(e);
  }
}

async function addClothes(req, res, next) {
  try {
    const result = await clothes.create(req.body);
    res.json(result);
  } catch (e) {
    next(e);
  }
}

async function updateClothes(req, res, next) {
  try {
    const result = await clothes.update(req.params.id, req.body);
    res.json(result);
  } catch (e) {
    next(e);
  }
}

async function deleteClothes(req, res, next) {
  try {
    const result = await clothes.delete(req.params.id);
    res.json(result);
  } catch (e) {
    next(e);
  }
}

module.exports = router;
