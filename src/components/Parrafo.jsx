function Parrafo({ contenido, fuente = "font-sans", tamaño = "text-base", color = "text-gray-700" }) {
  return (
    <p className={`text-center mt-4 ${fuente} ${tamaño} ${color}`}>
      {contenido}
    </p>
  );
}

export default Parrafo;
