import React from 'react'
import Shop from './Pages/Shop/Shop'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CommonLayout from './Components/CommonLayout'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<CommonLayout/>}>
          <Route index element={<Shop/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
