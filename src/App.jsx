
import './App.css';
import Home from './AuthComponent/Home';
import Login from './AuthComponent/Login';
import Signup from './AuthComponent/Signup';
import { Routes, Route } from 'react-router-dom';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/home' element={<Home />} />
      </Routes>
            
    </>
  )
}


export default App
