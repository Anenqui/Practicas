import React, { useState } from 'react';
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Row,
  Col,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from 'reactstrap';
import Titulo from '../components/Titulo';

const FormularioRegistro = () => {
  const [form, setForm] = useState({
    nombre: '',
    apellido: '',
    email: '',
    contraseña: '',
    edad: '',
    genero: '',
    rol: '',
    opciones: {
      casado: false,
      discapacitado: false,
      extranjero: false
    },
    notas: '',
    fechaRegistro: ''
  });

  const [modalOpen, setModalOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      opciones: {
        ...prev.opciones,
        [name]: checked
      }
    }));
  };

  const handleReset = () => {
    setForm({
      nombre: '',
      apellido: '',
      email: '',
      contraseña: '',
      edad: '',
      genero: '',
      rol: '',
      opciones: {
        casado: false,
        discapacitado: false,
        extranjero: false
      },
      notas: '',
      fechaRegistro: ''
    });
  };

  return (
    <div className="p-5">
      <Titulo
        texto="Formulario de Registro"
        fuente="font-sans"
        tamaño="text-3xl"
        color="text-indigo-600"
      />
      <Form>
        <Row>
          <Col md={6}>
            <FormGroup>
              <Label for="nombre">Nombre</Label>
              <Input
                type="text"
                name="nombre"
                id="nombre"
                placeholder="Ingresa tu nombre"
                value={form.nombre}
                onChange={handleChange}
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="apellido">Apellido</Label>
              <Input
                type="text"
                name="apellido"
                id="apellido"
                placeholder="Ingresa tu apellido"
                value={form.apellido}
                onChange={handleChange}
              />
            </FormGroup>
          </Col>
        </Row>

        <FormGroup>
          <Label for="email">Email</Label>
          <Input
            type="email"
            name="email"
            id="email"
            placeholder="correo@example.com"
            value={form.email}
            onChange={handleChange}
          />
        </FormGroup>

        <FormGroup>
          <Label for="contraseña">Contraseña</Label>
          <Input
            type="password"
            name="contraseña"
            id="contraseña"
            placeholder="********"
            value={form.contraseña}
            onChange={handleChange}
          />
        </FormGroup>

        <FormGroup>
          <Label for="edad">Edad</Label>
          <Input
            type="number"
            name="edad"
            id="edad"
            value={form.edad}
            onChange={handleChange}
          />
        </FormGroup>

        <FormGroup tag="fieldset">
          <Label>Género</Label>
          <FormGroup check>
            <Input
              type="radio"
              name="genero"
              value="masculino"
              checked={form.genero === 'masculino'}
              onChange={handleChange}
            />
            <Label check>Masculino</Label>
          </FormGroup>
          <FormGroup check>
            <Input
              type="radio"
              name="genero"
              value="femenino"
              checked={form.genero === 'femenino'}
              onChange={handleChange}
            />
            <Label check>Femenino</Label>
          </FormGroup>
        </FormGroup>

        <FormGroup>
          <Label for="rol">Rol</Label>
          <Input
            type="select"
            name="rol"
            id="rol"
            value={form.rol}
            onChange={handleChange}
          >
            <option value="">Selecciona un rol</option>
            <option value="admin">Administrador</option>
            <option value="user">Usuario</option>
            <option value="editor">Editor</option>
          </Input>
        </FormGroup>

        <FormGroup check>
          <Input
            type="checkbox"
            name="casado"
            id="opciones1"
            checked={form.opciones.casado}
            onChange={handleCheckboxChange}
          />
          <Label check for="opciones1">Casado</Label>
        </FormGroup>

        <FormGroup check>
          <Input
            type="checkbox"
            name="discapacitado"
            id="opciones2"
            checked={form.opciones.discapacitado}
            onChange={handleCheckboxChange}
          />
          <Label check for="opciones2">Discapacitado</Label>
        </FormGroup>

        <FormGroup check>
          <Input
            type="checkbox"
            name="extranjero"
            id="opciones3"
            checked={form.opciones.extranjero}
            onChange={handleCheckboxChange}
          />
          <Label check for="opciones3">Extranjero</Label>
        </FormGroup>

        <FormGroup className="mt-3">
          <Label for="notas">Notas</Label>
          <Input
            type="textarea"
            name="notas"
            id="notas"
            value={form.notas}
            onChange={handleChange}
          />
        </FormGroup>

        <FormGroup>
          <Label for="fechaRegistro">Fecha de Registro</Label>
          <Input
            type="date"
            name="fechaRegistro"
            id="fechaRegistro"
            value={form.fechaRegistro}
            onChange={handleChange}
          />
        </FormGroup>

        <div className="mt-4 d-flex gap-3">
          <Button color="primary" onClick={() => setModalOpen(true)}>Mostrar</Button>
          <Button color="secondary" onClick={handleReset}>Reiniciar</Button>
        </div>
      </Form>

      {/* Modal de datos */}
      <Modal isOpen={modalOpen} toggle={() => setModalOpen(!modalOpen)}>
        <ModalHeader toggle={() => setModalOpen(!modalOpen)}>Datos del Formulario</ModalHeader>
        <ModalBody>
          <p><strong>Nombre:</strong> {form.nombre}</p>
          <p><strong>Apellido:</strong> {form.apellido}</p>
          <p><strong>Email:</strong> {form.email}</p>
          <p><strong>Edad:</strong> {form.edad}</p>
          <p><strong>Género:</strong> {form.genero}</p>
          <p><strong>Rol:</strong> {form.rol}</p>
          <p><strong>Opciones:</strong> {Object.entries(form.opciones).filter(([_, v]) => v).map(([k]) => k).join(', ') || 'Ninguna'}</p>
          <p><strong>Notas:</strong> {form.notas}</p>
          <p><strong>Fecha de Registro:</strong> {form.fechaRegistro}</p>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={() => setModalOpen(false)}>Cerrar</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default FormularioRegistro;
