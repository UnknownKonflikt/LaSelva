import {useState} from 'react';
import PropTypes from 'prop-types';
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa';
import {PhotoData} from '../utils/PhotoData';

const ImageSlider = ({slides}) => {
    const [current, setCurrent] = useState(0);
    const length = slides.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }

    return (
        <section className="slider">
            <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
            <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
            {PhotoData.map((slide, index) => {
                return (
                    <div className={index === current ? 'slide active' : 'slide'} key={index}>
                        {index === current && (
                            <img src={slide.image} alt="event image" className="image" />
                        )}
                    </div>
                );
            })}
        </section>
    );
}
ImageSlider.propTypes = {
    slides: PropTypes.array.isRequired
};

export default ImageSlider;

