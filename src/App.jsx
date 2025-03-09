//import React from 'react';
import './assets/App.css';
import NavBar from './Components/NavBarSection';
import HeroSection from './Components/HeroSection';
import ResidentMap from './Components/Residents.jsx/ResidentMap.jsx';
import AboutSection from './Components/AboutSection';
import ImageSlider from './Components/ImageSlider';
import { PhotoData } from './utils/PhotoData.jsx';
import CalendarComponent from './Components/Calendar';  // Updated Calendar
import ContactSection from './Components/ContactSection';
import Footer from './Components/Footer';
//import eventData from './utils/eventData'; // Your event data
//import eventCard from './Components/EventCard'; // Your EventCard component
//import './App.css';

function App() {
  return (
    <>
      <NavBar />
      <HeroSection />
      <ResidentMap />
      <AboutSection />
      <ImageSlider slides={PhotoData} />
      <CalendarComponent />
      <ContactSection />
      <Footer />
    </>
  );
}

export default App;
