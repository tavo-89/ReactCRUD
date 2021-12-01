import CrudApp from "./components/CrudApp";
import CrudApi from "./components/CrudApi";
import "./App.css"


function App() {
  return (
    <div>
    <h1 className="titulo">Ejercicios con React</h1>
    <CrudApi/>
    <hr/>
    <CrudApp/>
    </div>
  );
}

export default App;
