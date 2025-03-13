import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./PanelPrincipal.css";

const PanelPrincipal = () => {
  const [showOptions, setShowOptions] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowOptions(true);
    }, 2000);
  }, []);

  return (
    <div className="panel-container">
      {!showOptions ? (
        <>
          {/* Cortinas */}
          <motion.div
            className="curtain left"
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
          <motion.div
            className="curtain right"
            initial={{ x: 0 }}
            animate={{ x: "100%" }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
          <h1 className="love-message">🎉 Feliz cumpleaños ❤️</h1>
        </>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="content"
        >
          <h1 className="panel-title">✨ My pedazo de sol, esto es para ti ✨</h1>
          <p className="panel-subtitle">
            Bélgica, eres una gran mujer, todo esto es para ti te amo 💖
          </p>

          <div className="panel-buttons">
            <Link to="/chat" className="panel-button">💬 en proceso</Link>
            <Link to="/cartas" className="panel-button">💌 ¿Necesitas aliento?</Link>
            <Link to="/carrusel" className="panel-button">📍 Mapa del Amor</Link>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default PanelPrincipal;
