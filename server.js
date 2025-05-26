
const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const alertsRoutes = require('./routes/alertsRoutes');
const announcementsRoutes = require('./routes/announcementsRoutes');
const foretRoutes = require('./routes/foretRoutes');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/', authRoutes);
app.use('/api/alerts', alertsRoutes);
app.use('/api/announcements', announcementsRoutes);
app.use('/api/forets', foretRoutes);

app.listen(8080, () => {
  console.log('🚀 Serveur Node.js en cours sur http://localhost:8080');
});













