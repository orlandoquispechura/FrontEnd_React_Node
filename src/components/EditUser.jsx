import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

// const URL = "http://localhost:3000/usuarios/";
const URL = "https://backapiusers.sistemapossosa.store/usuarios/";


const EditUser = () => {
  const navegar = useNavigate();
  const [id, setId] = useState(useParams().id);
  const [cedula_identidad, setCedula] = useState("");
  const [nombre, setNombre] = useState("");
  const [primer_apellido, setPrimerApellido] = useState("");
  const [segundo_apellido, setSegundoApellido] = useState("");
  const [fecha_nacimiento, setFechaNac] = useState("");

  useEffect(() => {
    getUser();
  }, []);
  const getUser = async () => {
    const response = await axios.get(`${URL}${id}`);
    const user = response.data;
    setCedula(user.cedula_identidad);
    setNombre(user.nombre);
    setPrimerApellido(user.primer_apellido);
    setSegundoApellido(user.segundo_apellido);
    setFechaNac(user.fecha_nacimiento);
  };

  const updateUser = async () => {
    await axios.put(`${URL}${id}`, {
      cedula_identidad: cedula_identidad,
      nombre: nombre,
      primer_apellido: primer_apellido,
      segundo_apellido: segundo_apellido,
      fecha_nacimiento: fecha_nacimiento,
    });
    navegar("/usuarios");
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 m-auto">
          <div className="card mt-5">
            <div className="card-header">Nuevo Usuario</div>
            <div className="card-body">
              <form>
                <div className="form-group mb-3">
                  <label htmlFor="cedula_identidad">Cedula</label>
                  <input
                  required
                    type="text"
                    name="cedula_identidad"
                    id="cedula_identidad"
                    className="form-control"
                    value={cedula_identidad}
                    onChange={(e) => setCedula(e.target.value)}
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
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
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
                    value={primer_apellido}
                    onChange={(e) => setPrimerApellido(e.target.value)}
                  />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="segundo_apellido">Segundo apellido</label>
                  <input
                    type="text"
                    name="segundo_apellido"
                    id="segundo_apellido"
                    className="form-control"
                    value={segundo_apellido}
                    onChange={(e) => setSegundoApellido(e.target.value)}
                  />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="fecha_nacimiento">Fecha nacimiento</label>
                  <input
                    type="date"
                    name="fecha_nacimiento"
                    id="fecha_nacimiento"
                    className="form-control"
                    value={fecha_nacimiento}
                    onChange={(e) => setFechaNac(e.target.value)}
                  />
                </div>
                <div className="form-group mb-3">
                  <button
                    type="button"
                    className="btn btn-success"
                    onClick={updateUser}
                  >
                    Actualizar
                  </button>{" "}
                  &nbsp;
                  <Link to={"/usuarios"} className="btn btn-secondary">
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

export default EditUser;
