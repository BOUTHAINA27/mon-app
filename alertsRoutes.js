const express = require('express');
const router = express.Router();
const alertsController = require('../controllers/alertsController');

router.get('/', alertsController.getAllAlerts);
router.get('/unread', alertsController.getUnreadCount);
router.post('/mark-read', alertsController.markAllAsRead);
router.post('/', alertsController.createAlert);

module.exports = router;