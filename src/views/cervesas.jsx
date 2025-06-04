import React, { useEffect, useState } from 'react';
import {
  Table,
  Button,
  Spinner,
  Container
} from 'reactstrap';

const Usuarios = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [loading, setLoading] = useState(false);

  const obtenerUsuarios = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://randomuser.me/api/?results=15');
      if (!response.ok) throw new Error('Error al obtener usuarios');
      const data = await response.json();
      setUsuarios(data.results);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    obtenerUsuarios();
  }, []);

  return (
    <Container className="mt-4">
      <h2 className="mb-3 text-center">Lista de Usuarios</h2>
      <div className="text-center mb-3">
        <Button color="primary" onClick={obtenerUsuarios}>
          {loading ? <Spinner size="sm" /> : 'Cargar otros 15 usuarios'}
        </Button>
      </div>

      <Table bordered responsive hover>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Email</th>
            <th>Username</th>
            <th>Teléfono</th>
            <th>Celular</th>
            <th>Edad</th>
            <th>País</th>
            <th>Ciudad</th>
            <th>Dirección</th>
            <th>Foto</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map((user, index) => (
            <tr key={index}>
              <td>{user.name.first} {user.name.last}</td>
              <td>{user.email}</td>
              <td>{user.login.username}</td>
              <td>{user.phone}</td>
              <td>{user.cell}</td>
              <td>{user.dob.age}</td>
              <td>{user.location.country}</td>
              <td>{user.location.city}</td>
              <td>{`${user.location.street.name} ${user.location.street.number}`}</td>
              <td>
                <img
                  src={user.picture.thumbnail}
                  alt="Foto"
                  style={{ borderRadius: '50%' }}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default Usuarios;
