import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Route,Routes,BrowserRouter} from "react-router-dom"
import Home from './Components/Home'
import Register from './Components/Register'
import Login from './Components/Login'
import TodoDashboard from './Components/TodoDashboard'
function App() {
  const [count, setCount] = useState(0)
  
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/dashboard' element={<TodoDashboard></TodoDashboard>}></Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
