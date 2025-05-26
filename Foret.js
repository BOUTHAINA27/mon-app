
/**import React, { useState } from 'react';

const Foret = () => {
  const lieuxKebili = [
    " Kébili", 
    "Janoura", 
    "Douz", 
    "El Faouar", 
    "Bouabdellah", 
    "Jemna", 
    "RejimMaatoug", 
    "Barghouthia",
    "Bcheli", 
    "Golaa", 
    "Om somaa", 
    "Eljazira", 
    "Elmenchia", 
    "Fetnassa", 
    "Gliaa", 
    "Zawya",
    "Zwaya", 
    "Negga", 
    "Bechni", 
    "Derjin", 
    "Zaafran", 
    "Limagues", 
    "Esteftimi", 
    "Telmin", 
    "Tenbib",
    "Tombar", 
    "Elrabta", 
    "Elgataya", 
    "Sabriya", 
    "Ghidma", 
    "Blidet", 
    "Glisia", 
    "Klibia", 
    "Rahmat",
    "Bnimhemed", 
    "Jdida", 
    "Mansoura", 
    "Bazma", 
    "Radhouan", 
    "Kelwamen", 
    "Naouiel", 
    "Om Alfarth",
    "MazraaNaji", 
    "Faroun", 
    "Om Rous", 
    "CharebLahrach", 
    "Dbebcha"
  ];

  const [forets, setForets] = useState([
    {
      id: 1,
      nom: 'Forêt de Kébili A',
      nombrePalmiers: 120,
      region: 'Kébili',
      metrages: '15 ha',
      lieu: 'Kébili',
      irrigationParMois: '3 fois',
      ensachage: 'Oui',
      fertilisation: 'Oui',
      pollinisation: 'Oui',
      lutteContreMaladies: 'Oui',
      arrondissement: 'Arrondissement 1',
      ajustementPliage: 'Oui',
      eclaircissageGrappes: 'Oui',
    },
    {
      id: 2,
      nom: 'Forêt de Kébili B',
      nombrePalmiers: 85,
      region: 'Kébili',
      metrages: '8 ha',
      lieu: 'Douz',
      irrigationParMois: '2 fois',
      ensachage: 'Non',
      fertilisation: 'Non',
      pollinisation: 'Non',
      lutteContreMaladies: 'Non',
      arrondissement: 'Arrondissement 2',
      ajustementPliage: 'Non',
      eclaircissageGrappes: 'Non',
    },
  ]);

  const [selectedForet, setSelectedForet] = useState(null);
  const [newForet, setNewForet] = useState({
    nom: '',
    nombrePalmiers: '',
    metrages: '',
    region: 'Kébili',
    lieu: '',
    irrigationParMois: '',
    ensachage: '',
    fertilisation: '',
    pollinisation: '',
    lutteContreMaladies: '',
    arrondissement: '',
    ajustementPliage: '',
    eclaircissageGrappes: '',
  });

  const toggleDetails = (foret) => {
    setSelectedForet(selectedForet?.id === foret.id ? null : foret);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewForet(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAddForet = (e) => {
    e.preventDefault();
    if (!newForet.nom || !newForet.nombrePalmiers || !newForet.metrages || !newForet.lieu) {
      alert('Veuillez remplir les champs requis.');
      return;
    }

    const newId = forets.length > 0 ? forets[forets.length - 1].id + 1 : 1;

    const foretToAdd = {
      id: newId,
      ...newForet,
      nombrePalmiers: parseInt(newForet.nombrePalmiers, 10),
      region: 'Kébili'
    };

    setForets(prev => [...prev, foretToAdd]);
    setNewForet({
      nom: '',
      nombrePalmiers: '',
      metrages: '',
      region: 'Kébili',
      lieu: '',
      irrigationParMois: '',
      ensachage: '',
      fertilisation: '',
      pollinisation: '',
      lutteContreMaladies: '',
      arrondissement: '',
      ajustementPliage: '',
      eclaircissageGrappes: '',
    });
  };

  const renderForetHistorique = (foret) => {
    return (
      <div className="card mt-3 mb-3">
        <div className="card-body">
          <h5 className="card-title">historique {foret.nom}</h5>
          
          <div className="row">
            <div className="col-md-6">
              <p><strong>📍 Lieu:</strong> {foret.lieu}</p>
              <p><strong>🏞 Région:</strong> {foret.region}</p>
              <p><strong>📏 Métrage:</strong> {foret.metrages}</p>
              <p><strong>🌴 Nombre de palmiers:</strong> {foret.nombrePalmiers}</p>
              <p><strong>💧 Irrigation/mois:</strong> {foret.irrigationParMois}</p>
            </div>
            <div className="col-md-6">
              <p><strong>🛡 Ensachage:</strong> {foret.ensachage}</p>
              <p><strong>🌱 Fertilisation:</strong> {foret.fertilisation}</p>
              <p><strong>🌸 Pollinisation:</strong> {foret.pollinisation}</p>
              <p><strong>⚔ Lutte contre maladies:</strong> {foret.lutteContreMaladies}</p>
              <p><strong>🗺 Arrondissement:</strong> {foret.arrondissement}</p>
            </div>
          </div>
          
          <div className="mt-3">
            <h6>🔧 Techniques appliquées:</h6>
            <p><strong>Ajustement pliage:</strong> {foret.ajustementPliage}</p>
            <p><strong>Éclaircissage grappes:</strong> {foret.eclaircissageGrappes}</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">🌴</h2>

      <div className="card shadow-sm mb-5">
        <div className="card-body">
          <h3 className="card-title">Liste des Forêts</h3>
          
          <div className="table-responsive">
            <table className="table table-hover">
              <thead className="table-light">
                <tr>
                  <th>Nom</th>
                  <th>Palmiers</th>
                  <th>Lieu</th>
                  <th>Métrage</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {forets.length === 0 ? (
                  <tr>
                    <td colSpan="5" className="text-center py-4">
                      <em>Aucune forêt enregistrée</em>
                    </td>
                  </tr>
                ) : (
                  forets.map(foret => (
                    <React.Fragment key={foret.id}>
                      <tr>
                        <td>{foret.nom}</td>
                        <td>{foret.nombrePalmiers}</td>
                        <td>{foret.lieu}</td>
                        <td>{foret.metrages}</td>
                        <td>
                          <button
                            className="btn btn-sm btn-outline-primary"
                            onClick={() => toggleDetails(foret)}
                          >
                            {selectedForet?.id === foret.id ? 'Masquer' : 'historique'}
                          </button>
                        </td>
                      </tr>
                      {selectedForet?.id === foret.id && (
                        <tr>
                          <td colSpan="5" className="p-0">
                            {renderForetHistorique(foret)}
                          </td>
                        </tr>
                      )}
                    </React.Fragment>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="card shadow-sm">
        <div className="card-body">
          <h3 className="card-title mb-4">➕ Ajouter une Nouvelle Forêt</h3>
          
          <form onSubmit={handleAddForet}>
            <div className="row">
              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="nom" className="form-label">Nom de la forêt *</label>
                  <input
                    type="text"
                    id="nom"
                    name="nom"
                    value={newForet.nom}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Ex: Forêt de Kébili C"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="nombrePalmiers" className="form-label">Nombre de palmiers *</label>
                  <input
                    type="number"
                    id="nombrePalmiers"
                    name="nombrePalmiers"
                    value={newForet.nombrePalmiers}
                    onChange={handleChange}
                    className="form-control"
                    min="0"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="metrages" className="form-label">Métrage *</label>
                  <input
                    type="text"
                    id="metrages"
                    name="metrages"
                    value={newForet.metrages}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Ex: 10 ha"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="region" className="form-label">Région</label>
                  <input
                    type="text"
                    id="region"
                    name="region"
                    value={newForet.region}
                    className="form-control"
                    readOnly
                  />
                </div>
              </div>

              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="lieu" className="form-label">Lieu *</label>
                  <select
                    id="lieu"
                    name="lieu"
                    value={newForet.lieu}
                    onChange={handleChange}
                    className="form-select"
                    required
                  >
                    <option value="">-- Sélectionner un lieu --</option>
                    {lieuxKebili.map((lieu, index) => (
                      <option key={index} value={lieu}>{lieu}</option>
                    ))}
                  </select>
                </div>

                <div className="mb-3">
                  <label htmlFor="irrigationParMois" className="form-label">Irrigation par mois</label>
                  <input
                    type="text"
                    id="irrigationParMois"
                    name="irrigationParMois"
                    value={newForet.irrigationParMois}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Ex: 3 fois"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="ensachage" className="form-label">Ensachage</label>
                  <select
                    id="ensachage"
                    name="ensachage"
                    value={newForet.ensachage}
                    onChange={handleChange}
                    className="form-select"
                  >
                    <option value="">-- Sélectionner --</option>
                    <option value="Oui">Oui</option>
                    <option value="Non">Non</option>
                  </select>
                </div>

                <div className="mb-3">
                  <label htmlFor="fertilisation" className="form-label">Fertilisation</label>
                  <select
                    id="fertilisation"
                    name="fertilisation"
                    value={newForet.fertilisation}
                    onChange={handleChange}
                    className="form-select"
                  >
                    <option value="">-- Sélectionner --</option>
                    <option value="Oui">Oui</option>
                    <option value="Non">Non</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="pollinisation" className="form-label">Pollinisation</label>
                  <select
                    id="pollinisation"
                    name="pollinisation"
                    value={newForet.pollinisation}
                    onChange={handleChange}
                    className="form-select"
                  >
                    <option value="">-- Sélectionner --</option>
                    <option value="Oui">Oui</option>
                    <option value="Non">Non</option>
                  </select>
                </div>

                <div className="mb-3">
                  <label htmlFor="lutteContreMaladies" className="form-label">Lutte contre maladies</label>
                  <select
                    id="lutteContreMaladies"
                    name="lutteContreMaladies"
                    value={newForet.lutteContreMaladies}
                    onChange={handleChange}
                    className="form-select"
                  >
                    <option value="">-- Sélectionner --</option>
                    <option value="Oui">Oui</option>
                    <option value="Non">Non</option>
                  </select>
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="ajustementPliage" className="form-label">Ajustement pliage</label>
                  <select
                    id="ajustementPliage"
                    name="ajustementPliage"
                    value={newForet.ajustementPliage}
                    onChange={handleChange}
                    className="form-select"
                  >
                    <option value="">-- Sélectionner --</option>
                    <option value="Oui">Oui</option>
                    <option value="Non">Non</option>
                  </select>
                </div>

                <div className="mb-3">
                  <label htmlFor="eclaircissageGrappes" className="form-label">Éclaircissage grappes</label>
                  <select
                    id="eclaircissageGrappes"
                    name="eclaircissageGrappes"
                    value={newForet.eclaircissageGrappes}
                    onChange={handleChange}
                    className="form-select"
                  >
                    <option value="">-- Sélectionner --</option>
                    <option value="Oui">Oui</option>
                    <option value="Non">Non</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="text-end mt-4">
              <button type="submit" className="btn btn-success px-4">
                <i className="bi bi-plus-circle me-2"></i>
                Ajouter la Forêt
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Foret;**/


/**import React, { useState, useEffect } from 'react';

const Foret = () => {
  const lieuxKebili = [
    "Kébili", "Janoura", "Douz", "El Faouar", "Bouabdellah", "Jemna", 
    "RejimMaatoug", "Barghouthia", "Bcheli", "Golaa", "Om somaa", "Eljazira",
    "Elmenchia", "Fetnassa", "Gliaa", "Zawya", "Zwaya", "Negga", "Bechni",
    "Derjin", "Zaafran", "Limagues", "Esteftimi", "Telmin", "Tenbib",
    "Tombar", "Elrabta", "Elgataya", "Sabriya", "Ghidma", "Blidet", 
    "Glisia", "Klibia", "Rahmat", "Bnimhemed", "Jdida", "Mansoura", 
    "Bazma", "Radhouan", "Kelwamen", "Naouiel", "Om Alfarth", "MazraaNaji",
    "Faroun", "Om Rous", "CharebLahrach", "Dbebcha"
  ];

  const [forets, setForets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedForet, setSelectedForet] = useState(null);
  
  const [newForet, setNewForet] = useState({
    nom: '',
    nombrePalmiers: '',
    metrages: '',
    region: 'Kébili',
    lieu: '',
    irrigationParMois: '',
    ensachage: 'Non',
    fertilisation: 'Non',
    pollinisation: 'Non',
    lutteContreMaladies: 'Non',
    arrondissement: '',
    ajustementPliage: 'Non',
    eclaircissageGrappes: 'Non',
  });

  useEffect(() => {
    const fetchForets = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/forets');
        if (!response.ok) throw new Error("Erreur lors du chargement des forêts");
        const data = await response.json();
        setForets(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    
    fetchForets();
  }, []);

  const toggleDetails = (foret) => {
    setSelectedForet(selectedForet?.id === foret.id ? null : foret);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewForet(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAddForet = async (e) => {
    e.preventDefault();
    
    if (!newForet.nom || !newForet.nombrePalmiers || !newForet.metrages || !newForet.lieu) {
      alert('Veuillez remplir les champs requis.');
      return;
    }

    try {
      const response = await fetch('http://localhost:8080/api/forets', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ...newForet,
          nombrePalmiers: parseInt(newForet.nombrePalmiers, 10)
        })
      });

      if (!response.ok) throw new Error("Erreur lors de l'ajout");

      const data = await response.json();
      setForets([...forets, data]);
      
      setNewForet({
        nom: '',
        nombrePalmiers: '',
        metrages: '',
        region: 'Kébili',
        lieu: '',
        irrigationParMois: '',
        ensachage: 'Non',
        fertilisation: 'Non',
        pollinisation: 'Non',
        lutteContreMaladies: 'Non',
        arrondissement: '',
        ajustementPliage: 'Non',
        eclaircissageGrappes: 'Non',
      });

      alert('Forêt ajoutée avec succès!');
    } catch (err) {
      alert("Erreur lors de l'ajout de la forêt : " + err.message);
    }
  };

  const renderForetHistorique = (foret) => (
    <div className="card mt-3 mb-3">
      <div className="card-body">
        <h5 className="card-title">Historique {foret.nom}</h5>
        <div className="row">
          <div className="col-md-6">
            <p><strong>📍 Lieu:</strong> {foret.lieu}</p>
            <p><strong>🏞 Région:</strong> {foret.region}</p>
            <p><strong>📏 Métrage:</strong> {foret.metrages}</p>
            <p><strong>🌴 Nombre de palmiers:</strong> {foret.nombrePalmiers}</p>
            <p><strong>💧 Irrigation/mois:</strong> {foret.irrigationParMois}</p>
          </div>
          <div className="col-md-6">
            <p><strong>🛡 Ensachage:</strong> {foret.ensachage}</p>
            <p><strong>🌱 Fertilisation:</strong> {foret.fertilisation}</p>
            <p><strong>🌸 Pollinisation:</strong> {foret.pollinisation}</p>
            <p><strong>⚔ Lutte contre maladies:</strong> {foret.lutteContreMaladies}</p>
            <p><strong>🗺 Arrondissement:</strong> {foret.arrondissement}</p>
          </div>
        </div>
        <div className="mt-3">
          <h6>🔧 Techniques appliquées:</h6>
          <p><strong>Ajustement pliage:</strong> {foret.ajustementPliage}</p>
          <p><strong>Éclaircissage grappes:</strong> {foret.eclaircissageGrappes}</p>
        </div>
      </div>
    </div>
  );

  if (loading) return <div className="container mt-4">Chargement...</div>;
  if (error) return <div className="container mt-4">Erreur: {error}</div>;

  return (
    <div className="container mt-4">
      <h2 className="mb-4">🌴 Gestion des Forêts de Kébili</h2>

      <div className="card shadow-sm mb-5">
        <div className="card-body">
          <h3 className="card-title">Liste des Forêts</h3>
          <div className="table-responsive">
            <table className="table table-hover">
              <thead className="table-light">
                <tr>
                  <th>Nom</th>
                  <th>Palmiers</th>
                  <th>Lieu</th>
                  <th>Métrage</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {forets.length === 0 ? (
                  <tr>
                    <td colSpan="5" className="text-center py-4">
                      <em>Aucune forêt enregistrée</em>
                    </td>
                  </tr>
                ) : (
                  forets.map(foret => (
                    <React.Fragment key={foret.id}>
                      <tr>
                        <td>{foret.nom}</td>
                        <td>{foret.nombrePalmiers}</td>
                        <td>{foret.lieu}</td>
                        <td>{foret.metrages}</td>
                        <td>
                          <button
                            className="btn btn-sm btn-outline-primary"
                            onClick={() => toggleDetails(foret)}
                          >
                            {selectedForet?.id === foret.id ? 'Masquer' : 'Historique'}
                          </button>
                        </td>
                      </tr>
                      {selectedForet?.id === foret.id && (
                        <tr>
                          <td colSpan="5" className="p-0">
                            {renderForetHistorique(foret)}
                          </td>
                        </tr>
                      )}
                    </React.Fragment>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="card shadow-sm">
        <div className="card-body">
          <h3 className="card-title mb-4">➕ Ajouter une Nouvelle Forêt</h3>
          <form onSubmit={handleAddForet}>
            <div className="row">
              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="nom" className="form-label">Nom de la forêt *</label>
                  <input type="text" id="nom" name="nom" value={newForet.nom} onChange={handleChange} className="form-control" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="nombrePalmiers" className="form-label">Nombre de palmiers *</label>
                  <input type="number" id="nombrePalmiers" name="nombrePalmiers" value={newForet.nombrePalmiers} onChange={handleChange} className="form-control" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="metrages" className="form-label">Métrage *</label>
                  <input type="text" id="metrages" name="metrages" value={newForet.metrages} onChange={handleChange} className="form-control" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="region" className="form-label">Région</label>
                  <input type="text" id="region" name="region" value={newForet.region} readOnly className="form-control" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="lieu" className="form-label">Lieu *</label>
                  <select id="lieu" name="lieu" value={newForet.lieu} onChange={handleChange} className="form-select" required>
                    <option value="">-- Sélectionner un lieu --</option>
                    {lieuxKebili.map((lieu, i) => (
                      <option key={i} value={lieu}>{lieu}</option>
                    ))}
                  </select>
                </div>
                {/* Ajoutez d'autres champs ici si besoin 
              </div>
            </div>
            <button type="submit" className="btn btn-success mt-3">Ajouter</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Foret;**/



/**import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Foret = () => {
  const lieuxKebili = [
    "Kébili", "Janoura", "Douz", "El Faouar", "Bouabdellah", "Jemna", 
    "RejimMaatoug", "Barghouthia", "Bcheli", "Golaa", "Om somaa", "Eljazira",
    "Elmenchia", "Fetnassa", "Gliaa", "Zawya", "Zwaya", "Negga", "Bechni",
    "Derjin", "Zaafran", "Limagues", "Esteftimi", "Telmin", "Tenbib",
    "Tombar", "Elrabta", "Elgataya", "Sabriya", "Ghidma", "Blidet", 
    "Glisia", "Klibia", "Rahmat", "Bnimhemed", "Jdida", "Mansoura", 
    "Bazma", "Radhouan", "Kelwamen", "Naouiel", "Om Alfarth", "MazraaNaji",
    "Faroun", "Om Rous", "CharebLahrach", "Dbebcha"
  ];

  const [forets, setForets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedForet, setSelectedForet] = useState(null);
  const [isAdding, setIsAdding] = useState(false);
  
  const [newForet, setNewForet] = useState({
    nom: '',
    nombrePalmiers: '',
    metrages: '',
    region: 'Kébili',
    lieu: '',
    irrigationParMois: '',
    ensachage: 'Non',
    fertilisation: 'Non',
    pollinisation: 'Non',
    lutteContreMaladies: 'Non',
    arrondissement: '',
    ajustementPliage: 'Non',
    eclaircissageGrappes: 'Non',
  });

  useEffect(() => {
    const fetchForets = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/forets');
        setForets(response.data);
      } catch (err) {
        setError(err.response?.data?.message || err.message);
      } finally {
        setLoading(false);
      }
    };
    
    fetchForets();
  }, []);

  const toggleDetails = (foret) => {
    setSelectedForet(selectedForet?.id === foret.id ? null : foret);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewForet(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAddForet = async (e) => {
    e.preventDefault();
    
    if (!newForet.nom || !newForet.nombrePalmiers || !newForet.metrages || !newForet.lieu) {
      alert('Veuillez remplir les champs requis: Nom, Nombre de palmiers, Métrage et Lieu');
      return;
    }

    try {
      setIsAdding(true);
      const response = await axios.post('http://localhost:8080/api/forets', {
        ...newForet,
        nombrePalmiers: parseInt(newForet.nombrePalmiers, 10)
      });

      setForets([...forets, response.data]);
      
      setNewForet({
        nom: '',
        nombrePalmiers: '',
        metrages: '',
        region: 'Kébili',
        lieu: '',
        irrigationParMois: '',
        ensachage: 'Non',
        fertilisation: 'Non',
        pollinisation: 'Non',
        lutteContreMaladies: 'Non',
        arrondissement: '',
        ajustementPliage: 'Non',
        eclaircissageGrappes: 'Non',
      });

      alert('Forêt ajoutée avec succès!');
    } catch (err) {
      alert(err.response?.data?.message || "Erreur lors de l'ajout de la forêt");
    } finally {
      setIsAdding(false);
    }
  };

  const renderForetDetails = (foret) => (
    <div className="card mt-3 mb-3">
      <div className="card-body">
        <h5 className="card-title">Détails de {foret.nom}</h5>
        <div className="row">
          <div className="col-md-6">
            <p><strong>📍 Lieu:</strong> {foret.lieu}</p>
            <p><strong>🏞 Région:</strong> {foret.region}</p>
            <p><strong>📏 Métrage:</strong> {foret.metrages}</p>
            <p><strong>🌴 Nombre de palmiers:</strong> {foret.nombrePalmiers}</p>
            <p><strong>💧 Irrigation/mois:</strong> {foret.irrigationParMois}</p>
          </div>
          <div className="col-md-6">
            <p><strong>🛡 Ensachage:</strong> {foret.ensachage}</p>
            <p><strong>🌱 Fertilisation:</strong> {foret.fertilisation}</p>
            <p><strong>🌸 Pollinisation:</strong> {foret.pollinisation}</p>
            <p><strong>⚔ Lutte contre maladies:</strong> {foret.lutteContreMaladies}</p>
            <p><strong>🗺 Arrondissement:</strong> {foret.arrondissement}</p>
          </div>
        </div>
        <div className="mt-3">
          <h6>🔧 Techniques appliquées:</h6>
          <p><strong>Ajustement pliage:</strong> {foret.ajustementPliage}</p>
          <p><strong>Éclaircissage grappes:</strong> {foret.eclaircissageGrappes}</p>
        </div>
      </div>
    </div>
  );

  if (loading) return <div className="container mt-4 text-center"><div className="spinner-border text-primary" role="status"></div></div>;
  if (error) return <div className="container mt-4 alert alert-danger">Erreur: {error}</div>;

  return (
    <div className="container mt-4">
      <h2 className="mb-4">🌴 Gestion des Forêts </h2>

      <div className="card shadow-sm mb-5">
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h3 className="card-title mb-0">Liste des Forêts</h3>
            <span className="badge bg-primary">{forets.length} forêts</span>
          </div>
          
          <div className="table-responsive">
            <table className="table table-hover">
              <thead className="table-light">
                <tr>
                  <th>Nom</th>
                  <th>Palmiers</th>
                  <th>Lieu</th>
                  <th>Métrage</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {forets.length === 0 ? (
                  <tr>
                    <td colSpan="5" className="text-center py-4 text-muted">
                      Aucune forêt enregistrée
                    </td>
                  </tr>
                ) : (
                  forets.map(foret => (
                    <React.Fragment key={foret.id}>
                      <tr>
                        <td>{foret.nom}</td>
                        <td>{foret.nombrePalmiers}</td>
                        <td>{foret.lieu}</td>
                        <td>{foret.metrages}</td>
                        <td>
                          <button
                            className="btn btn-sm btn-outline-primary"
                            onClick={() => toggleDetails(foret)}
                          >
                            {selectedForet?.id === foret.id ? 'Masquer' : 'Historique'}
                          </button>
                        </td>
                      </tr>
                      {selectedForet?.id === foret.id && (
                        <tr>
                          <td colSpan="5" className="p-0">
                            {renderForetDetails(foret)}
                          </td>
                        </tr>
                      )}
                    </React.Fragment>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="card shadow-sm">
        <div className="card-body">
          <h3 className="card-title mb-4">➕ Ajouter une Nouvelle Forêt</h3>
          <form onSubmit={handleAddForet}>
            <div className="row">
              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="nom" className="form-label">Nom de la forêt *</label>
                  <input 
                    type="text" 
                    id="nom" 
                    name="nom" 
                    value={newForet.nom} 
                    onChange={handleChange} 
                    className="form-control" 
                    placeholder="Ex: Forêt de Douz" 
                    required 
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="nombrePalmiers" className="form-label">Nombre de palmiers *</label>
                  <input 
                    type="number" 
                    id="nombrePalmiers" 
                    name="nombrePalmiers" 
                    value={newForet.nombrePalmiers} 
                    onChange={handleChange} 
                    className="form-control" 
                    min="1" 
                    required 
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="metrages" className="form-label">Métrage *</label>
                  <input 
                    type="text" 
                    id="metrages" 
                    name="metrages" 
                    value={newForet.metrages} 
                    onChange={handleChange} 
                    className="form-control" 
                    placeholder="Ex: 5 ha" 
                    required 
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="region" className="form-label">Région</label>
                  <input 
                    type="text" 
                    id="region" 
                    name="region" 
                    value={newForet.region} 
                    readOnly 
                    className="form-control" 
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="lieu" className="form-label">Lieu *</label>
                  <select 
                    id="lieu" 
                    name="lieu" 
                    value={newForet.lieu} 
                    onChange={handleChange} 
                    className="form-select" 
                    required
                  >
                    <option value="">-- Sélectionner un lieu --</option>
                    {lieuxKebili.map((lieu, i) => (
                      <option key={i} value={lieu}>{lieu}</option>
                    ))}
                  </select>
                </div>
                <div className="mb-3">
                  <label htmlFor="irrigationParMois" className="form-label">Irrigation par mois</label>
                  <input 
                    type="text" 
                    id="irrigationParMois" 
                    name="irrigationParMois" 
                    value={newForet.irrigationParMois} 
                    onChange={handleChange} 
                    className="form-control" 
                    placeholder="Ex: 2 fois" 
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="arrondissement" className="form-label">Arrondissement</label>
                  <input 
                    type="text" 
                    id="arrondissement" 
                    name="arrondissement" 
                    value={newForet.arrondissement} 
                    onChange={handleChange} 
                    className="form-control" 
                    placeholder="Ex: Arrondissement Nord" 
                  />
                </div>
              </div>
            </div>
            
            <div className="row mt-2">
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">Techniques appliquées</label>
                  <div className="form-check">
                    <input 
                      className="form-check-input" 
                      type="checkbox" 
                      id="ensachage" 
                      name="ensachage" 
                      checked={newForet.ensachage === 'Oui'} 
                      onChange={() => setNewForet(prev => ({
                        ...prev,
                        ensachage: prev.ensachage === 'Oui' ? 'Non' : 'Oui'
                      }))} 
                    />
                    <label className="form-check-label" htmlFor="ensachage">Ensachage</label>
                  </div>
                  <div className="form-check">
                    <input 
                      className="form-check-input" 
                      type="checkbox" 
                      id="fertilisation" 
                      name="fertilisation" 
                      checked={newForet.fertilisation === 'Oui'} 
                      onChange={() => setNewForet(prev => ({
                        ...prev,
                        fertilisation: prev.fertilisation === 'Oui' ? 'Non' : 'Oui'
                      }))} 
                    />
                    <label className="form-check-label" htmlFor="fertilisation">Fertilisation</label>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label invisible">Techniques</label>
                  <div className="form-check">
                    <input 
                      className="form-check-input" 
                      type="checkbox" 
                      id="ajustementPliage" 
                      name="ajustementPliage" 
                      checked={newForet.ajustementPliage === 'Oui'} 
                      onChange={() => setNewForet(prev => ({
                        ...prev,
                        ajustementPliage: prev.ajustementPliage === 'Oui' ? 'Non' : 'Oui'
                      }))} 
                    />
                    <label className="form-check-label" htmlFor="ajustementPliage">Ajustement pliage</label>
                  </div>
                  <div className="form-check">
                    <input 
                      className="form-check-input" 
                      type="checkbox" 
                      id="eclaircissageGrappes" 
                      name="eclaircissageGrappes" 
                      checked={newForet.eclaircissageGrappes === 'Oui'} 
                      onChange={() => setNewForet(prev => ({
                        ...prev,
                        eclaircissageGrappes: prev.eclaircissageGrappes === 'Oui' ? 'Non' : 'Oui'
                      }))} 
                    />
                    <label className="form-check-label" htmlFor="eclaircissageGrappes">Éclaircissage grappes</label>
                  </div>
                </div>
              </div>
            </div>

            <div className="d-grid gap-2 d-md-flex justify-content-md-end mt-4">
              <button 
                type="submit" 
                className="btn btn-success px-4" 
                disabled={isAdding}
              >
                {isAdding ? (
                  <>
                    <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                    Ajout en cours...
                  </>
                ) : (
                  <>
                    <i className="bi bi-plus-circle me-2"></i>
                    Ajouter la Forêt
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Foret;**/



import React, { useState } from 'react';

const Foret = () => {
  // Liste des lieux de Kébili
  const lieuxKebili = [
    "Kébili", "Janoura", "Douz", "El Faouar", "Bouabdellah", "Jemna", 
    "RejimMaatoug", "Barghouthia", "Bcheli", "Golaa", "Om somaa", "Eljazira",
    "Elmenchia", "Fetnassa", "Gliaa", "Zawya", "Zwaya", "Negga", "Bechni",
    "Derjin", "Zaafran", "Limagues", "Esteftimi", "Telmin", "Tenbib",
    "Tombar", "Elrabta", "Elgataya", "Sabriya", "Ghidma", "Blidet", 
    "Glisia", "Klibia", "Rahmat", "Bnimhemed", "Jdida", "Mansoura", 
    "Bazma", "Radhouan", "Kelwamen", "Naouiel", "Om Alfarth", "MazraaNaji",
    "Faroun", "Om Rous", "CharebLahrach", "Dbebcha"
  ];

  // Données initiales des forêts
  const initialForets = [
    {
      id: 1,
      nom: 'Forêt de Kébili A',
      nombrePalmiers: 120,
      region: 'Kébili',
      metrages: '15 ha',
      lieu: 'Kébili',
      irrigationParMois: '3 fois',
      ensachage: 'Oui',
      fertilisation: 'Oui',
      pollinisation: 'Oui',
      lutteContreMaladies: 'Oui',
      arrondissement: 'Arrondissement 1',
      ajustementPliage: 'Oui',
      eclaircissageGrappes: 'Oui',
      dateCreation: '2023-01-15'
    },
    {
      id: 2,
      nom: 'Forêt de Kébili B',
      nombrePalmiers: 85,
      region: 'Kébili',
      metrages: '8 ha',
      lieu: 'Douz',
      irrigationParMois: '2 fois',
      ensachage: 'Non',
      fertilisation: 'Non',
      pollinisation: 'Non',
      lutteContreMaladies: 'Non',
      arrondissement: 'Arrondissement 2',
      ajustementPliage: 'Non',
      eclaircissageGrappes: 'Non',
      dateCreation: '2023-02-20'
    },
  ];

  // État initial pour une nouvelle forêt
  const initialNewForet = {
    nom: '',
    nombrePalmiers: '',
    metrages: '',
    region: 'Kébili',
    lieu: '',
    irrigationParMois: '',
    ensachage: 'Non',
    fertilisation: 'Non',
    pollinisation: 'Non',
    lutteContreMaladies: 'Non',
    arrondissement: '',
    ajustementPliage: 'Non',
    eclaircissageGrappes: 'Non',
    dateCreation: new Date().toISOString().split('T')[0]
  };

  // États du composant
  const [forets, setForets] = useState(initialForets);
  const [selectedForet, setSelectedForet] = useState(null);
  const [newForet, setNewForet] = useState(initialNewForet);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortConfig, setSortConfig] = useState({ key: 'nom', direction: 'asc' });

  // Fonction pour basculer l'affichage des détails
  const toggleDetails = (foret) => {
    setSelectedForet(selectedForet?.id === foret.id ? null : foret);
  };

  // Gestion des changements dans le formulaire
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewForet(prev => ({ ...prev, [name]: value }));
  };

  // Gestion des changements pour les cases à cocher
  const handleCheckboxChange = (name) => {
    setNewForet(prev => ({
      ...prev,
      [name]: prev[name] === 'Oui' ? 'Non' : 'Oui'
    }));
  };

  // Ajout d'une nouvelle forêt
  const handleAddForet = (e) => {
    e.preventDefault();
    
    if (!newForet.nom || !newForet.nombrePalmiers || !newForet.metrages || !newForet.lieu) {
      alert('Veuillez remplir les champs requis: Nom, Nombre de palmiers, Métrage et Lieu');
      return;
    }

    const newId = forets.length > 0 ? Math.max(...forets.map(f => f.id)) + 1 : 1;
    
    const foretToAdd = {
      id: newId,
      ...newForet,
      nombrePalmiers: parseInt(newForet.nombrePalmiers, 10),
      dateCreation: new Date().toISOString().split('T')[0]
    };

    setForets(prev => [...prev, foretToAdd]);
    setNewForet(initialNewForet);
    alert('Forêt ajoutée avec succès!');
  };

  // Suppression d'une forêt
  const handleDeleteForet = (id) => {
    if (window.confirm('Êtes-vous sûr de vouloir supprimer cette forêt ?')) {
      setForets(prev => prev.filter(foret => foret.id !== id));
      if (selectedForet?.id === id) {
        setSelectedForet(null);
      }
    }
  };

  // Tri des données
  const requestSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  // Fonction de tri
  const sortedForets = [...forets].sort((a, b) => {
    if (a[sortConfig.key] < b[sortConfig.key]) {
      return sortConfig.direction === 'asc' ? -1 : 1;
    }
    if (a[sortConfig.key] > b[sortConfig.key]) {
      return sortConfig.direction === 'asc' ? 1 : -1;
    }
    return 0;
  });

  // Filtrage des données
  const filteredForets = sortedForets.filter(foret =>
    foret.nom.toLowerCase().includes(searchTerm.toLowerCase()) ||
    foret.lieu.toLowerCase().includes(searchTerm.toLowerCase()) ||
    foret.arrondissement.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Composant pour afficher les détails d'une forêt
  const ForetDetails = ({ foret }) => (
    <div className="card mt-3 mb-3">
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-start">
          <h5 className="card-title">Détails de {foret.nom}</h5>
          <small className="text-muted">Créé le: {foret.dateCreation}</small>
        </div>
        
        <div className="row">
          <div className="col-md-6">
            <p><strong>📍 Lieu:</strong> {foret.lieu}</p>
            <p><strong>🏞 Région:</strong> {foret.region}</p>
            <p><strong>📏 Métrage:</strong> {foret.metrages}</p>
            <p><strong>🌴 Nombre de palmiers:</strong> {foret.nombrePalmiers}</p>
            <p><strong>💧 Irrigation/mois:</strong> {foret.irrigationParMois}</p>
          </div>
          <div className="col-md-6">
            <p><strong>🛡 Ensachage:</strong> <span className={foret.ensachage === 'Oui' ? 'text-success' : 'text-danger'}>{foret.ensachage}</span></p>
            <p><strong>🌱 Fertilisation:</strong> <span className={foret.fertilisation === 'Oui' ? 'text-success' : 'text-danger'}>{foret.fertilisation}</span></p>
            <p><strong>🌸 Pollinisation:</strong> <span className={foret.pollinisation === 'Oui' ? 'text-success' : 'text-danger'}>{foret.pollinisation}</span></p>
            <p><strong>⚔ Lutte contre maladies:</strong> <span className={foret.lutteContreMaladies === 'Oui' ? 'text-success' : 'text-danger'}>{foret.lutteContreMaladies}</span></p>
            <p><strong>🗺 Arrondissement:</strong><span className={foret.arrondissement === 'Oui' ? 'text-success' : 'text-danger'}></span> {foret.arrondissement}</p>
          </div>
        </div>
        
        <div className="mt-3">
          <h6>🔧 Techniques appliquées:</h6>
          <p><strong>Ajustement pliage:</strong> <span className={foret.ajustementPliage === 'Oui' ? 'text-success' : 'text-danger'}>{foret.ajustementPliage}</span></p>
          <p><strong>Éclaircissage grappes:</strong> <span className={foret.eclaircissageGrappes === 'Oui' ? 'text-success' : 'text-danger'}>{foret.eclaircissageGrappes}</span></p>
        </div>
        
        <div className="mt-3 d-flex justify-content-end">
          <button 
            className="btn btn-sm btn-outline-danger"
            onClick={() => handleDeleteForet(foret.id)}
          >
            Supprimer
          </button>
        </div>
      </div>
    </div>
  );

  // Icône de tri
  const SortIcon = ({ key }) => (
    <span className="ms-1">
      {sortConfig.key === key ? (
        sortConfig.direction === 'asc' ? '↑' : '↓'
      ) : null}
    </span>
  );

  return (
    <div className="container mt-4">
      <h2 className="mb-4">🌴 Gestion des Forêts </h2>
      {/* Liste des forêts */}
      <div className="card shadow-sm mb-5">
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h3 className="card-title mb-0">Liste des Forêts</h3>
            <div className="d-flex">
              <input
                type="text"
                className="form-control"
                placeholder="Rechercher..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <span className="badge bg-primary align-self-center">
                {filteredForets.length} forêts
              </span>
            </div>
          </div>
          
          <div className="table-responsive">
            <table className="table table-hover">
              <thead className="table-light">
                <tr>
                  <th onClick={() => requestSort('nom')} style={{ cursor: 'pointer' }}>
                    Nom <SortIcon key="nom" />
                  </th>
                  <th onClick={() => requestSort('nombrePalmiers')} style={{ cursor: 'pointer' }}>
                    Palmiers <SortIcon key="nombrePalmiers" />
                  </th>
                  <th onClick={() => requestSort('lieu')} style={{ cursor: 'pointer' }}>
                    Lieu <SortIcon key="lieu" />
                  </th>
                  <th onClick={() => requestSort('metrages')} style={{ cursor: 'pointer' }}>
                    Métrage <SortIcon key="metrages" />
                  </th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredForets.length === 0 ? (
                  <tr>
                    <td colSpan="5" className="text-center py-4 text-muted">
                      Aucune forêt trouvée
                    </td>
                  </tr>
                ) : (
                  filteredForets.map(foret => (
                    <React.Fragment key={foret.id}>
                      <tr>
                        <td>{foret.nom}</td>
                        <td>{foret.nombrePalmiers}</td>
                        <td>{foret.lieu}</td>
                        <td>{foret.metrages}</td>
                        <td>
                          <button
                            className="btn btn-sm btn-outline-primary me-2"
                            onClick={() => toggleDetails(foret)}
                          >
                            {selectedForet?.id === foret.id ? 'Masquer' : 'Historique'}
                          </button>
                        </td>
                      </tr>
                      {selectedForet?.id === foret.id && (
                        <tr>
                          <td colSpan="5" className="p-0">
                            <ForetDetails foret={foret} />
                          </td>
                        </tr>
                      )}
                    </React.Fragment>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Formulaire d'ajout */}
      <div className="card shadow-sm">
        <div className="card-body">
          <h3 className="card-title mb-4">➕ Ajouter une Nouvelle Forêt</h3>
          <form onSubmit={handleAddForet}>
            <div className="row">
              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="nom" className="form-label">Nom de la forêt *</label>
                  <input 
                    type="text" 
                    id="nom" 
                    name="nom" 
                    value={newForet.nom} 
                    onChange={handleChange} 
                    className="form-control" 
                    placeholder="" 
                    required 
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="nombrePalmiers" className="form-label">Nombre de palmiers *</label>
                  <input 
                    type="number" 
                    id="nombrePalmiers" 
                    name="nombrePalmiers" 
                    value={newForet.nombrePalmiers} 
                    onChange={handleChange} 
                    className="form-control" 
                    min="1" 
                    required 
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="metrages" className="form-label">Métrage *</label>
                  <input 
                    type="text" 
                    id="metrages" 
                    name="metrages" 
                    value={newForet.metrages} 
                    onChange={handleChange} 
                    className="form-control" 
                    placeholder="Ex: 5 ha" 
                    required 
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="region" className="form-label">Région</label>
                  <input 
                    type="text" 
                    id="region" 
                    name="region" 
                    value={newForet.region} 
                    readOnly 
                    className="form-control" 
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="lieu" className="form-label">Lieu *</label>
                  <select 
                    id="lieu" 
                    name="lieu" 
                    value={newForet.lieu} 
                    onChange={handleChange} 
                    className="form-select" 
                    required
                  >
                    <option value="">-- Sélectionner un lieu --</option>
                    {lieuxKebili.map((lieu, i) => (
                      <option key={i} value={lieu}>{lieu}</option>
                    ))}
                  </select>
                </div>
                <div className="mb-3">
                  <label htmlFor="irrigationParMois" className="form-label">Irrigation par mois</label>
                  <input 
                    type="text" 
                    id="irrigationParMois" 
                    name="irrigationParMois" 
                    value={newForet.irrigationParMois} 
                    onChange={handleChange} 
                    className="form-control" 
                    placeholder="Ex: 2 fois" 
                  />
                </div>
                </div>
                
              </div> 
            <div className="row mt-2">
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">Techniques appliquées</label>
                  <div className="form-check form-switch">
                    <input 
                      className="form-check-input" 
                      type="checkbox" 
                      id="ensachage" 
                      name="ensachage" 
                      checked={newForet.ensachage === 'Oui'} 
                      onChange={() => handleCheckboxChange('ensachage')} 
                    />
                    <label className="form-check-label" htmlFor="ensachage">Ensachage</label>
                  </div>
                  <div className="form-check form-switch">
                    <input 
                      className="form-check-input" 
                      type="checkbox" 
                      id="fertilisation" 
                      name="fertilisation" 
                      checked={newForet.fertilisation === 'Oui'} 
                      onChange={() => handleCheckboxChange('fertilisation')} 
                    />
                    <label className="form-check-label" htmlFor="fertilisation">Fertilisation</label>
                  </div>
                  <div className="form-check form-switch">
                    <input 
                      className="form-check-input" 
                      type="checkbox" 
                      id="pollinisation" 
                      name="pollinisation" 
                      checked={newForet.pollinisation === 'Oui'} 
                      onChange={() => handleCheckboxChange('pollinisation')} 
                    />
                    <label className="form-check-label" htmlFor="pollinisation">Pollinisation</label>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label invisible">Techniques</label>
                  <div className="form-check form-switch">
                    <input 
                      className="form-check-input" 
                      type="checkbox" 
                      id="lutteContreMaladies" 
                      name="lutteContreMaladies" 
                      checked={newForet.lutteContreMaladies === 'Oui'} 
                      onChange={() => handleCheckboxChange('lutteContreMaladies')} 
                    />
                    <label className="form-check-label" htmlFor="lutteContreMaladies">Lutte contre maladies</label>
                  </div>
                  <div className="form-check form-switch">
                    <input 
                      className="form-check-input" 
                      type="checkbox" 
                      id="ajustementPliage" 
                      name="ajustementPliage" 
                      checked={newForet.ajustementPliage === 'Oui'} 
                      onChange={() => handleCheckboxChange('ajustementPliage')} 
                    />
                    <label className="form-check-label" htmlFor="ajustementPliage">Ajustement pliage</label>
                  </div>
                  <div className="form-check form-switch">
                    <input 
                      className="form-check-input" 
                      type="checkbox" 
                      id="eclaircissageGrappes" 
                      name="eclaircissageGrappes" 
                      checked={newForet.eclaircissageGrappes === 'Oui'} 
                      onChange={() => handleCheckboxChange('eclaircissageGrappes')} 
                    />
                    <label className="form-check-label" htmlFor="eclaircissageGrappes">Éclaircissage grappes</label>
                  </div>
                  <div className="form-check form-switch">
                    <input 
                      className="form-check-input" 
                      type="checkbox" 
                      id="arrondissement " 
                      name="arrondissement " 
                      checked={newForet.arrondissement  === 'Oui'} 
                      onChange={() => handleCheckboxChange('arrondissement ')} 
                    />
                    <label className="form-check-label" htmlFor="arrondissement ">arrondissement</label>
                  </div>
                </div>
              </div>
            </div>

            <div className="d-grid gap-2 d-md-flex justify-content-md-end mt-4">
              <button 
                type="reset" 
                className="btn btn-outline-secondary me-md-2"
                onClick={() => setNewForet(initialNewForet)}
              >
                Annuler
              </button>
              <button 
                type="submit" 
                className="btn btn-success px-4"
              >
                <i className="bi bi-plus-circle me-2"></i>
                Ajouter la Forêt
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Foret;







