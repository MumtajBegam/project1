import { useState } from 'react'
import Signup from './Components/Signup'
import './Components/Signup.css'
import Login from './Components/Login'
import './Components/Login.css'
import Pwd from './Components/Pwd'
import './Components/Pwd.css'
import Home from './Components/Home'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/pwd" element={<Pwd/>} />
        <Route path="/signup" element={<Signup/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App



