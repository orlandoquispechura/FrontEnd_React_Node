import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

// const URL = "http://localhost:3000/usuarios/";
const URL = "https://backapiusers.sistemapossosa.store/usuarios/";



const AddUser = () => {
  const navegar = useNavigate();
  const [cedula, setCedula] = useState("");
  const [nombre, setNombre] = useState("");
  const [primerApellido, setPrimerApellido] = useState("");
  const [segundoApellido, setSegundoApellido] = useState("");
  const [fechaNac, setFechaNac] = useState("");

  const addUsers = async (e) => {
    e.preventDefault();
    await axios.post(`${URL}`, {
      cedula_identidad: cedula,
      nombre: nombre,
      primer_apellido: primerApellido,
      segundo_apellido: segundoApellido,
      fecha_nacimiento: fechaNac,
    });
    navegar("/usuarios");
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 m-auto">
          <div className="card mt-5">
            <div className="card-header">
              <h1>Nuevo Usuario</h1>
            </div>
            <div className="card-body">
              <form onSubmit={addUsers}>
                <div className="form-group mb-3">
                  <label htmlFor="cedula_identidad">Cedula</label>
                  <input
                    required
                    autoFocus
                    type="text"
                    name="cedula_identidad"
                    id="cedula_identidad"
                    className="form-control"
                    onChange={(e) => {
                      setCedula(e.target.value);
                    }}
                    value={cedula}
                  />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="nombre">Nombre</label>
                  <input
                    required
                    type="text"
                    name="nombre"
                    id="nombre"
                    className="form-control"
                    onChange={(e) => {
                      setNombre(e.target.value);
                    }}
                    value={nombre}
                  />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="primer_apellido">Primer apellido</label>
                  <input
                    required
                    type="text"
                    name="primer_apellido"
                    id="primer_apellido"
                    className="form-control"
                    onChange={(e) => {
                      setPrimerApellido(e.target.value);
                    }}
                    value={primerApellido}
                  />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="segundo_apellido">Segundo apellido</label>
                  <input
                    type="text"
                    name="segundo_apellido"
                    id="segundo_apellido"
                    className="form-control"
                    onChange={(e) => {
                      setSegundoApellido(e.target.value);
                    }}
                    value={segundoApellido}
                  />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="fecha_nacimiento">Fecha nacimiento</label>
                  <input
                    type="date"
                    name="fecha_nacimiento"
                    id="fecha_nacimiento"
                    className="form-control"
                    onChange={(e) => {
                      setFechaNac(e.target.value);
                    }}
                    value={fechaNac}
                  />
                </div>
                <div className="form-group mb-3">
                  <input
                    type="submit"
                    value="Registrar"
                    className="btn btn-success"
                  />{" "}
                  &nbsp;
                  <Link className="btn btn-secondary" to={"/usuarios"}>
                    Cancelar
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddUser;
