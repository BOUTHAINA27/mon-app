

/**import React, { useState } from 'react';

function EvaluationForm() {
  const [formData, setFormData] = useState({
    
    forest_id: '',
    lieu: '',
    nombre_palmiers: '',
    irrigation: '',
    ensachage: '',
    fertilisation: '',
    pollinisation: '',
    lutte_maladies: '',
    arrondissement: '',
    ajustement_pliage: '',
    eclaircissage_grappes: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [requirePayment, setRequirePayment] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('');
  const [isPaid, setIsPaid] = useState(false);

  const forestHistory = ['F001', 'F002', 'F005'];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const hasHistory = forestHistory.includes(formData.forest_id.trim());

    if (hasHistory) {
      setSubmitted(true);
      setRequirePayment(false);
      setIsPaid(false);
    } else {
      setRequirePayment(true);
    }
  };

  const handleFakePayment = () => {
    setSubmitted(true);
    setRequirePayment(false);
    setIsPaid(true);
  };

  const selectFields = [
    'ensachage',
    'fertilisation',
    'pollinisation',
    'lutte_maladies',
    'arrondissement',
    'ajustement_pliage',
    'eclaircissage_grappes'
  ];

  const capitalizeLabel = (str) =>
    str.replaceAll('_', ' ').replace(/\b\w/g, (c) => c.toUpperCase());

  const calculateEvaluationScore = () => {
    const total = selectFields.length;
    const completed = selectFields.filter(field => formData[field] === 'effectué').length;
    return Math.round((completed / total) * 100); // Score en %
  };

  const calculateEstimatedCost = () => {
    const basePrice = 20; // Prix de base en dinars
    const complexityFee = Number(formData.nombre_palmiers || 0) * 0.1; // 0.1 DT par palmier
    return (basePrice + complexityFee).toFixed(2);
  };

  const renderEvaluationSummary = () => (
    <div className="card mt-4">
      <div className="card-header bg-success text-white">
        Résumé de l’évaluation {isPaid ? '(payée)' : '(gratuite)'}
      </div>
      <ul className="list-group list-group-flush">
        {Object.entries(formData).map(([key, value]) => (
          <li key={key} className="list-group-item">
            <strong>{capitalizeLabel(key)} :</strong> {value || '—'}
          </li>
        ))}
        <li className="list-group-item">
          🧮 <strong>Score d’évaluation :</strong> {calculateEvaluationScore()} %
        </li>
        {isPaid && (
          <li className="list-group-item">
            💵 <strong>Montant payé :</strong> {calculateEstimatedCost()} DT
          </li>
        )}
      </ul>
    </div>
  );

  return (
    <div className="container mt-4">
      <h2>Évaluation de plantation</h2>

      {submitted ? (
        <>
          <div className="alert alert-success">
            ✅ Évaluation enregistrée avec succès {isPaid ? '(après paiement)' : '(historique détecté)'} !
          </div>
          {renderEvaluationSummary()}
        </>
      ) : (
        <>
          {!requirePayment ? (
            <form onSubmit={handleSubmit}>
              {Object.entries(formData).map(([key, value]) => (
                <div className="mb-3" key={key}>
                  <label className="form-label">{capitalizeLabel(key)}</label>
                  {selectFields.includes(key) ? (
                    <select
                      name={key}
                      className="form-control"
                      value={value}
                      onChange={handleChange}
                      required
                    >
                      <option value="">-- Sélectionner --</option>
                      <option value="effectué">Effectué</option>
                      <option value="non effectué">Non effectué</option>
                    </select>
                  ) : (
                    <input
                      type={['nombre_palmiers', 'irrigation_par_mois'].includes(key) ? 'number' : 'text'}
                      name={key}
                      className="form-control"
                      value={value}
                      onChange={handleChange}
                      min={['nombre_palmiers', 'irrigation_par_mois'].includes(key) ? 0 : undefined}
                      required
                    />
                  )}
                </div>
              ))}
              <button type="submit" className="btn btn-primary">
                Soumettre l’évaluation
              </button>
            </form>
          ) : (
            <div className="alert alert-warning mt-4">
              <p>
                💰 Aucun historique détecté pour la forêt <strong>ID : {formData.forest_id}</strong>.
              </p>
              <p>
                <strong>Un paiement est requis pour soumettre l’évaluation.</strong><br />
                💸 <strong>Coût estimé :</strong> {calculateEstimatedCost()} DT
              </p>

              <div className="mb-3">
                <label className="form-label">Méthode de paiement :</label>
                <select
                  className="form-control"
                  value={paymentMethod}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  required
                >
                  <option value="">-- Choisir une méthode --</option>
                  <option value="Carte Bancaire">Carte Bancaire</option>
                  <option value="Mobile Money">Mobile Money</option>
                </select>
              </div>

              {paymentMethod && (
                <div className="mt-3">
                  <button className="btn btn-success" onClick={handleFakePayment}>
                    ✅ Payer maintenant avec {paymentMethod}
                  </button>
                </div>
              )}
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default EvaluationForm;**/


import React, { useState } from 'react';

function EvaluationForm() {
  const [formData, setFormData] = useState({
    forest_id: '',
    lieu: '',
    nombre_palmiers: '',
    irrigation: '',
    ensachage: '',
    fertilisation: '',
    pollinisation: '',
    lutte_maladies: '',
    arrondissement: '',
    ajustement_pliage: '',
    eclaircissage_grappes: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [requirePayment, setRequirePayment] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('');
  const [isPaid, setIsPaid] = useState(false);

  // Simulation : historique de 3 évaluations déjà faites pour ces IDs
  const forestHistory = {
    F001: 3,
    F002: 2,
    F005: 1
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const forestId = formData.forest_id.trim();
    const historyCount = forestHistory[forestId] || 0;

    if (historyCount >= 3) {
      // Gratuit
      setRequirePayment(false);
      setSubmitted(true);
      setIsPaid(false);
    } else {
      // Paiement requis (3 DT)
      setRequirePayment(true);
    }
  };

  const handleFakePayment = () => {
    setIsPaid(true);
    setSubmitted(true);
    setRequirePayment(false);
  };

  const selectFields = [
    'ensachage',
    'fertilisation',
    'pollinisation',
    'lutte_maladies',
    'arrondissement',
    'ajustement_pliage',
    'eclaircissage_grappes'
  ];

  const capitalizeLabel = (str) =>
    str.replaceAll('_', ' ').replace(/\b\w/g, (c) => c.toUpperCase());

  const calculateEvaluationScore = () => {
    const total = selectFields.length;
    const completed = selectFields.filter(field => formData[field] === 'effectué').length;
    return Math.round((completed / total) * 100);
  };

  const renderEvaluationSummary = () => (
    <div className="card mt-4">
      <div className="card-header bg-success text-white">
        ✅ Résumé de l’évaluation {isPaid ? '(payée 30 DT)' : '(gratuite)'}
      </div>
      <ul className="list-group list-group-flush">
        {Object.entries(formData).map(([key, value]) => (
          <li key={key} className="list-group-item">
            <strong>{capitalizeLabel(key)} :</strong> {value || '—'}
          </li>
        ))}
        <li className="list-group-item">
          🧮 <strong>Score :</strong> {calculateEvaluationScore()} %
        </li>
        {isPaid && (
          <li className="list-group-item">
            💰 <strong>Frais payé :</strong> 30 DT
          </li>
        )}
      </ul>
    </div>
  );

  return (
    <div className="container mt-4">
      <h2>📝 Évaluation de la plantation</h2>

      {submitted ? (
        <>
          <div className="alert alert-success">
            🎉 Évaluation enregistrée avec succès {isPaid ? '(avec paiement)' : '(gratuite)'} !
          </div>
          {renderEvaluationSummary()}
        </>
      ) : (
        <>
          {!requirePayment ? (
            <form onSubmit={handleSubmit}>
              {Object.entries(formData).map(([key, value]) => (
                <div className="mb-3" key={key}>
                  <label className="form-label">{capitalizeLabel(key)}</label>
                  {selectFields.includes(key) ? (
                    <select
                      name={key}
                      className="form-control"
                      value={value}
                      onChange={handleChange}
                      required
                    >
                      <option value="">-- Sélectionner --</option>
                      <option value="effectué">Effectué</option>
                      <option value="non effectué">Non effectué</option>
                    </select>
                  ) : (
                    <input
                      type={['nombre_palmiers'].includes(key) ? 'number' : 'text'}
                      name={key}
                      className="form-control"
                      value={value}
                      onChange={handleChange}
                      min={0}
                      required
                    />
                  )}
                </div>
              ))}
              <button type="submit" className="btn btn-primary">
                📤 Soumettre l’évaluation
              </button>
            </form>
          ) : (
            <div className="alert alert-warning mt-4">
              <p>❗ Aucun historique suffisant détecté pour la forêt <strong>{formData.forest_id}</strong>.</p>
              <p><strong>Un paiement de 3 DT est requis pour soumettre l’évaluation.</strong></p>

              <div className="mb-3">
                <label className="form-label">💳 Méthode de paiement :</label>
                <select
                  className="form-control"
                  value={paymentMethod}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  required
                >
                  <option value="">-- Choisir une méthode --</option>
                  <option value="Carte Bancaire">Carte Bancaire</option>
                  <option value="Mobile Money">Mobile Money</option>
                </select>
              </div>

              {paymentMethod && (
                <div className="mt-3">
                  <button className="btn btn-success" onClick={handleFakePayment}>
                    ✅ Payer 30 DT avec {paymentMethod}
                  </button>
                </div>
              )}
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default EvaluationForm;






