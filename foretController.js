const Foret = require('../models/foretModel');

// Créer une nouvelle forêt
exports.createForet = (req, res) => {
  const foretData = req.body;
  
  Foret.create(foretData, (err, result) => {
    if (err) {
      return res.status(500).json({
        error: 'Erreur lors de la création de la forêt'
      });
    }
    res.status(201).json({
      message: 'Forêt créée avec succès',
      foretId: result.insertId
    });
  });
};

// Récupérer toutes les forêts
exports.getAllForets = (req, res) => {
  Foret.getAll((err, forets) => {
    if (err) {
      return res.status(500).json({
        error: 'Erreur lors de la récupération des forêts'
      });
    }
    res.status(200).json(forets);
  });
};

// Récupérer une forêt par son ID
exports.getForetById = (req, res) => {
  const id = req.params.id;
  
  Foret.getById(id, (err, foret) => {
    if (err) {
      return res.status(500).json({
        error: 'Erreur lors de la récupération de la forêt'
      });
    }
    if (!foret) {
      return res.status(404).json({
        error: 'Forêt non trouvée'
      });
    }
    res.status(200).json(foret);
  });
};

// Mettre à jour une forêt
exports.updateForet = (req, res) => {
  const id = req.params.id;
  const foretData = req.body;
  
  Foret.update(id, foretData, (err, result) => {
    if (err) {
      return res.status(500).json({
        error: 'Erreur lors de la mise à jour de la forêt'
      });
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({
        error: 'Forêt non trouvée'
      });
    }
    res.status(200).json({
      message: 'Forêt mise à jour avec succès'
    });
  });
};

// Supprimer une forêt
exports.deleteForet = (req, res) => {
  const id = req.params.id;
  
  Foret.delete(id, (err, result) => {
    if (err) {
      return res.status(500).json({
        error: 'Erreur lors de la suppression de la forêt'
      });
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({
        error: 'Forêt non trouvée'
      });
    }
    res.status(200).json({
      message: 'Forêt supprimée avec succès'
    });
  });
};