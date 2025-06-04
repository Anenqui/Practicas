import React, { useState } from 'react';
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardText,
  CardImg,
  Spinner
} from 'reactstrap';

const Consulta = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchUser = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://randomuser.me/api/');
      if (!response.ok) {
        throw new Error('Error al obtener datos');
      }
      const data = await response.json();
      setUser(data.results[0]); 
    } catch (error) {
      console.error('Error:', error);
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="text-center p-4">
      <Button color="primary" onClick={fetchUser}>
        {loading ? <Spinner size="sm" /> : 'Obtener Usuario Aleatorio'}
      </Button>

      {user && (
        <Card className="mt-4 mx-auto" style={{ maxWidth: '400px' }}>
          <CardHeader tag="h5">
            {user.name.first} {user.name.last}
          </CardHeader>
          <CardImg
            top
            width="100%"
            src={user.picture.large}
            alt="Avatar del usuario"
          />
          <CardBody>
            <CardText><strong>Username:</strong> {user.login.username}</CardText>
            <CardText><strong>Email:</strong> {user.email}</CardText>
            <CardText><strong>Teléfono:</strong> {user.phone}</CardText>
            <CardText><strong>Celular:</strong> {user.cell}</CardText>
            <CardText><strong>Género:</strong> {user.gender}</CardText>
            <CardText><strong>Dirección:</strong> {user.location.street.name} {user.location.street.number}, {user.location.city}, {user.location.state}, {user.location.country}</CardText>
            <CardText><strong>Fecha de nacimiento:</strong> {new Date(user.dob.date).toLocaleDateString()}</CardText>
            <CardText><strong>Edad:</strong> {user.dob.age}</CardText>
            <CardText><strong>Nacionalidad:</strong> {user.nat}</CardText>
          </CardBody>
          <CardFooter>
            <strong>Zona horaria:</strong> {user.location.timezone.description}
          </CardFooter>
        </Card>
      )}
    </div>
  );
};

export default Consulta;
