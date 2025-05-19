import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Titulo from './components/Titulo';
import Parrafo from './components/Parrafo';
import Imagen from './components/Imagen';
import Contador from './components/contador';
import ImagenAl from './components/imgAl';

function App() {
  return (
    <div>
      <Titulo   
      texto="Hola mundo" 
      fuente="font-serif" 
      tamaño="text-4xl" 
      color="text-red-500"/>
      <Parrafo  
        contenido="Este es un párrafo" 
        fuente="font-mono" 
        tamaño="text-lg" 
        color="text-blue-600"/>
      <Imagen
        src={reactLogo} 
        alt="Logo de React" 
        ancho="w-32"/>
        <Contador />
        <ImagenAl/>
    </div>
  );
}

export default App;

