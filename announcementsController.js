const Announcement = require('../models/Announcement');

exports.getAllAnnouncements = (req, res) => {
  Announcement.getAll((err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
};

exports.createAnnouncement = (req, res) => {
  const { firstName, lastName, title, phone, message } = req.body;
  Announcement.create({ firstName, lastName, title, phone, message }, (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(201).json({ id: results.insertId });
  });
};

exports.deleteAnnouncement = (req, res) => {
  const { id } = req.params;
  Announcement.delete(id, (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (results.affectedRows === 0) {
      return res.status(404).json({ message: 'Announcement not found' });
    }
    res.json({ message: 'Announcement deleted successfully' });
  });
};