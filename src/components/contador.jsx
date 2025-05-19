import { useState } from 'react';

function Contador() {
  const [contador, setContador] = useState(0);

  return (
    <div className="text-center mt-4 space-y-2">
      <h2 className="text-2xl font-bold">Contador: {contador}</h2>
      <button
        onClick={() => setContador(contador + 1)}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
      >
        Aumentar
      </button>
    </div>
  );
}

export default Contador;
