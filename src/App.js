import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './comnponents/Navbar';
import Camisetas from './pages/Camisetas';
import Campeonatos from './pages/Campeonatos';
import BarraBrava from './pages/BarraBrava';
import Historia from './pages/Historia';
import DatosImportantes from './pages/DatosImportantes';
import "./App.css"
import Inicio from './pages/Inicio';

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/Inicio" element={<Inicio />} />
      <Route path='/camisetas' element={<Camisetas />} />
      <Route path='/campeonatos' element={<Campeonatos />} />
      <Route path='/barra-brava' element={<BarraBrava />} />
      <Route path='/historia' element={<Historia />} />
      <Route path='/datos-importantes' element={<DatosImportantes />} />
    </Routes>
  </Router>
);

export default App;


