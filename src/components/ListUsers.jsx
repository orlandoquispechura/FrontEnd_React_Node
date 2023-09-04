import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

// const URL = "http://localhost:3000/usuarios/";
// 


const URL = "https://backapiusers.sistemapossosa.store/usuarios/";


const ListUsers = () => {
  const [users, setUsers] = useState([]);


  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    try {
      const response = await axios.get(URL);
      setUsers(response.data);
    } catch (error) {
      // console.log(error);
    }
  };
  const deleteUser = async (id)=>{
    const response = await axios.delete(`${URL}${id}`);
    console.log(response);
      getUsers();
  }

  return (
    <>
      <div className="container">
        <h1 className="mt-5 mb-3">Listado de Usuarios</h1>
        <Link to={`/usuarios/add`} className="btn btn-primary btn-sm">
          Nuevo Usuario
        </Link>{" "}
        &nbsp;
        <Link to={`/estado`} className="btn btn-warning  btn-sm">
          {" "}
          Ver estado
        </Link>{" "}
        &nbsp;
        <Link to={`/usuarios/promedio_edad`} className="btn btn-secondary btn-sm">
          Ver Promedio de edad
        </Link>
        <div className="card mt-1">
          <div className="card-body">
            <table className="table table-striped shadow bordered">
              <thead className="bg-dark text-white">
                <tr>
                  <th>CEDULA</th>
                  <th>NOMBRE</th>
                  <th>APELLIDOS</th>
                  <th>FECHA NAC</th>
                  <th>ACCIONES</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id}>
                    <td>{user.cedula_identidad}</td>
                    <td>{user.nombre}</td>
                    <td>
                      {user.primer_apellido} {user.segundo_apellido}
                    </td>
                    <td>{new Date(user.fecha_nacimiento).toLocaleDateString()}</td>
                    <td>
                      <Link to={'/usuarios/detalle/'+user.id} className="btn btn-primary btn-sm">Ver</Link> {" "}
                      <Link
                        to={"/usuarios/" + user.id}
                        className="btn btn-info btn-sm"
                      >
                        Edit
                      </Link>
                      {" "}
                      <button className="btn btn-danger btn-sm" onClick={ ()=>deleteUser(user.id)}>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListUsers;
