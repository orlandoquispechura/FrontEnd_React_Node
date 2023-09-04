import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// const URL = "http://localhost:3000/usuarios/";

const URL = "https://backapiusers.sistemapossosa.store/usuarios/";


const Promedio = () => {
  const [promedio, setPromedio] = useState([]);

  useEffect(() => {
    getPromedio();
  }, []);

  const getPromedio = async () => {
    const response = await axios.get(`${URL}promedio_edad`);
    setPromedio(response.data);
    console.log(response.data);
  };
  return (
    <div className="container">
      <div className="row">
        
        <div className="col-md-8 m-auto  mt-5">
          <div className="form-group mb-2">
          <Link className="btn btn-info" to={"/usuarios"}>
            Regresar{" "}
          </Link>
        </div>
          <div className="card">
            <div className="card-header">
              <h1>Promedio de edad de los usuarios</h1>
            </div>
            <div className="card-body">
              {
                <div>
                  <h2>
                    {" "}
                    <span className="text-success">Promedio Edad:</span>{" "}
                    {promedio.promedioedad}
                  </h2>
                </div>
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Promedio;
