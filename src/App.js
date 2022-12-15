import firebase from './config/firebase';
import "firebase/auth"
import "./app.css";
import Form from "./components/Form/Form";
import Home from './components/Home/Home';
import SearchBar from './components/SearchBar/SearchBar';
import Header from './components/Header/Header';


function App() {

  return (
    <div className='App' >
      <Header />
      <SearchBar />
      <Home />
    </div>
  );
}

export default App;
