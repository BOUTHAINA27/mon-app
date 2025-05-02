

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthForm from "./components/AuthForm";
import HomePage from "./components/HomePage";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        
        <Route path="/" element={<AuthForm />} />

        
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;








