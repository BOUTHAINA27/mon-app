
/**import React, { useState } from 'react';
import { Form, Button, Container, Card, Modal } from 'react-bootstrap';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showResetModal, setShowResetModal] = useState(false);
  const [resetEmail, setResetEmail] = useState('');
  const [resetSuccess, setResetSuccess] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Connexion avec :', { email, password });
   
  };

  const handleResetPassword = () => {
    if (resetEmail.trim() !== '') {
      setResetSuccess(true);
      
      console.log('Email de réinitialisation envoyé à :', resetEmail);
    }
  };

  return (
    <Container className="mt-5 d-flex justify-content-center">
      <Card className="p-4 shadow" style={{ maxWidth: '400px', width: '100%' }}>
        <h4 className="text-center mb-4">🔐 Connexion</h4>
        <Form onSubmit={handleLogin}>
          <Form.Group className="mb-3" controlId="loginEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control 
              type="email" 
              placeholder="Entrez votre email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required 
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="loginPassword">
            <Form.Label>Mot de passe</Form.Label>
            <Form.Control 
              type="password" 
              placeholder="Mot de passe" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required 
            />
          </Form.Group>

          <Button variant="success" type="submit" className="w-100 mb-2">
            Se connecter
          </Button>

          <div className="text-center">
            <Button variant="link" onClick={() => setShowResetModal(true)}>
              Mot de passe oublié ?
            </Button>
          </div>
        </Form>
      </Card>

      <Modal show={showResetModal} onHide={() => setShowResetModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>🔐 Réinitialisation du mot de passe</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {resetSuccess ? (
            <div className="text-success">
              📩 Un email de réinitialisation a été envoyé à <strong>{resetEmail}</strong>
            </div>
          ) : (
            <Form>
              <Form.Group controlId="resetEmail">
                <Form.Label>Entrez votre adresse email</Form.Label>
                <Form.Control 
                  type="email" 
                  placeholder="exemple@domaine.com"
                  value={resetEmail}
                  onChange={(e) => setResetEmail(e.target.value)}
                  required 
                />
              </Form.Group>
            </Form>
          )}
        </Modal.Body>
        <Modal.Footer>
          {!resetSuccess && (
            <Button variant="primary" onClick={handleResetPassword}>
              Envoyer
            </Button>
          )}
          <Button variant="secondary" onClick={() => {
            setShowResetModal(false);
            setResetEmail('');
            setResetSuccess(false);
          }}>
            Fermer
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default Login;**/

import React, { useState } from 'react';
import { Form, Button, Container, Card, Modal } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'; // Pour la redirection

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showResetModal, setShowResetModal] = useState(false);
  const [resetEmail, setResetEmail] = useState('');
  const [resetSuccess, setResetSuccess] = useState(false);

  const navigate = useNavigate(); // Hook de navigation

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Connexion avec :', { email, password });

    // 🔒 Ici on pourrait vérifier les identifiants via une API
    // Exemple : if (email === "test@domaine.com" && password === "1234")

    // ✅ Redirection vers tableau de bord
    navigate('/Palmier');
  };

  const handleResetPassword = () => {
    if (resetEmail.trim() !== '') {
      setResetSuccess(true);
      console.log('Email de réinitialisation envoyé à :', resetEmail);
    }
  };

  return (
    <Container className="mt-5 d-flex justify-content-center">
      <Card className="p-4 shadow" style={{ maxWidth: '400px', width: '100%' }}>
        <h4 className="text-center mb-4">🔐 Connexion</h4>
        <Form onSubmit={handleLogin}>
          <Form.Group className="mb-3" controlId="loginEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control 
              type="email" 
              placeholder="Entrez votre email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required 
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="loginPassword">
            <Form.Label>Mot de passe</Form.Label>
            <Form.Control 
              type="password" 
              placeholder="Mot de passe" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required 
            />
          </Form.Group>

          <Button variant="success" type="submit" className="w-100 mb-2">
            Se connecter
          </Button>

          <div className="text-center">
            <Button variant="link" onClick={() => setShowResetModal(true)}>
              Mot de passe oublié ?
            </Button>
          </div>
        </Form>
      </Card>

      <Modal show={showResetModal} onHide={() => setShowResetModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>🔐 Réinitialisation du mot de passe</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {resetSuccess ? (
            <div className="text-success">
              📩 Un email de réinitialisation a été envoyé à <strong>{resetEmail}</strong>
            </div>
          ) : (
            <Form>
              <Form.Group controlId="resetEmail">
                <Form.Label>Entrez votre adresse email</Form.Label>
                <Form.Control 
                  type="email" 
                  placeholder="exemple@domaine.com"
                  value={resetEmail}
                  onChange={(e) => setResetEmail(e.target.value)}
                  required 
                />
              </Form.Group>
            </Form>
          )}
        </Modal.Body>
        <Modal.Footer>
          {!resetSuccess && (
            <Button variant="primary" onClick={handleResetPassword}>
              Envoyer
            </Button>
          )}
          <Button variant="secondary" onClick={() => {
            setShowResetModal(false);
            setResetEmail('');
            setResetSuccess(false);
          }}>
            Fermer
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default Login;


