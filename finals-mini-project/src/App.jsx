
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Header from './Components/Header'
import { Footer } from './Components/Footer'
import Home from './Components/home'
import About from './Components/About'
import Contact from './Components/Contact'
import Products from './Components/Products'

function App() {
  return (
    <>
    <Header></Header>
    <main>
    <Routes>
    <Route path='/' element = {<Home/>}/>
    <Route path='/About' element = {<About/>}/>
    <Route path='/Contact' element = {<Contact/>}/>
    <Route path='/Products' element = {<Products/>}/>
    </Routes>
    </main>
    <Footer></Footer>
    </>
  )
}

export default App
