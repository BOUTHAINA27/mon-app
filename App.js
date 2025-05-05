
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppNavbar from './Navbar';
import Login from './Login';
import Register from './Register';
import EvaluationForm from './EvaluationForm';
import Palmier from './Palmier'
import 'bootstrap/dist/css/bootstrap.min.css';

function HomePage() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <main className="flex-fill">
        <div className="container py-5">
          <h2 className="text-center mb-4">🌾 Conseils Agricoles</h2>
          <div className="row">
            {[
              { title: 'Irrigation', text: "Adaptez l'irrigation selon la météo pour économiser de l'eau." },
              { title: 'Ensachage', text: "Assurez-vous que la période d'ensachage coïncide avec la maturité des fruits." },
              { title: 'Pollinisation', text: "Effectuez la pollinisation tôt le matin ou en fin de journée pour de meilleurs résultats." }
            ].map((card, i) => (
              <div className="col-md-4" key={i}>
                <div className="card mb-4 shadow-sm">
                  <div className="card-body">
                    <h5 className="card-title">{card.title}</h5>
                    <p className="card-text">{card.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-center mt-5 mb-4">📢 Annonces des Agriculteurs</h2>
          <div className="list-group">
            <div className="list-group-item"><strong>Ahmed Ben Salah :</strong> Cherche acheteurs pour dattes Deglet Nour, prix négociable. 📞 98 123 456</div>
            <div className="list-group-item"><strong>Fatma Mbarek :</strong> Vend palmier Deglet Nour.</div>
            <div className="list-group-item"><strong>Mohamed Lahmar :</strong> Offre service dans la région de Douz</div>
          </div>
        </div>
      </main>

      <footer className="bg-dark text-light text-center p-4 mt-auto">
        <h5>📬 Contactez-nous</h5>
        <p><strong>Email :</strong> <a href="mailto:contact@agriculture.com" className="text-info">contact@agriculture.com</a></p>
        <p><strong>Téléphone :</strong> <a href="tel:+21675000000" className="text-info">+216 75000000</a></p>
        <p><strong>Adresse :</strong> 123 Rue de l'Agriculture, Douz, Tunisie - 4200</p>
        <div className="d-flex justify-content-center gap-3 mt-3">
          <a href="https://facebook.com" className="text-info" target="_blank" rel="noreferrer">Facebook</a>
          <a href="https://twitter.com" className="text-info" target="_blank" rel="noreferrer">Twitter</a>
          <a href="https://instagram.com" className="text-info" target="_blank" rel="noreferrer">Instagram</a>
        </div>
      </footer>
    </div>
  );
}


function App() {
  return (
    <Router>
      <AppNavbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/evaluation/voir" element={<EvaluationForm />} />
        <Route path="/Palmier" element={<Palmier />} />
      </Routes>
    </Router>
  );
}

export default App;















