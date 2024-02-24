import { useState } from 'react';
import '../assets/slider.css'; // Import CSS for styling

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    'https://res.cloudinary.com/dtt0bvqqw/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1708709142/image1_irfphp.jpg?_s=public-apps',
    'https://res.cloudinary.com/dtt0bvqqw/image/upload/v1708709141/image2_cvdsgy.jpg',
    'https://res.cloudinary.com/dtt0bvqqw/image/upload/v1708709141/image3_lqy0bz.jpg'
    
  ];
  

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === images.length - 1 ? 0 : prevSlide + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? images.length - 1 : prevSlide - 1));
  };

  return (
    <div className="slider">
      <button onClick={prevSlide} className="prev">&#10094;</button>
      <button onClick={nextSlide} className="next">&#10095;</button>
      <div className="slide-container">
        {images.map((image, index) => (
          <div
            key={index}
            className={index === currentSlide ? 'slide active' : 'slide'}
            style={{ backgroundImage: `url(${image})` }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Slider;