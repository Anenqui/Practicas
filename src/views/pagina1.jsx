import reactLogo from '../assets/react.svg'
import '../App.css'
import Titulo from '../components/Titulo';
import Parrafo from '../components/Parrafo';
import Imagen from '../components/Imagen';
import Contador from '../components/contador';
import ImagenAl from '../components/imgAl';
import 'bootstrap/dist/css/bootstrap.min.css';
import BotonA from '../components/botonAzul';
import ModalA from '../components/Modal';
import CarouselA from '../components/carousel';
import TablaI from '../components/Tabla';


const Pagina1= ()=>{
    return(
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
        <BotonA/>
        <ModalA />
        <CarouselA />
        <TablaI />
    </div>
)}

export default Pagina1;