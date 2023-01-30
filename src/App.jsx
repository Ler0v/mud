import './App.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import {Navbar, Footer} from './components'
import {Inicio, Servicios, Contacto, SobreNosotros, Trabajos, Productos} from './containers/index.js'
import Academia from './containers/Carreras/Academia/Academia';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path='/' element={<Inicio />}/>
        <Route  path='/servicios' element={<Servicios />}/>
        <Route path='/trabajos' element={<Trabajos />}/>
        <Route path='/sobrenosotros' element={<SobreNosotros />}/>
        <Route path='/productos' element={<Productos />}/>
        <Route path='/academia' element={<Academia />}/>
        <Route path='/contacto' element={<Contacto />}/>
      </Routes>

      <Footer />

      </BrowserRouter>
    </div>
  );
}

export default App;
