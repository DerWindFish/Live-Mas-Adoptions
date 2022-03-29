import './Styling/App.css'
import Nav from './components/Nav'
import Pets from './components/Pets'
import Home from './components/Home'
import Volunteers from './components/Volunteers'
import { Routes, Route} from 'react-router-dom'
import PetsDetails from "./components/PetsDetails";
// import axios from 'axios'
// import {useState, useEffect } from 'react'
// const BASE_URL = 'localhost:3001/api'


function App() {


  return (
    <div>
      <header>
        <Nav />
      </header>
      <main>
        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='pets' element={ <Pets /> } />
          <Route path='pets/:id' element={ <PetsDetails />} />
          <Route path='volunteers' element={ <Volunteers />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
