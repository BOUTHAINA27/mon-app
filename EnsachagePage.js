

import React, { useState, useEffect } from 'react';
import { Button, Modal, Form, Table, Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const EnsachagePage = () => {
  const [ensachageList, setEnsachageList] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [alertMsg, setAlertMsg] = useState('');
  const [showAlert, setShowAlert] = useState(false);

  const [operation, setOperation] = useState({
    id: null,
    region: '',
    date: '',
    conditionsClimatiques: '',
    conseilsMeteo: '',
  });

  const regionsKebili = [
    'Kébili Nord',
    'Kébili Sud',
    'Douz',
    'Souk Lahad',
    'Jemna',
    'Faouar',
  ];

  const handleShow = (ensachage = null) => {
    if (ensachage) {
      setOperation(ensachage);
    } else {
      setOperation({
        id: null,
        region: '',
        date: '',
        conditionsClimatiques: '',
        conseilsMeteo: '',
      });
    }
    setShowModal(true);
  };

  const handleClose = () => setShowModal(false);

  const genererConseilsMeteo = (conditions) => {
    const c = conditions.toLowerCase();
    if (c.includes('vent')) return "Reporter l’ensachage pour éviter la dispersion du pollen.";
    if (c.includes('chaud')) return "Bonne période pour ensacher, attention à l’irrigation.";
    if (c.includes('pluie')) return "Évitez l’ensachage pour ne pas mouiller les fruits.";
    return "Conditions normales, procéder à l’ensachage.";
  };

  const showTemporaryAlert = (message) => {
    setAlertMsg(message);
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 3000); // Disparaît après 3s
  };

  const handleSave = () => {
    const conseils = genererConseilsMeteo(operation.conditionsClimatiques);
    const updatedOperation = { ...operation, conseilsMeteo: conseils };

    if (!operation.region || !operation.date || !operation.conditionsClimatiques) {
      showTemporaryAlert("Veuillez remplir tous les champs !");
      return;
    }

    if (operation.id) {
      setEnsachageList((prevList) =>
        prevList.map((item) => (item.id === operation.id ? updatedOperation : item))
      );
      showTemporaryAlert("Opération modifiée avec succès ✅");
    } else {
      setEnsachageList([
        ...ensachageList,
        { ...updatedOperation, id: Date.now() },
      ]);
      showTemporaryAlert("Opération ajoutée avec succès ✅");
    }
    handleClose();
  };

  const handleDelete = (id) => {
    setEnsachageList(ensachageList.filter((item) => item.id !== id));
    showTemporaryAlert("Opération supprimée 🗑️");
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">📦 Gestion de l'Ensachage - Gouvernorat de Kébili</h2>

      {showAlert && <Alert variant="info">{alertMsg}</Alert>}

      <Button variant="success" onClick={() => handleShow()}>
        ➕ Ajouter une opération
      </Button>

      <Table striped bordered hover responsive className="mt-4">
        <thead className="table-dark">
          <tr>
            <th>Région</th>
            <th>Date</th>
            <th>Conditions Climatiques</th>
            <th>Conseils Météo</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {ensachageList.map((ensachage) => (
            <tr key={ensachage.id}>
              <td>{ensachage.region}</td>
              <td>{ensachage.date}</td>
              <td>{ensachage.conditionsClimatiques}</td>
              <td>{ensachage.conseilsMeteo}</td>
              <td>
                <Button
                  variant="warning"
                  size="sm"
                  onClick={() => handleShow(ensachage)}
                  className="me-2"
                >
                  ✏️ Modifier
                </Button>
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => handleDelete(ensachage.id)}
                >
                  🗑️ Supprimer
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

    
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{operation.id ? 'Modifier' : 'Ajouter'} une opération</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="region">
              <Form.Label>Région</Form.Label>
              <Form.Select
                value={operation.region}
                onChange={(e) =>
                  setOperation({ ...operation, region: e.target.value })
                }
              >
                <option value="">-- Sélectionner une région --</option>
                {regionsKebili.map((r, index) => (
                  <option key={index} value={r}>
                    {r}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>

            <Form.Group controlId="date" className="mt-2">
              <Form.Label>Date</Form.Label>
              <Form.Control
                type="date"
                value={operation.date}
                onChange={(e) => setOperation({ ...operation, date: e.target.value })}
              />
            </Form.Group>

            <Form.Group controlId="conditionsClimatiques" className="mt-2">
              <Form.Label>Conditions Climatiques</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ex: chaud, vent, pluie..."
                value={operation.conditionsClimatiques}
                onChange={(e) =>
                  setOperation({
                    ...operation,
                    conditionsClimatiques: e.target.value,
                  })
                }
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Fermer
          </Button>
          <Button variant="primary" onClick={handleSave}>
            {operation.id ? 'Enregistrer' : 'Ajouter'}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default EnsachagePage;


