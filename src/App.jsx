import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Index from './componant/user/Index'
import Create from './componant/user/Create'
import Home from './componant/user/Home'
import Detials from './componant/user/Detials'
import Update from './componant/user/Update'

export default function App() {
  return (
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/index' element={<Index/>}/>
    <Route path='/create' element={<Create/>}/>
    <Route path='/details/:id' element={<Detials />} />
<Route path='/update/:update' element={<Update />} />


  </Routes>
  )
}
