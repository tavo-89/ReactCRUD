import CrudApp from "./components/CrudApp";
import CrudApi from "./components/CrudApi";
import Songsearch from "./components/SongSearch";
import "./App.css"
import Selectsanidados from "./components/SelectsAnidados";
import Contactform from "./components/ContactForm";


function App() {
  return (
    <div>
    <h1 className="titulo">Ejercicios con React</h1>
    <Contactform/>
    <hr/>
    <Selectsanidados/>
    <hr/>
    <CrudApi/>
    <hr/>
    <CrudApp/>
    <hr/>
    <Songsearch/>
    </div>
  );
}

export default App;
