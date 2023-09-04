import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListUsers from "../components/ListUsers";
import EditUser from "../components/EditUser";
import AddUser from "../components/AddUser";
import Status from "../components/Status";
import Promedio from "../components/Promedio";
import DetailUser from "../components/DetailUser";
const Rutas = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<ListUsers />} />
          <Route path="/usuarios" element={<ListUsers />} />
          <Route path="/usuarios/add" element={<AddUser />} />
          <Route path="/usuarios/:id" element={<EditUser />} />
          <Route path="/estado" element={<Status />} />
          <Route path="/usuarios/detalle/:id" element={ <DetailUser />} />
          <Route path="/usuarios/promedio_edad" element={<Promedio />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default Rutas;
