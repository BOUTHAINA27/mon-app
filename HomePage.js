
import { useState } from "react";
import EnsachagePage from "./EnsachagePage";
import Irrigation from "./Irrigation";
import Pollinisation from "./Pollinisation";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function HomePage() {
  const [activeTab, setActiveTab] = useState("accueil");

  const tabs = ["Accueil", "Ensachage", "Irrigation", "Pollinisation", "Évaluation des forêts"];

  return (
    <div className="home-container">
      <nav className="navbar">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab.toLowerCase())}
            className={activeTab === tab.toLowerCase() ? "button active" : "button inactive"}
          >
            {tab}
          </button>
        ))}
      </nav>

      <div className="tab-content">
        {activeTab === "accueil" && (
          <div>
            <h2 className="tab-title">🌿 Bienvenue sur notre plateforme agricole !</h2>
          </div>
        )}

        {activeTab === "ensachage" && <EnsachagePage />}
        {activeTab === "irrigation" && <Irrigation />}
        {activeTab === "pollinisation" && <Pollinisation />}

        {activeTab === "évaluation des forêts" && (
          <div>
            <h2 className="tab-title">🌳 Évaluation des forêts</h2>
            <p>Bientôt disponible avec intelligence artificielle.</p>
          </div>
        )}
      </div>

      <footer className="footer">
        <h3>Contactez-nous</h3>
        <div className="contact-info">
          <p><strong>Email:</strong> <a href="mailto:contact@agriculture.com">contact@agriculture.com</a></p>
          <p><strong>Téléphone:</strong> <a href="tel:+21675432140">+216 75432140</a></p>
          <p><strong>Adresse:</strong> 123 Rue de l'Agriculture, Douz, Tunisie</p>
        </div>
        <div className="social-links">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
      </footer>
    </div>
  );
}



