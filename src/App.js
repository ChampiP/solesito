import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PanelPrincipal from "./components/PanelPrincipal";
import CartaAleatoria from "./components/CartaAleatoria";
import GaleriaFotos from "./components/GaleriaFotos"; // Importa la galería

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PanelPrincipal />} />
        <Route path="/cartas" element={<CartaAleatoria />} />
        <Route path="/carrusel" element={<GaleriaFotos />} /> {/* Nueva ruta */}
      </Routes>
    </Router>
  );
};

export default App;
