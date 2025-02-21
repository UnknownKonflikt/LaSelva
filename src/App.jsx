
import '../src/assets/App.css'
import AboutSection from './Components/AboutSection'
import HeroSection from './Components/HeroSection'
import NavBar from './Components/NavBarSection'
import ResidentMap from './Components/Residents.jsx/ResidentMap.jsx'
import PhotoGallery from './Components/PhotoGallery'
import Events from './Components/Events'
import ContactSection from './Components/ContactSection'
import Footer from './Components/Footer'


function App() {

  return (
    <>
      <NavBar className="mb-4" />
      <HeroSection className="mb-4" />
      <ResidentMap className="mb-4" />
      <AboutSection className="mb-4" />
      <PhotoGallery className="mb-4" />
      <Events className="mb-4" />
      <ContactSection className="mb-4" />
      <Footer />


    </>
  )
}

export default App
