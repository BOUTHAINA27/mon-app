
const db = require('../db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const SECRET_KEY = 'SECRET_KEY';

exports.register = async (req, res) => {
  const { email, phone, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    db.query(
      'INSERT INTO users (email, phone, password) VALUES (?, ?, ?)',
      [email, phone, hashedPassword],
      (err) => {
        if (err) {
          if (err.code === 'ER_DUP_ENTRY') {
            return res.status(400).json({ message: 'Email déjà utilisé' });
          }
          return res.status(500).json({ message: 'Erreur serveur' });
        }
        const token = jwt.sign({ email }, SECRET_KEY, { expiresIn: '2h' });
        res.json({ token });
      }
    );
  } catch {
    res.status(500).json({ message: 'Erreur lors de l’inscription' });
  }
};

exports.login = (req, res) => {
  const { email, password } = req.body;
  db.query('SELECT * FROM users WHERE email = ?', [email], async (err, results) => {
    if (err) return res.status(500).json({ message: 'Erreur serveur' });
    if (results.length === 0) return res.status(400).json({ message: 'Utilisateur non trouvé' });

    const user = results[0];
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: 'Mot de passe incorrect' });

    const token = jwt.sign({ email }, SECRET_KEY, { expiresIn: '2h' });
    res.json({ token });
  });
};

exports.forgotPassword = (req, res) => {
  const { email } = req.body;
  // Exemple fictif (à connecter avec un service d’email)
  res.json({ message: `Lien de réinitialisation envoyé à ${email}` });
};




