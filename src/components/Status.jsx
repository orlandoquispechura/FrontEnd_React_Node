import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// const URL = "http://localhost:3000/estado/";
const URL = "https://backapiusers.sistemapossosa.store/estado";
 



const Status = () => {
  const [status, setStatus] = useState([]);

  useEffect(() => {
    getStatus();
  }, []);

  const getStatus = async () => {
    const response = await axios.get(URL);
    setStatus(response.data);
    console.log(response.data);
  };
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto  mt-5">
          <div className="form-group mb-2">
               <Link className="btn btn-info" to={'/usuarios'} >Regresar </Link>
              </div>
            <div className="card">
              <div className="card-header">
                <h1>Estado del sistema</h1>
              </div>
              <div className="card-body">
                {
                  <div>
                    <h2>
                      {" "}
                      <span className="text-success">Name System:</span>{" "}
                      {status.nameSystem}
                    </h2>
                    <h2>
                      {" "}
                      <span className="text-success">Versión:</span>{" "}
                      {status.version}
                    </h2>
                    <h2>
                      {" "}
                      <span className="text-success">Developer:</span>
                      {status.developer}
                    </h2>
                    <h2>
                      {" "}
                      <span className="text-success">Email:</span>{" "}
                      {status.email}
                    </h2>
                  </div>
                }
              </div>
            </div>
           
          </div>
        </div>
      </div>
    </>
  );
};

export default Status;
