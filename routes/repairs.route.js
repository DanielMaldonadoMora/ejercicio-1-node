const express = require('express');

const {
  getAllRepairs,
  createRepairs,
  getRepairsById,
  updateRepairs,
  deleteRepairs,
} = require('../controllers/repairs.controller');

const router = express.Router();

router.route('/').get(getAllRepairs).post(createRepairs);

router
  .route('/:id')
  .get(getRepairsById)
  .patch(updateRepairs)
  .delete(deleteRepairs);

module.exports = { repairsRouter: router };
