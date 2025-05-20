import React, { useState } from 'react';
import {
  Form, FormGroup, Label, Input, Button, Row, Col,
  Modal, ModalHeader, ModalBody, ModalFooter, Table, FormFeedback
} from 'reactstrap';
import Titulo from '../components/Titulo';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash,faEdit  } from '@fortawesome/free-solid-svg-icons';


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

const [validacion, setValidacion] = useState({});
const [registros, setRegistros] = useState([]);
const [modalOpen, setModalOpen] = useState(false);
const [modalEditarOpen, setModalEditarOpen] = useState(false);
const [registroEditar, setRegistroEditar] = useState({});
const [indiceEditar, setIndiceEditar] = useState(null);

  const abrirModalEditar = (index) => {
  setRegistroEditar(registros[index]);
  setIndiceEditar(index);
  setModalEditarOpen(true);
};
const handleActualizarRegistro = () => {
  const nuevosRegistros = [...registros];
  nuevosRegistros[indiceEditar] = registroEditar;
  setRegistros(nuevosRegistros);
  setModalEditarOpen(false);
};


  const hoy = new Date().toISOString().split('T')[0];

  const validarCampo = (nombre, valor) => {
    switch (nombre) {
      case 'nombre':
      case 'apellido':
        return /^[A-Za-zÁÉÍÓÚÑáéíóúñ\s]+$/.test(valor);
      case 'email':
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(valor);
      case 'edad':
        return /^[1-9][0-9]?$|^100$/.test(valor);
      case 'fechaRegistro':
        return valor >= hoy;
      default:
        return true;
    }
  };

  const handleEliminarRegistro = (index) => {
  const nuevosRegistros = registros.filter((_, i) => i !== index);
  setRegistros(nuevosRegistros);
    };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const nuevoValor = type === 'checkbox' ? checked : value;

    setForm((prev) => ({
      ...prev,
      [name]: nuevoValor
    }));

    if (name in validacion) {
      setValidacion((prev) => ({
        ...prev,
        [name]: validarCampo(name, nuevoValor)
      }));
    }
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
    setValidacion({});
  };

  const handleGuardar = () => {
    const campos = ['nombre', 'apellido', 'email', 'edad', 'fechaRegistro'];
    const nuevaValidacion = {};
    let esValido = true;

    campos.forEach((campo) => {
      const valido = validarCampo(campo, form[campo]);
      nuevaValidacion[campo] = valido;
      if (!valido) esValido = false;
    });

    setValidacion(nuevaValidacion);

    if (esValido) {
      setRegistros((prev) => [...prev, form]);
      handleReset();
    }
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
                valid={validacion.nombre === true}
                invalid={validacion.nombre === false}
              />
              <FormFeedback>Este campo solo acepta letras.</FormFeedback>
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
                valid={validacion.apellido === true}
                invalid={validacion.apellido === false}
              />
              <FormFeedback>Este campo solo acepta letras.</FormFeedback>
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
            valid={validacion.email === true}
            invalid={validacion.email === false}
          />
          <FormFeedback>Debe tener formato de correo electrónico válido.</FormFeedback>
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
            valid={validacion.edad === true}
            invalid={validacion.edad === false}
          />
          <FormFeedback>Solo se permiten números entre 1 y 100.</FormFeedback>
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
            min={hoy}
            onChange={handleChange}
            valid={validacion.fechaRegistro === true}
            invalid={validacion.fechaRegistro === false}
          />
          <FormFeedback>Solo se aceptan fechas a partir de hoy.</FormFeedback>
        </FormGroup>

        <div className="mt-4 d-flex gap-3">
          <Button color="success" onClick={handleGuardar}>Guardar</Button>
          <Button color="secondary" onClick={handleReset}>Reiniciar</Button>
          <Button color="info" onClick={() => setModalOpen(true)}>Mostrar Modal</Button>
        </div>
      </Form>

      {/* Tabla  */}
        {registros.length > 0 && (
        <div className="mt-5">
            <h4>Registros</h4>
            <Table striped>
            <thead>
                <tr>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Email</th>
                <th>Edad</th>
                <th>Género</th>
                <th>Rol</th>
                <th>Fecha</th>
                <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {registros.map((reg, index) => (
                <tr key={index}>
                    <td>{reg.nombre}</td>
                    <td>{reg.apellido}</td>
                    <td>{reg.email}</td>
                    <td>{reg.edad}</td>
                    <td>{reg.genero}</td>
                    <td>{reg.rol}</td>
                    <td>{reg.fechaRegistro}</td>
                    <td>
                        <Button color="warning"size="sm"className="me-2"onClick={() => abrirModalEditar(index)}>
                        <FontAwesomeIcon icon={faEdit} />
                        </Button>
                    <Button color="danger" size="sm" onClick={() => handleEliminarRegistro(index)}>
                        <FontAwesomeIcon icon={faTrash} />
                    </Button>
                    </td>
                </tr>
                ))}
            </tbody>
            </Table>
        </div>
        )}

      {/* Modal */}
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

      {/* Modal  pero de la edicion*/}
      <Modal isOpen={modalEditarOpen} toggle={() => setModalEditarOpen(false)}>
        <ModalHeader toggle={() => setModalEditarOpen(false)}>Editar Registro</ModalHeader>
        <ModalBody>
            <FormGroup>
            <Label for="nombreEditar">Nombre</Label>
            <Input
                id="nombreEditar"
                name="nombre"
                value={registroEditar.nombre || ''}
                onChange={(e) =>
                setRegistroEditar({ ...registroEditar, nombre: e.target.value })
                }/>
            </FormGroup>
            <FormGroup>
            <Label for="apellidoEditar">Apellido</Label>
            <Input
                id="apellidoEditar"
                name="apellido"
                value={registroEditar.apellido || ''}
                onChange={(e) =>
                setRegistroEditar({ ...registroEditar, apellido: e.target.value })
                }/>
            </FormGroup>
            <FormGroup>
            <Label for="edadEditar">Edad</Label>
            <Input
                id="edadEditar"
                name="edad"
                value={registroEditar.edad || ''}
                onChange={(e) =>
                setRegistroEditar({ ...registroEditar, edad: e.target.value })
                }/>
            </FormGroup>
            <FormGroup>
            <Label for="emailEditar">Email</Label>
            <Input
                id="emailEditar"
                name="email"
                value={registroEditar.email || ''}
                onChange={(e) =>
                setRegistroEditar({ ...registroEditar, email: e.target.value })
                }/>
            </FormGroup>
        </ModalBody>
        <ModalFooter>
            <Button color="primary" onClick={handleActualizarRegistro}>
            Guardar Cambios
            </Button>
            <Button color="secondary" onClick={() => setModalEditarOpen(false)}>
            Cancelar
            </Button>
        </ModalFooter>
        </Modal>

    </div>
  );
};

export default FormularioRegistro;
