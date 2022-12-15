import firebase from './config/firebase';
import "firebase/auth"
import "./app.css";
import Form from "./components/Form/Form";
import Home from './components/Home/Home';
import SearchBar from './components/SearchBar/SearchBar';


function App() {

  return (
    <div className='App' >
      <h1>Listado de Empresas registradas</h1>
      <SearchBar />
      <Home />
    </div>
  );
}

export default App;
