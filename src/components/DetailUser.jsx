import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

// const URL = "http://localhost:3000/usuarios/";
const URL = "https://backapiusers.sistemapossosa.store/usuarios/";


 
const DetailUser = () => {
  const [id, setId] = useState(useParams().id);
  const [usuario, setUsuario] = useState([]);

  useEffect(() => {
    getUser();
  }, []);
  const getUser = async () => {
    const response = await axios.get(`${URL}${id}`);
    setUsuario(response.data);
    console.log(response.data);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8 m-auto mt-5">
          <div className="form-group mb-2">
            <Link to={"/usuarios"} className="btn btn-info">
              Regresar
            </Link>
          </div>
          <div className="card">
            <div className="card-header">
              <h1>Usuario: {usuario.nombre}</h1>
            </div>
            <div className="card-body">
            <h3><span className="text-success" >Cédula: </span>{usuario.cedula_identidad}</h3>
            <h3><span className="text-success" >Nombre: </span>{(usuario.nombre)}</h3>
            <h3><span className="text-success" >Apellidos: </span>{usuario.primer_apellido}{" "} {usuario.segundo_apellido}</h3>
            <h3><span className="text-success" >Fecha Nacimiento: </span>{new Date(usuario.fecha_nacimiento).toLocaleDateString()}</h3>
          </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default DetailUser;
