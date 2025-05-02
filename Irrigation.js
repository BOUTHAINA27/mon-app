
import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Irrigation = () => {
  const [weather, setWeather] = useState(null);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [irrigationDates, setIrrigationDates] = useState([]);
  const [irrigationDetails, setIrrigationDetails] = useState({});
  const [seasonAdvice, setSeasonAdvice] = useState("");
  const [error, setError] = useState("");
  const [region] = useState("Kébili"); // Région fixée sur Kébili

  const API_KEY = "YOUR_API_KEY";  // Remplacez par votre propre clé API

  // Récupérer les données météo
  useEffect(() => {
    fetchWeather(region);

    // Calculer les conseils selon la saison
    const season = getSeason(selectedDate);
    setSeasonAdvice(getIrrigationAdvice(season, weather));
  }, [selectedDate, region]);

  const fetchWeather = async (region) => {
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${region}&appid=${API_KEY}`);
      const data = await response.json();
      setWeather({
        name: region,
        main: { temp: data.main.temp - 273.15, humidity: data.main.humidity },
        wind: { speed: data.wind.speed }
      });
    } catch (error) {
      console.error("Erreur lors de la récupération des données météo", error);
      setWeather(null);
    }
  };

  // Déterminer la saison
  const getSeason = (date) => {
    const month = date.getMonth();
    if (month >= 3 && month <= 5) return "Spring"; // Printemps
    if (month >= 6 && month <= 8) return "Summer"; // Été
    if (month >= 9 && month <= 11) return "Fall"; // Automne
    return "Winter"; // Hiver
  };

  // Conseils d'irrigation
  const getIrrigationAdvice = (season, weather) => {
    if (!weather) return "";
    const temp = weather.main.temp;
    const humidity = weather.main.humidity;

    if (season === "Summer") {
      return temp > 30
        ? "🌞 Il fait très chaud ! Arrosez fréquemment et abondamment pour compenser l'évaporation élevée."
        : "🌞 Le climat est chaud, mais l'arrosage peut être modéré.";
    }
    if (season === "Spring" || season === "Fall") {
      return "🌱 Climat modéré. Privilégiez une irrigation modérée, en prenant en compte les prévisions de pluie.";
    }
    if (season === "Winter") {
      return "❄️ Temps froid, l'irrigation doit être réduite, sauf si la météo est très sèche.";
    }
    return "";
  };

  // Ajouter une date au calendrier
  const handleDateClick = (date) => {
    const exists = irrigationDates.some((d) => d.toDateString() === date.toDateString());
    if (!exists) {
      setIrrigationDates([...irrigationDates, date]);
      setIrrigationDetails({ ...irrigationDetails, [date.toDateString()]: { waterAmount: '', duration: '' } });
    }
  };

  // Mise à jour des détails d'irrigation
  const handleIrrigationChange = (date, field, value) => {
    setError(""); // Réinitialiser l'erreur
    if (value < 0) {
      setError("Les valeurs ne peuvent pas être négatives.");
      return;
    }
    setIrrigationDetails({
      ...irrigationDetails,
      [date.toDateString()]: { ...irrigationDetails[date.toDateString()], [field]: value }
    });
  };

  return (
    <div className="container my-5">
      <h2 className="text-success mb-4">💧 Gestion de l'Irrigation - Kébili</h2>

      {/* Affichage météo */}
      {weather ? (
        <div className="alert alert-info d-flex align-items-center">
          <i className="bi bi-cloud-sun-fill me-3 fs-3"></i>
          <div>
            <h5>Météo actuelle à {weather.name}</h5>
            <p className="mb-1">🌡️ Température : {weather.main.temp.toFixed(1)} °C</p>
            <p className="mb-1">💧 Humidité : {weather.main.humidity}%</p>
            <p className="mb-0">🌬️ Vent : {weather.wind.speed} m/s</p>
          </div>
        </div>
      ) : (
        <p>Chargement de la météo...</p>
      )}

      {/* Conseils d'irrigation dynamiques */}
      <div className="mt-4">
        <h4>✅ Conseils d'irrigation pour Kébili</h4>
        <p>{seasonAdvice}</p>
      </div>

      {/* Erreur de validation */}
      {error && <div className="alert alert-danger">{error}</div>}

      {/* Calendrier d'irrigation */}
      <div className="mt-5">
        <h4>📅 Planifiez vos sessions</h4>
        <Calendar
          onClickDay={handleDateClick}
          value={selectedDate}
          tileClassName={({ date }) =>
            irrigationDates.some((d) => d.toDateString() === date.toDateString())
              ? 'bg-success text-white rounded'
              : null
          }
        />
        <div className="mt-3">
          <h5>📌 Dates planifiées :</h5>
          {irrigationDates.length === 0 ? (
            <p>Aucune date sélectionnée</p>
          ) : (
            <ul>
              {irrigationDates.map((date, i) => (
                <li key={i}>
                  {date.toDateString()}
                  <div className="mt-2">
                    <label>Quantité d'eau (L) :</label>
                    <input
                      type="number"
                      value={irrigationDetails[date.toDateString()]?.waterAmount || ''}
                      onChange={(e) => handleIrrigationChange(date, 'waterAmount', e.target.value)}
                      className="form-control"
                    />
                    <label className="mt-2">Durée (min) :</label>
                    <input
                      type="number"
                      value={irrigationDetails[date.toDateString()]?.duration || ''}
                      onChange={(e) => handleIrrigationChange(date, 'duration', e.target.value)}
                      className="form-control"
                    />
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {/* Confirmation de l'ajout */}
      {irrigationDates.length > 0 && (
        <div className="mt-4">
          <button className="btn btn-primary">📤 Enregistrer les sessions d'irrigation</button>
        </div>
      )}
    </div>
  );
};

export default Irrigation;



