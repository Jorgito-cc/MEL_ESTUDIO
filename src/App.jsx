
import './App.css'
import { CategoryCards } from './presentation/components/CategoryCards'
import { Hero } from './presentation/components/Hero'
import { Navbar } from './presentation/layout/Navbar'
import { About } from './presentation/pages/Home/About'
import { Servicios } from './presentation/pages/Home/Servicios'
import { SobreMi } from './presentation/pages/Home/SobreMi'

function App() {

  return (
    <>
    <Navbar/>
    <Hero/>
    <CategoryCards/>
    <Servicios/>
    <SobreMi/>
    </>
  )
}

export default App
