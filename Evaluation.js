import React, { useState } from "react";
import { Card, Button, Form } from "react-bootstrap";

export default function Evaluation() {
  const [file, setFile] = useState(null);
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleEvaluation = () => {
    if (!file) {
      alert("Veuillez d'abord importer un fichier CSV ou Excel.");
      return;
    }

    setLoading(true);

    // Simule une analyse IA avec un délai
    setTimeout(() => {
      setResults({
        healthScore: "Bonne santé générale",
        recommendedActions: [
          "Surveiller l'humidité du sol",
          "Élaguer les branches mortes",
          "Fertilisation modérée au mois de mai",
        ],
        carbonEstimate: "12.5 tonnes de CO₂ stockées",
      });
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="container mt-4">
      <h3 className="text-center mb-4">📊 Évaluation des forêts avec IA</h3>

      <Card className="p-4 shadow-sm">
        <Form>
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Téléverser un fichier CSV ou Excel</Form.Label>
            <Form.Control type="file" accept=".csv, .xlsx" onChange={handleFileChange} />
          </Form.Group>

          <Button variant="success" onClick={handleEvaluation} disabled={loading}>
            {loading ? "Analyse en cours..." : "Lancer l'évaluation"}
          </Button>
        </Form>
      </Card>

      {results && (
        <Card className="mt-4 p-4 bg-light">
          <h5>📝 Résultats de l'analyse :</h5>
          <ul>
            <li><strong>État de santé :</strong> {results.healthScore}</li>
            <li><strong>Recommandations :</strong>
              <ul>
                {results.recommendedActions.map((action, index) => (
                  <li key={index}>{action}</li>
                ))}
              </ul>
            </li>
            <li><strong>Estimation du carbone stocké :</strong> {results.carbonEstimate}</li>
          </ul>
        </Card>
      )}
    </div>
  );
}
