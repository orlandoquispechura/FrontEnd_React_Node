import "./App.css";
import ListUsers from "./components/ListUsers";
import Rutas from "./routers/Rutas";

function App() {
  return (
    <>
      <Rutas>
        <ListUsers />
      </Rutas>
    </>
  );
}

export default App;
