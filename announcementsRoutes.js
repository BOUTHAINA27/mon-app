const express = require('express');
const router = express.Router();
const announcementsController = require('../controllers/announcementsController');

router.get('/', announcementsController.getAllAnnouncements);
router.post('/', announcementsController.createAnnouncement);
router.delete('/:id', announcementsController.deleteAnnouncement);

module.exports = router;