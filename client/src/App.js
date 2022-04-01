import './Styling/App.css'
import Nav from './components/Nav'
import Pets from './components/Pets'
import Home from './components/Home'
import Volunteers from './components/Volunteers'
import { Routes, Route} from 'react-router-dom'


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
          <Route path='volunteers' element={ <Volunteers />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
