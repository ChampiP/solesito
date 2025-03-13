import React, { useState } from "react";
import "./GaleriaFotos.css";

const totalFotos = 17; // Número total de imágenes

const GaleriaFotos = () => {
  const [fotoSeleccionada, setFotoSeleccionada] = useState(null);

  const abrirFoto = (src) => {
    setFotoSeleccionada(src);
  };

  const cerrarFoto = () => {
    setFotoSeleccionada(null);
  };

  return (
    <div className="galeria-container">
      <h2>📸 Galería de Fotos</h2>
      <div className="grid">
        {Array.from({ length: totalFotos }, (_, i) => (
          <img
            key={i}
            src={require(`../assets/foto${i + 1}.jpg`)}
            alt={`Foto ${i + 1}`}
            className="imagen"
            onClick={() => abrirFoto(require(`../assets/foto${i + 1}.jpg`))}
          />
        ))}
      </div>

      {/* Modal para ampliar la imagen */}
      {fotoSeleccionada && (
        <div className="modal" onClick={cerrarFoto}>
          <div className="modal-content">
            <img src={fotoSeleccionada} alt="Foto ampliada" />
          </div>
        </div>
      )}
    </div>
  );
};

export default GaleriaFotos;
