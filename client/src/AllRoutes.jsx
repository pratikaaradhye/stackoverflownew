import React from 'react'
import {Routes , Route} from 'react-router-dom'
import Home from './pages/Home/Home'
import Auth from './pages/Auth/Auth'
import Questions from './pages/Questions/Questions'
import AskQuestion from './pages/AskQuestion/AskQuestion'
import DisplayQuestions from './pages/Questions/DisplayQuestions'
const AllRoutes = () => {
  return (
    <Routes>
     <Route path='/' element={<Home/>}/>
     <Route path='/Auth' element={<Auth/>}/>
     <Route path='/Questions' element={<Questions/>}/>
     <Route path='/AskQuestion' element={<AskQuestion/>}/>
     <Route path='/Questions/:id' element={<DisplayQuestions/>}/>
    </Routes>
  )
}

export default AllRoutes