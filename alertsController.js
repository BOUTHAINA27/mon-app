const Alert = require('../models/Alert');

exports.getAllAlerts = (req, res) => {
  Alert.getAll((err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
};

exports.getUnreadCount = (req, res) => {
  Alert.getUnreadCount((err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ count: results[0].count });
  });
};

exports.markAllAsRead = (req, res) => {
  Alert.markAllAsRead((err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ message: 'All alerts marked as read' });
  });
};

exports.createAlert = (req, res) => {
  const { type, message, date } = req.body;
  Alert.create({ type, message, date }, (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(201).json({ id: results.insertId });
  });
};