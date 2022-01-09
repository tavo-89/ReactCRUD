import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"
import CrudApp from "./components/CrudApp";
import CrudApi from "./components/CrudApi";
import Songsearch from "./components/SongSearch";
import Selectsanidados from "./components/SelectsAnidados";
import Contactform from "./components/ContactForm";
import Contador from "./components/Contador"
import StarWarsApi from "./components/StarWarsApi";
import ContadorReducer from './Components2/ContadorReducer';
import ContadorReducer2 from './Components2/ContadorReducer2';
import Shoopingcart from './Components2/ShoopingCart';
/* import Modals from "./components/Modals" */


function App() {
  return (
    <div>
    <h1 className="titulo">Ejercicios con React</h1>
    {/* <Modals/>
    <hr/> */}
    <StarWarsApi />
    <hr/>
    <Contactform/>
    <hr/>
    <Selectsanidados/>
    <hr/>
    <CrudApi/>
    <hr/>
    <CrudApp/>
    <hr/>
    <Songsearch/>
    <hr/>
    <Contador/>
    <hr/>
    <hr/>
    <h1>Reducers</h1>
    <ContadorReducer/>
    <hr/>
    <ContadorReducer2/>
    <hr/>
    <Shoopingcart/>
    </div>
  );
}

export default App;
