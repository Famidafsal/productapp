import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Addproduct from './components/Addproduct'
import Viewproduct from './components/Viewproduct'
import { Route,Routes } from 'react-router-dom'

function App() {
  

  return (
    
      <div>
       <Navbar/>
       <Routes>
       <Route path='/' element={<Viewproduct/>}></Route>
       <Route path='/Addproducts' element={<Addproduct/>}></Route>

       </Routes>
      </div>
     )
}

export default App
