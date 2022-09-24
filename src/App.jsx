import './App.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Navbar/Footer/Footer';
import Inicio from './components/Navbar/Paginas/Inicio';
import Contacto from './components/Navbar/Paginas/Contacto';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path='/' element={<Inicio />}/>
        <Route />
        <Route />
        <Route />
        <Route path='/contacto' element={<Contacto />}/>
      </Routes>

      <Footer />

      </BrowserRouter>
    </div>
  );
}

export default App;
