
/**import React, { useState, useEffect } from 'react';
import { Button, Offcanvas, Tab, Tabs, Badge, Form, Modal } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const API_URL = 'http://localhost:8080/api'; // Remplacez par votre URL backend

const Palmier = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [activeTab, setActiveTab] = useState('alerts');
  const [weatherAlerts, setWeatherAlerts] = useState([]);
  const [announcements, setAnnouncements] = useState([]);
  const [unreadAlerts, setUnreadAlerts] = useState(0);
  const [showAnnouncementModal, setShowAnnouncementModal] = useState(false);
  const [newAnnouncement, setNewAnnouncement] = useState({ 
    firstName: '', 
    lastName: '', 
    title: '', 
    phone: '', 
    message: '' 
  });

  const navigate = useNavigate();

  // Charger les alertes depuis l'API
  useEffect(() => {
    const fetchAlerts = async () => {
      try {
        const response = await fetch(`${API_URL}/alerts`);
        const data = await response.json();
        setWeatherAlerts(data);
        setUnreadAlerts(data.filter(alert => !alert.is_read).length);
      } catch (error) {
        console.error('Erreur lors du chargement des alertes:', error);
      }
    };
    
    fetchAlerts();
  }, []);

  // Charger les annonces depuis l'API
  useEffect(() => {
    const fetchAnnouncements = async () => {
      try {
        const response = await fetch(`${API_URL}/announcements`);
        const data = await response.json();
        setAnnouncements(data);
      } catch (error) {
        console.error('Erreur lors du chargement des annonces:', error);
      }
    };
    
    fetchAnnouncements();
  }, []);

  const handleMenuToggle = () => {
    setShowMenu(!showMenu);
    if (!showMenu && activeTab === 'alerts') {
      markAlertsAsRead();
    }
  };

  const handleTabSelect = (tab) => {
    setActiveTab(tab);
    if (tab === 'alerts') {
      markAlertsAsRead();
    }
  };

  const markAlertsAsRead = async () => {
    try {
      await fetch(`${API_URL}/alerts/mark-read`, {
        method: 'POST'
      });
      
      const updatedAlerts = weatherAlerts.map(alert => ({ 
        ...alert, 
        is_read: true 
      }));
      setWeatherAlerts(updatedAlerts);
      setUnreadAlerts(0);
    } catch (error) {
      console.error('Erreur lors du marquage des alertes comme lues:', error);
    }
  };

  const handlePalmierClick = () => {
    setShowMenu(false);
    navigate('/foret');
  };

  const handleAnnouncementSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${API_URL}/announcements`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newAnnouncement),
      });
      
      const data = await response.json();
      
      setAnnouncements([{
        id: data.id,
        ...newAnnouncement,
        date: new Date().toISOString().split('T')[0]
      }, ...announcements]);
      
      setNewAnnouncement({ 
        firstName: '', 
        lastName: '', 
        title: '', 
        phone: '', 
        message: '' 
      });
      setShowAnnouncementModal(false);
    } catch (error) {
      console.error('Erreur lors de la création de l\'annonce:', error);
    }
  };

  return (
    <div className="app-container">
      <Button variant="secondary" onClick={handleMenuToggle}>Menu</Button>
      <Offcanvas show={showMenu} onHide={handleMenuToggle} placement="start">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu Principal</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Tabs activeKey={activeTab} onSelect={handleTabSelect} className="flex-column">
            <Tab eventKey="alerts" title={<span>🔔 Alertes {unreadAlerts > 0 && <Badge bg="danger">{unreadAlerts}</Badge>}</span>}>
              <ul className="mt-3">
                {weatherAlerts.map(alert => (
                  <li key={alert.id} className={`alert-item alert-${alert.type} ${alert.is_read ? 'read' : 'unread'}`}>
                    <strong>{alert.date}</strong> - {alert.message}
                  </li>
                ))}
              </ul>
            </Tab>

            <Tab eventKey="announcements" title="📢 Annonces">
              <div className="d-flex justify-content-between mt-3">
                <h5>Annonces</h5>
                <Button size="sm" onClick={() => setShowAnnouncementModal(true)}>+ Ajouter</Button>
              </div>
              {announcements.map(ann => (
                <div key={ann.id} className="border p-2 my-2">
                  <h6>{ann.title} - {ann.date}</h6>
                  <p><strong>{ann.first_name} {ann.last_name}</strong> ({ann.phone})</p>
                  <p>{ann.message}</p>
                </div>
              ))}
            </Tab>

            <Tab eventKey="palmTrees" title="🌴 Mes palmiers">
              <div className="mt-3 d-flex flex-column gap-2">
                <Button variant="primary" onClick={handlePalmierClick}>Voir mes forêts</Button>
              </div>
            </Tab>
          </Tabs>
        </Offcanvas.Body>
      </Offcanvas>

      <Modal show={showAnnouncementModal} onHide={() => setShowAnnouncementModal(false)}>
        <Modal.Header closeButton><Modal.Title>Nouvelle annonce</Modal.Title></Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleAnnouncementSubmit}>
            <Form.Control 
              placeholder="Prénom" 
              value={newAnnouncement.firstName} 
              onChange={e => setNewAnnouncement({ ...newAnnouncement, firstName: e.target.value })} 
              className="mb-2" 
              required
            />
            <Form.Control 
              placeholder="Nom" 
              value={newAnnouncement.lastName} 
              onChange={e => setNewAnnouncement({ ...newAnnouncement, lastName: e.target.value })} 
              className="mb-2" 
              required
            />
            <Form.Control 
              placeholder="Titre" 
              value={newAnnouncement.title} 
              onChange={e => setNewAnnouncement({ ...newAnnouncement, title: e.target.value })} 
              className="mb-2" 
              required
            />
            <Form.Control 
              placeholder="Téléphone" 
              value={newAnnouncement.phone} 
              onChange={e => setNewAnnouncement({ ...newAnnouncement, phone: e.target.value })} 
              className="mb-2" 
              required
            />
            <Form.Control 
              as="textarea" 
              rows={3} 
              placeholder="Message" 
              value={newAnnouncement.message} 
              onChange={e => setNewAnnouncement({ ...newAnnouncement, message: e.target.value })} 
              className="mb-2" 
              required
            />
            <Button type="submit">Publier</Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Palmier;**/


import React, { useState, useEffect } from 'react';
import { Button, Offcanvas, Tab, Tabs, Badge, Form, Modal } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const API_URL = 'http://localhost:8080/api';

const Palmier = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [activeTab, setActiveTab] = useState('alerts');
  const [weatherAlerts, setWeatherAlerts] = useState([]);
  const [announcements, setAnnouncements] = useState([]);
  const [unreadAlerts, setUnreadAlerts] = useState(0);
  const [showAnnouncementModal, setShowAnnouncementModal] = useState(false);
  const [newAnnouncement, setNewAnnouncement] = useState({ 
    first_name: '', 
    last_name: '', 
    title: '', 
    phone: '', 
    message: '' 
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  // Charger les alertes depuis l'API
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);
      
      try {
        const [alertsRes, announcementsRes] = await Promise.all([
          fetch(`${API_URL}/alerts`),
          fetch(`${API_URL}/announcements`)
        ]);

        if (!alertsRes.ok) throw new Error('Erreur lors du chargement des alertes');
        if (!announcementsRes.ok) throw new Error('Erreur lors du chargement des annonces');

        const alertsData = await alertsRes.json();
        const announcementsData = await announcementsRes.json();

        setWeatherAlerts(alertsData);
        setUnreadAlerts(alertsData.filter(alert => !alert.is_read).length);
        setAnnouncements(announcementsData);
      } catch (err) {
        console.error('Erreur:', err);
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleMenuToggle = () => {
    setShowMenu(!showMenu);
    if (!showMenu && activeTab === 'alerts') {
      markAlertsAsRead();
    }
  };

  const handleTabSelect = (tab) => {
    setActiveTab(tab);
    if (tab === 'alerts') {
      markAlertsAsRead();
    }
  };

  const markAlertsAsRead = async () => {
    try {
      const response = await fetch(`${API_URL}/alerts/mark-read`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        }
      });
      
      if (!response.ok) throw new Error('Échec du marquage des alertes');

      setWeatherAlerts(prev => prev.map(alert => ({ 
        ...alert, 
        is_read: true 
      })));
      setUnreadAlerts(0);
    } catch (err) {
      console.error('Erreur:', err);
      setError(err.message);
    }
  };

  const handlePalmierClick = () => {
    setShowMenu(false);
    navigate('/foret');
  };

  const handleAnnouncementSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(`${API_URL}/announcements`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...newAnnouncement,
          date: new Date().toISOString().split('T')[0]
        }),
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Erreur lors de la création');
      }

      const data = await response.json();
      
      setAnnouncements(prev => [{
        ...data,
        first_name: newAnnouncement.first_name,
        last_name: newAnnouncement.last_name,
        title: newAnnouncement.title,
        phone: newAnnouncement.phone,
        message: newAnnouncement.message,
        date: new Date().toISOString().split('T')[0]
      }, ...prev]);
      
      setNewAnnouncement({ 
        first_name: '', 
        last_name: '', 
        title: '', 
        phone: '', 
        message: '' 
      });
      setShowAnnouncementModal(false);
    } catch (err) {
      console.error('Erreur:', err);
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewAnnouncement(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="app-container">
      {error && (
        <div className="alert alert-danger">
          {error}
          <button 
            type="button" 
            className="close" 
            onClick={() => setError(null)}
          >
            &times;
          </button>
        </div>
      )}

      <Button variant="secondary" onClick={handleMenuToggle}>
        Menu
      </Button>

      <Offcanvas show={showMenu} onHide={handleMenuToggle} placement="start">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu Principal</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {isLoading ? (
            <div className="text-center my-4">
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Chargement...</span>
              </div>
            </div>
          ) : (
            <Tabs activeKey={activeTab} onSelect={handleTabSelect} className="flex-column">
              <Tab eventKey="alerts" title={
                <span>
                  🔔 Alertes 
                  {unreadAlerts > 0 && <Badge bg="danger" className="ms-1">{unreadAlerts}</Badge>}
                </span>
              }>
                <ul className="mt-3 list-unstyled">
                  {weatherAlerts.length > 0 ? (
                    weatherAlerts.map(alert => (
                      <li 
                        key={alert.id} 
                        className={`alert-item alert-${alert.type} ${alert.is_read ? 'read' : 'unread'} p-2 mb-2 rounded`}
                      >
                        <strong>{alert.date}</strong> - {alert.message}
                      </li>
                    ))
                  ) : (
                    <li className="text-muted">Aucune alerte pour le moment</li>
                  )}
                </ul>
              </Tab>

              <Tab eventKey="announcements" title="📢 Annonces">
                <div className="d-flex justify-content-between align-items-center mt-3 mb-2">
                  <h5>Annonces</h5>
                  <Button 
                    size="sm" 
                    onClick={() => setShowAnnouncementModal(true)}
                    disabled={isLoading}
                  >
                    + Ajouter
                  </Button>
                </div>
                {announcements.length > 0 ? (
                  announcements.map(ann => (
                    <div key={ann.id} className="border p-3 my-2 rounded">
                      <h6 className="mb-1">{ann.title} <small className="text-muted">- {ann.date}</small></h6>
                      <p className="mb-1">
                        <strong>{ann.first_name} {ann.last_name}</strong> ({ann.phone})
                      </p>
                      <p className="mb-0">{ann.message}</p>
                    </div>
                  ))
                ) : (
                  <p className="text-muted">Aucune annonce pour le moment</p>
                )}
              </Tab>

              <Tab eventKey="palmTrees" title="🌴 Mes palmiers">
                <div className="mt-3 d-flex flex-column gap-2">
                  <Button 
                    variant="primary" 
                    onClick={handlePalmierClick}
                    disabled={isLoading}
                  >
                    Voir mes forêts
                  </Button>
                </div>
              </Tab>
            </Tabs>
          )}
        </Offcanvas.Body>
      </Offcanvas>

      <Modal show={showAnnouncementModal} onHide={() => !isLoading && setShowAnnouncementModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Nouvelle annonce</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleAnnouncementSubmit}>
            <Form.Group className="mb-3">
              <Form.Control
                name="first_name"
                placeholder="Prénom"
                value={newAnnouncement.first_name}
                onChange={handleInputChange}
                required
                disabled={isLoading}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control
                name="last_name"
                placeholder="Nom"
                value={newAnnouncement.last_name}
                onChange={handleInputChange}
                required
                disabled={isLoading}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control
                name="title"
                placeholder="Titre"
                value={newAnnouncement.title}
                onChange={handleInputChange}
                required
                disabled={isLoading}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control
                name="phone"
                placeholder="Téléphone"
                value={newAnnouncement.phone}
                onChange={handleInputChange}
                required
                disabled={isLoading}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control
                as="textarea"
                rows={3}
                name="message"
                placeholder="Message"
                value={newAnnouncement.message}
                onChange={handleInputChange}
                required
                disabled={isLoading}
              />
            </Form.Group>

            <div className="d-flex justify-content-end gap-2">
              <Button 
                variant="secondary" 
                onClick={() => setShowAnnouncementModal(false)}
                disabled={isLoading}
              >
                Annuler
              </Button>
              <Button 
                type="submit" 
                variant="primary"
                disabled={isLoading}
              >
                {isLoading ? 'Publication...' : 'Publier'}
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Palmier;

