import React, { useState } from 'react';
import { Container, Form, Button, Card, Alert } from 'react-bootstrap';

function EvaluationForm() {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!file) {
      setMessage('Veuillez sélectionner un fichier.');
      return;
    }

    // Ici tu pourrais envoyer le fichier au backend avec fetch ou axios
    console.log('Fichier envoyé :', file.name);
    setMessage(`✅ Dataset "${file.name}" envoyé avec succès !`);
  };

  return (
    <Container className="mt-5">
      <Card className="p-4 shadow-sm">
        <h4 className="mb-4 text-success">📊 Évaluation des dattes</h4>
        {message && <Alert variant="info">{message}</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Importer le dataset (.csv ou .xlsx)</Form.Label>
            <Form.Control 
              type="file" 
              accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
              onChange={(e) => setFile(e.target.files[0])}
              required
            />
          </Form.Group>
          <Button variant="success" type="submit">
            Envoyer
          </Button>
        </Form>
      </Card>
    </Container>
  );
}

export default EvaluationForm;
