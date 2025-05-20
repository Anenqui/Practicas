import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export const Navbar = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-gray-800 text-white px-6 py-4 flex justify-between items-center shadow-md">
      <span className="text-xl font-bold">Practicas</span>
      <div className="flex space-x-6">
        <Link
          to="/"
          className={`hover:underline font-semibold ${
            isActive('/') ? 'underline' : ''
          }`}>
          Tarea 1/2
        </Link>
         <Link
          to="/registro"
          className={`hover:underline font-semibold ${
            isActive('/Formulario') ? 'underline' : ''
          }`}>
          Tarea 3/4
        </Link>
        <Link
          to="/consulta"
          className={`hover:underline font-semibold ${
            isActive('/Consultas') ? 'underline' : ''
          }`}>
            Tarea 5
          </Link>
      </div>
    </nav>
  );
};
