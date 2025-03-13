import React, { useState } from "react";
import "./GaleriaFotos.css";

const totalFotos = 39; // Número total de imágenes
const videoSrc = require("../assets/video.mp4"); // Ruta del video

const GaleriaFotos = () => {
  const [mediaSeleccionada, setMediaSeleccionada] = useState(null);

  const abrirMedia = (src) => {
    setMediaSeleccionada(src);
  };

  const cerrarMedia = () => {
    setMediaSeleccionada(null);
  };

  return (
    <div className="galeria-container">
      <h2>📸 Galería de Fotos y Videos</h2>
      <div className="grid">
        {Array.from({ length: totalFotos }, (_, i) => (
          <img
            key={i}
            src={require(`../assets/foto${i + 1}.jpg`)}
            alt={`Foto ${i + 1}`}
            className="imagen"
            onClick={() => abrirMedia(require(`../assets/foto${i + 1}.jpg`))}
          />
        ))}

        {/* Video */}
        <video
          className="video-preview"
          src={videoSrc}
          controls
          onClick={() => abrirMedia(videoSrc)}
        />
      </div>

      {/* Modal para ampliar la imagen o video */}
      {mediaSeleccionada && (
        <div className="modal" onClick={cerrarMedia}>
          <div className="modal-content">
            {mediaSeleccionada.includes(".mp4") ? (
              <video src={mediaSeleccionada} controls autoPlay />
            ) : (
              <img src={mediaSeleccionada} alt="Foto ampliada" />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default GaleriaFotos;