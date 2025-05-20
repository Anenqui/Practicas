import React, { useEffect, useState } from 'react';
import {
  Table,
  Button,
  Spinner,
  Container
} from 'reactstrap';

const Cervesas = () => {
  const [cervezas, setCervezas] = useState([]);
  const [loading, setLoading] = useState(false);

  const obtenerCervezas = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://random-data-api.com/api/v2/beers?size=15');
      if (!response.ok) throw new Error('Error al obtener cervezas');
      const data = await response.json();
      setCervezas(data);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    obtenerCervezas();
  }, []);

  return (
    <Container className="mt-4">
      <h2 className="mb-3 text-center">Lista de Cervesas</h2>
      <div className="text-center mb-3">
        <Button color="primary" onClick={obtenerCervezas}>
          {loading ? <Spinner size="sm" /> : 'Cargar otras 15 cervesas'}
        </Button>
      </div>

      <Table bordered responsive hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>UID</th>
            <th>Marca</th>
            <th>Nombre</th>
            <th>Estilo</th>
            <th>Lúpulo</th>
            <th>Levadura</th>
            <th>Maltas</th>
            <th>IBU</th>
            <th>Alcohol</th>
            <th>Blg</th>
          </tr>
        </thead>
        <tbody>
          {cervezas.map((cerv, index) => (
            <tr key={index}>
              <td>{cerv.id}</td>
              <td>{cerv.uid}</td>
              <td>{cerv.brand}</td>
              <td>{cerv.name}</td>
              <td>{cerv.style}</td>
              <td>{cerv.hop}</td>
              <td>{cerv.yeast}</td>
              <td>{cerv.malts}</td>
              <td>{cerv.ibu}</td>
              <td>{cerv.alcohol}</td>
              <td>{cerv.blg}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default Cervesas;
