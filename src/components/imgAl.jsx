import { useState } from 'react';

function ImagenAl() {
  const baseURL = "https://picsum.photos/200/300";
  const [randomKey, setRandomKey] = useState(Date.now());

  const cambiarImagen = () => {
    setRandomKey(Date.now());
  };

  return (
    <div className="text-center mt-6 space-y-4">
      <img
        src={`${baseURL}?random=${randomKey}`}
        alt="Imagen aleatoria"
        className="w-48 h-auto mx-auto rounded shadow"
      />
      <button
        onClick={cambiarImagen}
        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
      >
        Cambiar Imagen Aleatoria
      </button>
    </div>
  );
}

export default ImagenAl;
