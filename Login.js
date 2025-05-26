
import React, { useState } from 'react';
import { Form, Button, Container, Card, Modal, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [resetEmail, setResetEmail] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [resetMessage, setResetMessage] = useState('');
  const [resetError, setResetError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!/\S+@\S+\.\S+/.test(email)) return alert('❌ Email invalide');

    setLoading(true);
    try {
      const res = await fetch('http://localhost:8080/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || 'Échec de connexion');

      alert('✅ Connexion réussie !');
      localStorage.setItem('token', data.token);
      navigate('/Palmier');
    } catch (err) {
      alert('❌ Erreur : ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleResetPassword = async () => {
    setResetMessage('');
    setResetError('');
    setLoading(true);
    try {
      const res = await fetch('http://localhost:8080/forgot-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: resetEmail }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || 'Erreur lors de l’envoi');

      setResetMessage('📩 Lien de réinitialisation envoyé.');
    } catch (err) {
      setResetError('❌ ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container className="mt-5 d-flex justify-content-center">
      <Card className="p-4 shadow" style={{ maxWidth: '400px', width: '100%' }}>
        <h4 className="text-center mb-4">🔐 Connexion</h4>
        <Form onSubmit={handleLogin}>
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </Form.Group>

          <Form.Group className="mb-2">
            <Form.Label>Mot de passe</Form.Label>
            <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </Form.Group>

          <div className="text-end mb-3">
            <span onClick={() => setShowModal(true)} style={{ fontSize: '0.9rem', cursor: 'pointer', color: '#0d6efd' }}>
              Mot de passe oublié ?
            </span>
          </div>

          <Button variant="primary" type="submit" className="w-100">Se connecter</Button>
        </Form>
      </Card>

      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>🔁 Réinitialiser le mot de passe</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {resetMessage && <Alert variant="success">{resetMessage}</Alert>}
          {resetError && <Alert variant="danger">{resetError}</Alert>}

          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              value={resetEmail}
              onChange={(e) => setResetEmail(e.target.value)}
              placeholder="exemple@domaine.com"
              required
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>Annuler</Button>
          <Button variant="primary" onClick={handleResetPassword} disabled={loading}>
            {loading ? 'Envoi...' : 'Envoyer'}
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default Login;

