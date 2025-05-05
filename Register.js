import React, { useState } from 'react';
import { Form, Button, Container, Card } from 'react-bootstrap';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Les mots de passe ne correspondent pas.');
      return;
    }
    console.log('Inscription avec :', { email, password });
    
  };

  return (
    <Container className="mt-5 d-flex justify-content-center">
      <Card className="p-4 shadow" style={{ maxWidth: '400px', width: '100%' }}>
        <h4 className="text-center mb-4">📝 Inscription</h4>
        <Form onSubmit={handleRegister}>
          <Form.Group className="mb-3" controlId="registerEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control 
              type="email" 
              placeholder="Entrez votre email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required 
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="registerPassword">
            <Form.Label>Mot de passe</Form.Label>
            <Form.Control 
              type="password" 
              placeholder="Mot de passe" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required 
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="registerConfirm">
            <Form.Label>Confirmer le mot de passe</Form.Label>
            <Form.Control 
              type="password" 
              placeholder="Confirmez le mot de passe" 
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required 
            />
          </Form.Group>

          <Button variant="success" type="submit" className="w-100">
            S'inscrire
          </Button>
        </Form>
      </Card>
    </Container>
  );
}

export default Register;
