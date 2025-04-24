
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './AuthForm.css'; 

export default function AuthForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [isRegister, setIsRegister] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleAuth = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate("/home");
    }, 1500);
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2 className="auth-title">
          {isRegister ? "Créer un compte" : "Se connecter"}
        </h2>
        <form onSubmit={handleAuth} className="auth-form">
          <input 
            type="email" 
            placeholder="Email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
            className="auth-input"
          />
          {isRegister && (
            <input 
              type="tel" 
              placeholder="Numéro de téléphone" 
              value={phone} 
              onChange={(e) => setPhone(e.target.value)} 
              required 
              className="auth-input"
            />
          )}
          <input 
            type="password" 
            placeholder="Mot de passe" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
            className="auth-input"
          />
          <button 
            type="submit" 
            className="auth-button"
            disabled={loading}
          >
            {loading ? "Chargement..." : (isRegister ? "S'inscrire" : "Se connecter")}
          </button>
        </form>
        {!isRegister && (
          <p className="auth-forgot">
            <span className="auth-link">Mot de passe oublié ?</span>
          </p>
        )}
        <p className="auth-switch">
          {isRegister ? "Déjà un compte ? " : "Pas encore inscrit ? "}
          <span 
            className="auth-link"
            onClick={() => setIsRegister(!isRegister)}
          >
            {isRegister ? "Se connecter" : "Créer un compte"}
          </span>
        </p>
      </div>
    </div>
  );
}



