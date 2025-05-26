

/**import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppNavbar from './Navbar';
import Login from './Login';
import Register from './Register';
import EvaluationForm from './EvaluationForm';
import Palmier from './Palmier';
import 'bootstrap/dist/css/bootstrap.min.css';

function HomePage() {
  const [activeIndex, setActiveIndex] = useState(null);

  const conseils = [
    { emoji: '💧', title: 'Irrigation', text: "Irriguer de façon raisonnable, ni trop ni trop peu, selon l'âge, la période, la structure de sol..." },
    { emoji: '☀️', title: 'Ensachage', text: "Choisir le temps et la couverture convenables pour obtenir une production excellente." },
    { emoji: '🌱', title: 'Fertilisation', text: "Analyser votre sol et accordez plus d'attention à la fertilisation organique qu'à la fertilisation chimique." },
    { emoji: '🌾', title: 'Pollinisation', text: "Choisir le bon pollen pendant la période convenable pour obtenir une production abondante." },
    { emoji: '🛡️', title: 'Lutte Contre Maladies', text: "Mieux vaut prévenir que guérir. Prenez soin d'abord de la propreté de votre oasis, sans déchets ni restes de dattes..." },
    { emoji: '🧹', title: 'Arrondissement', text: "Aidez les palmiers à se débarrasser des insectes et des parasites qui se cachent parmi les frondes." },
    { emoji: '⚙️', title: 'Ajustement Pilage', text: "Une bonne préparation pour les processus de récolte." },
    { emoji: '✂️', title: 'Éclaircissage', text: "Pour obtenir la production de l'année prochaine et éviter une pénurie de quantité, il faut éclaircir les grappes." }
  ];

  const toggleText = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <main className="flex-fill">
        <div className="container py-5">
          <h2 className="text-center mb-4">🌿 Conseils Agricoles</h2>
          <div className="row justify-content-center">
            {conseils.map((item, index) => (
              <div className="col-md-3 col-sm-4 col-6 mb-4 text-center" key={index}>
                <button
                  className="btn btn-light border rounded-circle shadow"
                  onClick={() => toggleText(index)}
                  style={{ fontSize: '2.5rem', width: '80px', height: '80px' }}
                >
                  {item.emoji}
                </button>
                {activeIndex === index && (
                  <div className="mt-2 alert alert-success small">
                    <strong>{item.title} :</strong> {item.text}
                  </div>
                )}
              </div>
            ))}
          </div>

          <h2 className="text-center mt-5 mb-4">📢 Annonces des Agriculteurs</h2>
          <div className="list-group">
            <div className="list-group-item">
              <strong>Ahmed Smida :</strong> Cherche acheteurs pour dattes Deglet Nour, prix négociable. 📞 98 123 456
            </div>
            <div className="list-group-item">
              <strong>Fatma Mbarek :</strong> Vend palmier Deglet Nour.
            </div>
            <div className="list-group-item">
              <strong>Mohamed Ali :</strong> Offre service dans la région de Douz
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-dark text-light text-center p-4 mt-auto">
        <h5>📩 Contactez-nous</h5>
        <p>
          <strong>Email :</strong>{' '}
          <a href="mailto:contact@agriculture.com" className="text-info">
            contact@agriculture.com
          </a>
        </p>
        <p>
          <strong>Téléphone :</strong>{' '}
          <a href="tel:+21675480181" className="text-info">
            +216 75480181
          </a>
        </p>
        <p>
          <strong>Adresse :</strong> Rue Gabès, Kébili, Tunisie - 4200
        </p>
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

export default App;**/


import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppNavbar from './Navbar';
import Login from './Login';
import Register from './Register';
import EvaluationForm from './EvaluationForm';
import Palmier from './Palmier';
import Foret from './Foret';

import 'bootstrap/dist/css/bootstrap.min.css';


function HomePage() {
  const [activeIndex, setActiveIndex] = useState(null);

  const conseils = [
    { emoji: '💧', title: 'Irrigation', text: "Irriguer de façon raisonnable, ni trop ni trop peu, selon l'âge, la période, la structure de sol..." },
    { emoji: '☀️', title: 'Ensachage', text: "Choisir le temps et la couverture convenables pour obtenir une production excellente." },
    { emoji: '🌱', title: 'Fertilisation', text: "Analyser votre sol et accordez plus d'attention à la fertilisation organique qu'à la fertilisation chimique." },
    { emoji: '🌾', title: 'Pollinisation', text: "Choisir le bon pollen pendant la période convenable pour obtenir une production abondante." },
    { emoji: '🛡️', title: 'Lutte Contre Maladies', text: "Mieux vaut prévenir que guérir. Prenez soin d'abord de la propreté de votre oasis, sans déchets ni restes de dattes..." },
    { emoji: '🧹', title: 'Arrondissement', text: "Aidez les palmiers à se débarrasser des insectes et des parasites qui se cachent parmi les frondes." },
    { emoji: '⚙️', title: 'Ajustement Pilage', text: "Une bonne préparation pour les processus de récolte." },
    { emoji: '✂️', title: 'Éclaircissage', text: "Pour obtenir la production de l'année prochaine et éviter une pénurie de quantité, il faut éclaircir les grappes." }
  ];

  const toggleText = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <main className="flex-fill">
        <div className="container py-5">
          <h2 className="text-center mb-4">🌿 Conseils Agricoles</h2>
          <div className="row justify-content-center">
            {conseils.map((item, index) => (
              <div className="col-md-3 col-sm-4 col-6 mb-4 text-center" key={index}>
                <button
                  className="btn btn-light border rounded-circle shadow"
                  onClick={() => toggleText(index)}
                  style={{ fontSize: '2.5rem', width: '80px', height: '80px' }}
                >
                  {item.emoji}
                </button>
                {activeIndex === index && (
                  <div className="mt-2 alert alert-success small">
                    <strong>{item.title} :</strong> {item.text}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </main>

      <footer className="bg-dark text-light text-center p-4 mt-auto">
        <h5>📩 Contactez-nous</h5>
        <p>
          <strong>Email :</strong>{' '}
          <a href="mailto:contact@agriculture.com" className="text-info">
            contact@agriculture.com
          </a>
        </p>
        <p>
          <strong>Téléphone :</strong>{' '}
          <a href="tel:+21675480181" className="text-info">
            +216 75480181
          </a>
        </p>
        <p>
          <strong>Adresse :</strong> Rue Gabès, Kébili, Tunisie - 4200
        </p>
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
      <AppNavbar/>
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/evaluation/voir" element={<EvaluationForm />} />
          <Route path="/Palmier" element={<Palmier />} />
           <Route path="/foret" element={<Foret />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;



























