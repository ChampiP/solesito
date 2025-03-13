import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./PanelPrincipal.css";

const PanelPrincipal = () => {
  const [showOptions, setShowOptions] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowOptions(true);
    }, 2000);

    return () => clearTimeout(timeout); // Limpieza para evitar fugas de memoria
  }, []);

  return (
    <div className="panel-container">
      {!showOptions ? (
        <>
          {/* Cortinas animadas */}
          {["left", "right"].map((side) => (
            <motion.div
              key={side}
              className={`curtain ${side}`}
              initial={{ x: 0 }}
              animate={{ x: side === "left" ? "-100%" : "100%" }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
          ))}

          <h1 className="love-message" aria-live="polite">
            🎉 Feliz cumpleaños ❤️
          </h1>
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
            Bélgica, eres una gran mujer, todo esto es para ti. Te amo 💖
            te amo del infinito para mas alla vuelve pronto
          </p>

          <motion.div
            className="panel-buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <Link to="/chat" className="panel-button">
              💬 en proceso
            </Link>
            <Link to="/cartas" className="panel-button">
              💌 ¿Necesitas aliento?
            </Link>
            <Link to="/carrusel" className="panel-button">
              📍 Mapa del Amor
            </Link>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default PanelPrincipal;
