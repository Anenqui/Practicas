import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Pagina1 from './views/pagina1';
import { Navbar } from './navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FormularioRegistro from './views/formulario';
import Consulta from './views/consultas';
import Cervesas from './views/cervesas';

function App() {
  return (
    <Router>
      <Navbar />
      <div style={{ padding: 20 }}>
        <Routes>
          <Route path="/" element={<Pagina1 />} />
          <Route path="/registro" element={<FormularioRegistro />} />
          <Route path="/consulta" element={<Consulta />} />
          <Route path="/cervesas" element={<Cervesas />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
