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
      const response = await fetch('https://random-data-api.com/api/v2/users');
      if (!response.ok) {
        throw new Error('Error al obtener datos');
      }
      const data = await response.json();
      setUser(data);
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
            {user.first_name} {user.last_name}
          </CardHeader>
          <CardImg
            top
            width="100%"
            src={user.avatar}
            alt="Avatar del usuario"
          />
          <CardBody>
            <CardText><strong>Username:</strong> {user.username}</CardText>
            <CardText><strong>Email:</strong> {user.email}</CardText>
            <CardText><strong>Teléfono:</strong> {user.phone_number}</CardText>
            <CardText><strong>Género:</strong> {user.gender}</CardText>
            <CardText><strong>Ocupación:</strong> {user.employment.title}</CardText>
            <CardText><strong>Habilidad clave:</strong> {user.employment.key_skill}</CardText>
            <CardText><strong>Dirección:</strong> {user.address.street_address}, {user.address.city}, {user.address.state}, {user.address.country}</CardText>
            <CardText><strong>Fecha de nacimiento:</strong> {user.date_of_birth}</CardText>
            <CardText><strong>Número de seguro social:</strong> {user.social_insurance_number}</CardText>
            <CardText><strong>Tarjeta de crédito:</strong> {user.credit_card.cc_number}</CardText>
          </CardBody>
          <CardFooter>
            <strong>Plan:</strong> {user.subscription.plan} // <strong>Estado:</strong> {user.subscription.status}
          </CardFooter>
        </Card>
      )}
    </div>
  );
};

export default Consulta;