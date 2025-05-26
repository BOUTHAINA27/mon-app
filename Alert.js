const db = require('../db');

const Alert = {
  getAll: (callback) => {
    db.query('SELECT * FROM alerts ORDER BY date DESC', callback);
  },
  
  getUnreadCount: (callback) => {
    db.query('SELECT COUNT(*) AS count FROM alerts WHERE is_read = 0', callback);
  },
  
  markAllAsRead: (callback) => {
    db.query('UPDATE alerts SET is_read = 1 WHERE is_read = 0', callback);
  },
  
  create: (alertData, callback) => {
    db.query(
      'INSERT INTO alerts (type, message, date, is_read) VALUES (?, ?, ?, ?)',
      [alertData.type, alertData.message, alertData.date, false],
      callback
    );
  }
};

module.exports = Alert;