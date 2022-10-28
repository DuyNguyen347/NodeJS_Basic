const { Router } = require('express');
const express = require('express');
const router = express.Router();

// viết tắt router = require('express').Router();

const courseController = require('../app/controllers/courseController');
router.get('/create',courseController.create);
router.post('/handle-form-actions',courseController.handleForm)
router.post('/store',courseController.store);
router.put('/:id',courseController.update);
router.delete('/:id',courseController.delete);
router.delete('/:id/force',courseController.destroy);
router.patch('/:id/restore',courseController.restore); // them restore để cho rõ ràng khi người dùng restore
router.get('/:id/edit', courseController.edit);
router.get('/:slug', courseController.show);

module.exports = router;
