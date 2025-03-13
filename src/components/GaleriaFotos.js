import React, { useState } from "react";
import "./GaleriaFotos.css";

const totalFotos = 39; // Número total de imágenes
const videoSrc = require("../assets/video.mp4"); // Ruta del video

const GaleriaFotos = () => {
  const [seleccionado, setSeleccionado] = useState(null);
  const [esVideo, setEsVideo] = useState(false);

  const abrirElemento = (src, tipo) => {
    setSeleccionado(src);
    setEsVideo(tipo === "video");
  };

  const cerrarElemento = () => {
    setSeleccionado(null);
    setEsVideo(false);
  };

  return (
    <div className="galeria-container">
      <h2>📸 Galería de Fotos</h2>
      <div className="grid">
        {/* Mostrar imágenes */}
        {Array.from({ length: totalFotos }, (_, i) => (
          <img
            key={i}
            src={require(`../assets/foto${i + 1}.jpg`)}
            alt={`Foto ${i + 1}`}
            className="imagen"
            onClick={() => abrirElemento(require(`../assets/foto${i + 1}.jpg`), "imagen")}
          />
        ))}

        {/* Mostrar video */}
        <video
          className="imagen"
          onClick={() => abrirElemento(videoSrc, "video")}
          src={videoSrc}
          muted
          loop
        />
      </div>

      {/* Modal para ampliar imagen o video */}
      {seleccionado && (
        <div className="modal" onClick={cerrarElemento}>
          <div className="modal-content">
            {esVideo ? (
              <video src={seleccionado} controls autoPlay />
            ) : (
              <img src={seleccionado} alt="Ampliado" />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default GaleriaFotos;
