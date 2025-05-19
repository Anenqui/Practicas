function Titulo({ texto, fuente = "font-sans", tamaño = "text-4xl", color = "text-black" }) {
  return (
    <h1 className={`text-center font-bold ${fuente} ${tamaño} ${color}`}>
      {texto}
    </h1>
  );
}

export default Titulo;
