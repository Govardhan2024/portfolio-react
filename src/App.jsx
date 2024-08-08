import About from "./Components/About/About"
import Contact from "./Components/Contact/Contact"
import Footer from "./Components/Footer/Footer"
import Hero from "./Components/Hero/Hero"
import Mywork from "./Components/Mywork/Mywork"
import Navbar from "./Components/Navbar/Navbar"
import Service from "./Components/Service/Service"


const App = () => {
  return (
    <div>
      <Navbar/>
     
      <Hero/>
  
       <div id="About">
      <About/>
      </div>
      <div id="Sevices">
      <Service/>
      </div>
      <div id="portfolio">
      <Mywork/>
      </div>
      <div id="Contact">
      <Contact/>
      </div>
      <Footer/>
    </div>
  )
}

export default App
