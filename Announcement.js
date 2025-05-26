const db = require('../db');

const Announcement = {
  getAll: (callback) => {
    db.query('SELECT * FROM announcements ORDER BY date DESC', callback);
  },
  
  create: (announcementData, callback) => {
    db.query(
      'INSERT INTO announcements (first_name, last_name, title, phone, message, date) VALUES (?, ?, ?, ?, ?, ?)',
      [
        announcementData.firstName,
        announcementData.lastName,
        announcementData.title,
        announcementData.phone,
        announcementData.message,
        new Date().toISOString().slice(0, 10)
      ],
      callback
    );
  },
  
  delete: (id, callback) => {
    db.query('DELETE FROM announcements WHERE id = ?', [id], callback);
  }
};

module.exports = Announcement;