import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navegacion } from './components/Navegacion';
import { Menu } from './components/Menu';
import { About } from './components/About';

function App() {
  return (
    <Router>
      <Navegacion/>
      <Routes>
        <Route path='/' exact element = {<></>}/>
        <Route path='/contacts' exact element = {<Menu/>} />
        <Route path='/about' exact element = {<About/>}/>
      </Routes>          
    </Router>
  );
}

export default App;
