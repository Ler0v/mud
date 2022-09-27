import './App.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import {Navbar, Footer} from './components'
import {Inicio, Servicios, Contacto} from './containers/index'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path='/' element={<Inicio />}/>
        <Route  path='/servicios' element={<Servicios />}/>
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
