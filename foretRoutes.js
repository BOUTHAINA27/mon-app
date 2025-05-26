const express = require('express');
const router = express.Router();
const foretController = require('../controllers/foretController');

// Routes pour les forêts
router.post('/', foretController.createForet);
router.get('/', foretController.getAllForets);
router.get('/:id', foretController.getForetById);
router.put('/:id', foretController.updateForet);
router.delete('/:id', foretController.deleteForet);

module.exports = router;