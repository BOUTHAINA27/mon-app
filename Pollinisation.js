
import React, { useState, useEffect } from "react";
import { Button, Form, Card, Row, Col } from "react-bootstrap";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Pollinisation = () => {
  const [date, setDate] = useState(new Date());
  const [parcelle, setParcelle] = useState("");
  const [commentaire, setCommentaire] = useState("");
  const [entries, setEntries] = useState([]);
  const [filter, setFilter] = useState({ date: "", parcelle: "" });

  // Fonction pour ajouter une entrée de pollinisation
  const handleSubmit = (e) => {
    e.preventDefault();
    const newEntry = { date: date.toDateString(), parcelle, commentaire };
    setEntries([newEntry, ...entries]);
    setDate(new Date());
    setParcelle("");
    setCommentaire("");
  };

  // Fonction de suppression d'entrée
  const handleDelete = (index) => {
    setEntries(entries.filter((_, i) => i !== index));
  };

  // Data pour les graphiques
  const chartData = {
    labels: entries.map((entry) => entry.date),
    datasets: [
      {
        label: 'Pollinisations',
        data: entries.map(() => 1),  // Chaque entrée représente une pollinisation
        fill: false,
        borderColor: 'rgba(75,192,192,1)',
        tension: 0.1,
      },
    ],
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Module de Pollinisation 🌸</h2>

      {/* Formulaire de création de nouvelle pollinisation */}
      <Card className="p-4 shadow-sm">
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Date</Form.Label>
            <Calendar onChange={setDate} value={date} className="mb-3" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Parcelle</Form.Label>
            <Form.Control
              type="text"
              value={parcelle}
              onChange={(e) => setParcelle(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Commentaire</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={commentaire}
              onChange={(e) => setCommentaire(e.target.value)}
            />
          </Form.Group>
          <Button variant="success" type="submit">
            Ajouter
          </Button>
        </Form>
      </Card>

      {/* Historique des pollinisations */}
      <div className="mt-4">
        <h4>Historique des Pollinisations</h4>
        {entries.length === 0 ? (
          <p>Aucune pollinisation enregistrée.</p>
        ) : (
          entries.map((entry, index) => (
            <Card
              key={index}
              className="mt-2 p-3 shadow-sm d-flex flex-row justify-content-between align-items-center"
            >
              <div>
                <strong>📅 {entry.date}</strong> | 🌱 {entry.parcelle} <br />
                📝 {entry.commentaire}
              </div>
              <Button variant="danger" onClick={() => handleDelete(index)}>
                Supprimer
              </Button>
            </Card>
          ))
        )}
      </div>

      {/* Graphique des pollinisations */}
      <div className="mt-4">
        <h4>Analyse des Pollinisations</h4>
        <Line data={chartData} />
      </div>
    </div>
  );
};

export default Pollinisation;
