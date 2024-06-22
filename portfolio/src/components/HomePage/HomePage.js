import React, { useState, useEffect } from 'react';
import './HomePage.css';
import laptop from '../../assets/images/laptop.png';
import dulceConMaria from '../../assets/images/n_t.png';
import owlNightExtra from '../../assets/images/mookupIphone.png'; // Nueva imagen para OwlNight
import arrowIcon from '../../assets/images/arrow.png';
import mobileSV1 from '../../assets/images/mobileSV1.png';
import mobileSV2 from '../../assets/images/mobileSV2.png';
import mobileSV3 from '../../assets/images/mobileSV3.png';
import mobileSV4 from '../../assets/images/mobileSV4.png';

const images = [
  { src: laptop, title: 'OwlNight', className: 'style-owl-night', extraImage: owlNightExtra },
  { src: [mobileSV1, mobileSV2, mobileSV3, mobileSV4], title: 'Sala Virtual', className: 'style-sala-virtual' },
  { src: dulceConMaria, title: 'Dulce con Maria', className: 'style-dulce-con-maria' },
];

const HomePage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSeeMoreClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000000); // Cambiar cada 5 segundos
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`home-box__section ${images[currentIndex].className}`}>
      <h1 className='home__heading'>
        {images[currentIndex].title}
      </h1>
      {Array.isArray(images[currentIndex].src) ? (
        images[currentIndex].src.map((image, index) => (
          <img
            key={index}
            className='home__image'
            src={image}
            alt={images[currentIndex].title}
          />
        ))
      ) : (
        <img
          className='home__image'
          src={images[currentIndex].src}
          alt={images[currentIndex].title}
        />
      )}
      {images[currentIndex].extraImage && (
        <img
          className='extra__image'
          src={images[currentIndex].extraImage}
          alt="Extra OwlNight"
        />
      )}
      <button className='see-more__button' onClick={handleSeeMoreClick}>
        <p className='see-more__text'>See more</p>
        <img className='see-more__arrow' src={arrowIcon} alt="Arrow Icon" />
      </button>
    </div>
  );
};

export default HomePage;