

import React, { useState } from 'react';
import { Container, Card, ListGroup, Modal, Form, Button, Badge } from 'react-bootstrap';

function Foret() {
  const [forets, setForets] = useState([]);
  const [selectedForet, setSelectedForet] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);

  const [formData, setFormData] = useState({
    nombre: '',
    irrigationParMois: '',
    region: '',
    ensachage: false,
    fertilisation: false,
    pollinisation: false,
  });

  const handleCardClick = (foret) => {
    setIsEditMode(true);
    setSelectedForet(foret);
    setFormData({
      nombre: foret.info?.nombre || '',
      irrigationParMois: foret.info?.irrigationParMois || '',
      region: foret.info?.region || '',
      ensachage: foret.info?.ensachage || false,
      fertilisation: foret.info?.fertilisation || false,
      pollinisation: foret.info?.pollinisation || false,
    });
    setShowModal(true);
  };

  const handleAddForet = () => {
    setIsEditMode(false);
    setSelectedForet(null);
    setFormData({
      nombre: '',
      irrigationParMois: '',
      region: '',
      ensachage: false,
      fertilisation: false,
      pollinisation: false,
    });
    setShowModal(true);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSave = () => {
    if (!formData.nombre || !formData.region) {
      alert('Veuillez remplir le nombre d’arbres et la région.');
      return;
    }

    if (isEditMode && selectedForet) {
      const updatedForets = forets.map((f) =>
        f.id === selectedForet.id ? { ...f, info: { ...formData } } : f
      );
      setForets(updatedForets);
    } else {
      const newForet = {
        id: Date.now(),
        nom: `Forêt ${forets.length + 1}`,
        info: { ...formData },
      };
      setForets([...forets, newForet]);
    }
    setShowModal(false);
  };

  const handleDelete = () => {
    if (selectedForet) {
      const updatedForets = forets.filter((f) => f.id !== selectedForet.id);
      setForets(updatedForets);
      setShowModal(false);
    }
  };

  const getTaches = (info) => {
    const taches = [];
    if (info?.irrigationParMois) taches.push('Irrigation');
    if (info?.ensachage) taches.push('Ensachage');
    if (info?.fertilisation) taches.push('Fertilisation');
    if (info?.pollinisation) taches.push('Pollinisation');
    return taches;
  };

  return (
    <Container className="mt-4">
      <h3 className="mb-4">🌲 Mes Forêts</h3>

      {forets.map((foret) => (
        <Card
          className="mb-3 shadow-sm hover-card"
          key={foret.id}
          onClick={() => handleCardClick(foret)}
          style={{ cursor: 'pointer' }}
        >
          <Card.Body>
            <Card.Title>{foret.nom}</Card.Title>
            <Card.Text>
              <strong>🌍 Région :</strong>{' '}
              <Badge bg="info">{foret.info.region}</Badge>
            </Card.Text>
            <Card.Text><strong>🌳 Arbres :</strong> {foret.info.nombre}</Card.Text>
            <Card.Text><strong>💧 Irrigation/mois :</strong> {foret.info.irrigationParMois}</Card.Text>
            <ListGroup variant="flush">
              {getTaches(foret.info).map((tache, idx) => (
                <ListGroup.Item key={idx}>✅ {tache}</ListGroup.Item>
              ))}
            </ListGroup>
          </Card.Body>
        </Card>
      ))}

      <div className="text-center mt-4">
        <Button variant="primary" onClick={handleAddForet}>
          ➕ Ajouter une forêt
        </Button>
      </div>

      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>
            {isEditMode ? '📝 Modifier' : '➕ Ajouter'} les infos de {selectedForet?.nom || 'une nouvelle forêt'}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Nombre d’arbres</Form.Label>
              <Form.Control
                type="number"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Irrigations par mois</Form.Label>
              <Form.Control
                type="number"
                name="irrigationParMois"
                value={formData.irrigationParMois}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Région</Form.Label>
              <Form.Select
                name="region"
                value={formData.region}
                onChange={handleChange}
              >
                <option value="">Sélectionnez une région</option>
                <option value="Kébili Ville">Kébili Ville</option>
                <option value="Douz">Douz</option>
                <option value="El Faouar">El Faouar</option>
                <option value="Souk Lahad">Souk Lahad</option>
                <option value="Jemna">Jemna</option>
                <option value="Rejim Maatoug">Rejim Maatoug</option>
              </Form.Select>
            </Form.Group>

            <Form.Check
              type="checkbox"
              label="Ensachage"
              name="ensachage"
              checked={formData.ensachage}
              onChange={handleChange}
              className="mb-2"
            />
            <Form.Check
              type="checkbox"
              label="Fertilisation"
              name="fertilisation"
              checked={formData.fertilisation}
              onChange={handleChange}
              className="mb-2"
            />
            <Form.Check
              type="checkbox"
              label="Pollinisation"
              name="pollinisation"
              checked={formData.pollinisation}
              onChange={handleChange}
              className="mb-2"
            />
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={handleSave}>
            {isEditMode ? '💾 Modifier' : '✅ Enregistrer'}
          </Button>

          {isEditMode && (
            <Button variant="danger" onClick={handleDelete}>
              🗑️ Supprimer
            </Button>
          )}

          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Annuler
          </Button>
        </Modal.Footer>
      </Modal>

      <style>{`
        .hover-card {
          transition: transform 0.2s ease;
        }
        .hover-card:hover {
          transform: scale(1.02);
        }
      `}</style>
    </Container>
  );
}

export default Foret;

