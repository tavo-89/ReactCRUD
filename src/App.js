import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"
import CrudApp from "./components/CrudApp";
import CrudApi from "./components/CrudApi";
import Songsearch from "./components/SongSearch";
import Selectsanidados from "./components/SelectsAnidados";
import Contactform from "./components/ContactForm";
import Contador from "./components/Contador"
import Modals from './components/Modals';
import ContadorReducer from './Components_3/ContadorReducer';
import ContadorReducer2 from './Components_3/ContadorReducer2';
import Shoopingcart from './Components_3/ShoopingCart';
import ConceptosBasicos from './components_2/ConceptosBasicos';
import CrudApiRutas from './components_2/CrudApiRutas';



function App() {
  return (
    <div>
    <h1 className="titulo">Rutas</h1>
    {/* <ConceptosBasicos/> */}
    <hr/>
    <CrudApiRutas/>
    <hr/>
    <hr/>
    <h1 className="titulo">Ejercicios con React</h1>
    <Modals/>
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
    <h1 className="titulo">Reducers</h1>
    <ContadorReducer/>
    <hr/>
    <ContadorReducer2/>
    <hr/>
    <Shoopingcart/>
    </div>
  );
}

export default App;
