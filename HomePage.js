
/**import { useState } from "react";
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
}**/



/**import { useState } from "react";
import EnsachagePage from "./EnsachagePage";
import Irrigation from "./Irrigation";
import Pollinisation from "./Pollinisation";
import Evaluation from "./Evaluation"
import 'bootstrap/dist/css/bootstrap.min.css';

export default function HomePage() {
  const [activeTab, setActiveTab] = useState("accueil");

  const tabs = [
    { label: "Accueil", key: "accueil" },
    { label: "Ensachage", key: "ensachage" },
    { label: "Irrigation", key: "irrigation" },
    { label: "Pollinisation", key: "pollinisation" },
    { label: "Évaluation des forêts", key: "evaluation" },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "accueil":
        return (
          <div className="text-center p-4">
            <h2>🌿 Bienvenue sur notre plateforme agricole !</h2>
            <p className="lead">Optimisez vos récoltes avec nos outils intelligents.</p>
          </div>
        );
      case "ensachage":
        return <EnsachagePage />;
      case "irrigation":
        return <Irrigation />;
      case "pollinisation":
        return <Pollinisation />;
      case "evaluation":
        return (
          <div className="text-center p-4">
            <h2>🌳 Évaluation des forêts</h2>
            <p className="lead">Bientôt disponible avec intelligence artificielle.</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="container-fluid p-0">
      
      <nav className="navbar navbar-expand-lg navbar-dark bg-success px-3">
        <a className="navbar-brand" href="#"></a>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto">
            {tabs.map((tab) => (
              <li className="nav-item" key={tab.key}>
                <button
                  onClick={() => setActiveTab(tab.key)}
                  className={`btn btn-sm m-1 ${activeTab === tab.key ? 'btn-light' : 'btn-outline-light'}`}
                >
                  {tab.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>

     
      <main className="p-4">
        {renderContent()}
      </main>

      
      <footer className="bg-dark text-light text-center p-4 mt-5">
        <h5>Contactez-nous</h5>
        <p><strong>Email:</strong> <a href="mailto:contact@agriculture.com" className="text-info">contact@agriculture.com</a></p>
        <p><strong>Téléphone:</strong> <a href="tel:+21675432140" className="text-info">+216 75000000</a></p>
        <p><strong>Adresse:</strong> 123 Rue de l'Agriculture, Douz, Tunisie</p>
        <div className="d-flex justify-content-center gap-3 mt-3">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-info">Facebook</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-info">Twitter</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-info">Instagram</a>
        </div>
      </footer>
    </div>
  );
}**/


/**import { useState, useEffect } from "react";
import EnsachagePage from "./EnsachagePage";
import Irrigation from "./Irrigation";
import Pollinisation from "./Pollinisation";
import Evaluation from "./Evaluation";
import 'bootstrap/dist/css/bootstrap.min.css';


const Conseils = () => (
  <div className="my-5">
    <h3 className="text-success">🧠 Conseils Agricoles</h3>
    <div className="row g-3">
      {[
        {
          title: "Irrigation",
          content: "🌞 Adaptez l'irrigation selon la météo pour économiser de l'eau."
        },
        {
          title: "Santé des Plantes",
          content: "🌿 Inspectez vos cultures régulièrement pour détecter maladies et parasites."
        },
        {
          title: "Pratiques Durables",
          content: "🌱 Utilisez des pratiques durables pour préserver la fertilité du sol."
        }
      ].map((item, index) => (
        <div className="col-md-4" key={index}>
          <div className="card shadow-sm h-100">
            <div className="card-body">
              <h5 className="card-title">{item.title}</h5>
              <p>{item.content}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const Annonces = () => {
  const [currentAnnouncement, setCurrentAnnouncement] = useState(0);
  const annonces = [
    "🌟 La saison de pollinisation commence bientôt ! Préparez vos équipements.",
    "🚨 Nouvelle fonction : météo locale en temps réel intégrée au calendrier.",
    "📅 Webinaire : techniques de culture durable – Inscrivez-vous maintenant !"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentAnnouncement(prev => (prev + 1) % annonces.length);
    }, 10000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="my-5">
      <h3 className="text-primary">📢 Dernières Annonces</h3>
      <div className="card shadow-sm mb-3">
        <div className="card-body d-flex align-items-center">
          <i className="bi bi-megaphone-fill text-danger fs-4 me-3"></i>
          <p className="mb-0">{annonces[currentAnnouncement]}</p>
        </div>
      </div>
      <button onClick={() => setCurrentAnnouncement((currentAnnouncement + 1) % annonces.length)}
              className="btn btn-outline-primary">
        Suivante
      </button>
    </div>
  );
};

export default function HomePage() {
  const [activeTab, setActiveTab] = useState("accueil");

  const tabs = [
    { label: "Accueil", key: "accueil", icon: "bi-house" },
    { label: "Ensachage", key: "ensachage", icon: "bi-box" },
    { label: "Irrigation", key: "irrigation", icon: "bi-droplet-half" },
    { label: "Pollinisation", key: "pollinisation", icon: "bi-flower1" },
    { label: "Évaluation", key: "evaluation", icon: "bi-graph-up" },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "accueil":
        return (
          <div className="text-center p-4">
            <h2 className="text-success">🌿 Bienvenue sur AgriPlateforme</h2>
            <p className="lead">Optimisez vos cultures grâce à l’intelligence et à l’analyse.</p>
            <Conseils />
            <Annonces />
          </div>
        );
      case "ensachage":
        return <EnsachagePage />;
      case "irrigation":
        return <Irrigation />;
      case "pollinisation":
        return <Pollinisation />;
      case "evaluation":
        return <Evaluation />;
      default:
        return null;
    }
  };

  return (
    <div className="container-fluid p-0">
      
      <nav className="navbar navbar-expand-lg navbar-dark bg-success px-3">
        <a className="navbar-brand fw-bold fs-4" href="#">🌾 AgriPlateforme</a>
        <div className="collapse navbar-collapse justify-content-end">
          <ul className="navbar-nav">
            {tabs.map((tab) => (
              <li className="nav-item" key={tab.key}>
                <button
                  onClick={() => setActiveTab(tab.key)}
                  className={`btn btn-sm mx-1 ${activeTab === tab.key ? 'btn-light' : 'btn-outline-light'}`}
                >
                  <i className={`bi ${tab.icon} me-1`}></i>
                  {tab.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>

    
      <main className="p-4 bg-light text-dark min-vh-100">{renderContent()}</main>

      
      <footer className="bg-dark text-light text-center p-4">
        <h5>📬 Contactez-nous</h5>
        <p><strong>Email:</strong> <a href="mailto:contact@agriculture.com" className="text-info">contact@agriculture.com</a></p>
        <p><strong>Téléphone:</strong> <a href="tel:+21675432140" className="text-info">+216 75000000</a></p>
        <p><strong>Adresse:</strong> 123 Rue de l'Agriculture, Douz, Tunisie - 4200</p>
        <div className="d-flex justify-content-center gap-3 mt-3">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-info">Facebook</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-info">Twitter</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-info">Instagram</a>
        </div>
      </footer>
    </div>
  );
}**/


import { useState, useEffect } from "react";
import EnsachagePage from "./EnsachagePage";
import Irrigation from "./Irrigation";
import Pollinisation from "./Pollinisation";
import Evaluation from "./Evaluation";
import 'bootstrap/dist/css/bootstrap.min.css';


const Conseils = () => {
  const conseilsData = [
    {
      category: "Irrigation",
      tips: [
        "🌞 Adaptez l'irrigation selon la météo pour économiser de l'eau.",
        "💧 Arrosez tôt le matin ou tard le soir pour minimiser l'évaporation.",
        "🚿 Utilisez des systèmes de goutte-à-goutte pour une irrigation ciblée."
      ]
    },
    {
      category: "Santé des Plantes",
      tips: [
        "🌿 Inspectez vos cultures régulièrement pour détecter maladies et parasites.",
        "🕷️ Utilisez des solutions biologiques pour lutter contre les ravageurs.",
        "🔍 Observez la couleur des feuilles : jaunissement = stress ou carence."
      ]
    },
    {
      category: "Pratiques Durables",
      tips: [
        "🌱 Utilisez des pratiques durables pour préserver la fertilité du sol.",
        "♻️ Faites du compost avec les déchets organiques.",
        "🚜 Alternez les cultures pour éviter l’épuisement du sol."
      ]
    },
    {
      category: "Fertilisation",
      tips: [
        "📅 Fertilisez selon le calendrier agricole local.",
        "🧪 Analysez votre sol pour adapter les engrais.",
        "🥬 Privilégiez les engrais organiques pour une agriculture saine."
      ]
    },
    {
      category: "Protection des cultures",
      tips: [
        "🌬️ Utilisez des filets ou haies pour réduire les effets du vent.",
        "☀️ Couvrez les cultures sensibles lors des pics de chaleur.",
        "❄️ Protégez du gel en paillant le sol ou en couvrant les jeunes plants."
      ]
    }
  ];

  return (
    <div className="my-5">
      <h3 className="text-success mb-4">🧠 Conseils Agricoles</h3>
      <div className="row g-4">
        {conseilsData.map((section, index) => (
          <div className="col-md-6 col-lg-4" key={index}>
            <div className="card h-100 shadow-sm border-success">
              <div className="card-header bg-success text-white fw-bold">
                📌 {section.category}
              </div>
              <div className="card-body">
                <ul className="list-unstyled mb-0">
                  {section.tips.map((tip, i) => (
                    <li key={i} className="mb-2">✅ {tip}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Annonces = () => {
  const [currentAnnouncement, setCurrentAnnouncement] = useState(0);
  const annonces = [
    "🌟 La saison de pollinisation commence bientôt ! Préparez vos équipements.",
    "🚨 Nouvelle fonction : météo locale en temps réel intégrée au calendrier.",
    "📅 Webinaire : techniques de culture durable – Inscrivez-vous maintenant !"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentAnnouncement(prev => (prev + 1) % annonces.length);
    }, 10000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="my-5">
      <h3 className="text-primary">📢 Dernières Annonces</h3>
      <div className="card shadow-sm mb-3">
        <div className="card-body d-flex align-items-center">
          <i className="bi bi-megaphone-fill text-danger fs-4 me-3"></i>
          <p className="mb-0">{annonces[currentAnnouncement]}</p>
        </div>
      </div>
      <button onClick={() => setCurrentAnnouncement((currentAnnouncement + 1) % annonces.length)}
              className="btn btn-outline-primary">
        Suivante
      </button>
    </div>
  );
};

export default function HomePage() {
  const [activeTab, setActiveTab] = useState("accueil");

  const tabs = [
    { label: "Accueil", key: "accueil", icon: "bi-house" },
    { label: "Ensachage", key: "ensachage", icon: "bi-box" },
    { label: "Irrigation", key: "irrigation", icon: "bi-droplet-half" },
    { label: "Pollinisation", key: "pollinisation", icon: "bi-flower1" },
    { label: "Évaluation", key: "evaluation", icon: "bi-graph-up" },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "accueil":
        return (
          <div className="text-center p-4">
            <h2 className="text-success">🌿 Bienvenue sur AgriPlateforme</h2>
            
            <Conseils />
            <Annonces />
          </div>
        );
      case "ensachage":
        return <EnsachagePage />;
      case "irrigation":
        return <Irrigation />;
      case "pollinisation":
        return <Pollinisation />;
      case "evaluation":
        return <Evaluation />;
      default:
        return null;
    }
  };

  return (
    <div className="container-fluid p-0">
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-success px-3">
        <a className="navbar-brand fw-bold fs-4" href="#">🌾 AgriPlateforme</a>
        <div className="collapse navbar-collapse justify-content-end">
          <ul className="navbar-nav">
            {tabs.map((tab) => (
              <li className="nav-item" key={tab.key}>
                <button
                  onClick={() => setActiveTab(tab.key)}
                  className={`btn btn-sm mx-1 ${activeTab === tab.key ? 'btn-light' : 'btn-outline-light'}`}
                >
                  <i className={`bi ${tab.icon} me-1`}></i>
                  {tab.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Content */}
      <main className="p-4 bg-light text-dark min-vh-100">{renderContent()}</main>

      {/* Footer */}
      <footer className="bg-dark text-light text-center p-4">
        <h5>📬 Contactez-nous</h5>
        <p><strong>Email:</strong> <a href="mailto:contact@agriculture.com" className="text-info">contact@agriculture.com</a></p>
        <p><strong>Téléphone:</strong> <a href="tel:+21675432140" className="text-info">+216 75000000</a></p>
        <p><strong>Adresse:</strong> 123 Rue de l'Agriculture, Douz, Tunisie - 4200</p>
        <div className="d-flex justify-content-center gap-3 mt-3">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-info">Facebook</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-info">Twitter</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-info">Instagram</a>
        </div>
      </footer>
    </div>
  );
}


















