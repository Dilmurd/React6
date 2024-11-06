import { Link, Route, Routes } from 'react-router-dom'
import './App.scss'
import Header from './components/Header/Header'
import Top from "./components/Top/Top"
import Home from "./pages/Home/Home"
import About from "./pages/About/About"
import Contact from "./pages/Contact/Contact"
import Footer from './components/Footer/Footer'
import Blog from './components/Blog/Blog'
import Garant from './pages/Garant/Garant'
import Error from './pages/Error/Error'
import Shipping from "./pages/Shipping/Shipping"

function App() {
  return (
    <>
    <Top/>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/blog' element={<Blog/>}/>
      <Route path='/garant' element={<Garant/>}/>
      <Route path='/shipping' element={<Shipping/>}/>
      <Route path='*' element={<Error/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App
