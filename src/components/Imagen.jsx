function Imagen({ src, alt, ancho = "w-64" }) {
  return (
    <div className="flex justify-center mt-6">
      <img src={src} alt={alt} className={`${ancho} h-auto rounded shadow-md`} />
    </div>
  );
}

export default Imagen;
