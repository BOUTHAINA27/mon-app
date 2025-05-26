const db = require('../db');

const Foret = {
  // Créer une nouvelle forêt
  create: (foretData, callback) => {
    const query = 'INSERT INTO forets SET ?';
    db.query(query, foretData, (err, result) => {
      if (err) return callback(err, null);
      callback(null, result);
    });
  },

  // Récupérer toutes les forêts
  getAll: (callback) => {
    const query = 'SELECT * FROM forets';
    db.query(query, (err, results) => {
      if (err) return callback(err, null);
      callback(null, results);
    });
  },

  // Récupérer une forêt par son ID
  getById: (id, callback) => {
    const query = 'SELECT * FROM forets WHERE id = ?';
    db.query(query, [id], (err, results) => {
      if (err) return callback(err, null);
      callback(null, results[0]);
    });
  },

  // Mettre à jour une forêt
  update: (id, foretData, callback) => {
    const query = 'UPDATE forets SET ? WHERE id = ?';
    db.query(query, [foretData, id], (err, result) => {
      if (err) return callback(err, null);
      callback(null, result);
    });
  },

  // Supprimer une forêt
  delete: (id, callback) => {
    const query = 'DELETE FROM forets WHERE id = ?';
    db.query(query, [id], (err, result) => {
      if (err) return callback(err, null);
      callback(null, result);
    });
  }
};

module.exports = Foret;