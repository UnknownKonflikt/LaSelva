import { useState } from 'react';
import PhotoData from './PhotoData'; // Adjust this based on where your PhotoData.js is located
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

const PhotoGallery = () => {
  // Set up state for the current image
  const [current, setCurrent] = useState(0);
  const length = PhotoData.length;

  // Function to move to the next image
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  // Function to move to the previous image
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <section id="gallery" className="container">
    <section className="photo-gallery">
      {/* Left Arrow for previous slide */}
      <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />

      {/* Display the current slide image */}
      <img src={PhotoData[current].image} alt="Travel" className="carousel-image" />

      {/* Right Arrow for next slide */}
      <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
    </section>
    </section>
  );
};

export default PhotoGallery;
