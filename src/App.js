import React from 'react'
import Home from './routes/home/home.component'
import { Routes, Route } from 'react-router-dom'
import Navigation from './components/navigation-bar/navigation.component'
// import SignIn from './routes/signin/signin.component'
import SignUpForm from './components/signon/signon.component'

const Shop = () => {
  return (
    <div>shop</div>
  )
}

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation/>}>
        <Route index element={<Home/>}/>
        <Route path="shop" element={<Shop/>}/>
        <Route path="signin" element={<SignUpForm/>}/>
      </Route>
    </Routes>
  )
} 

export default App
