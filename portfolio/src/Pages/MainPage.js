// MainPage.js
import React, { useState } from 'react';
import './MainPage.css';
import AboutMe from '../components/AboutMe/AboutMe';
import Skills from '../components/Skills/Skills';
import Contact from '../components/Contact/Contact';
import Proyects from '../components/Proyects/Proyects';
import n_t from '../assets/images/n_t.png';
import HomePage from '../components/HomePage/HomePage';

const MainPage = () => {
  const [section, setSection] = useState(0);

  const pages = [
    'about Me',
    'skills',
    'owlNight',
    'sala virtual',
    'dulce con maria'
  ];

  const renderSection = () => {
    switch (section) {
      case 0:
        return <HomePage />;
      case 1:
        return <AboutMe />;
      case 2:
        return <Skills />;
      case 3:
        return <Proyects />;
      case 4:
        return <Contact />;
      default:
        return <HomePage />;
    }
  };

  const getClassNames = () => {
    let classNames = 'principal-section';
    if (section === 0 || section === 1) {
      classNames += ' principal-section--bordered';
    }
    return classNames;
  };

  const handleSectionChange = (index) => {
    setSection(index);
  };
  return (
    <div className='main-page'>

      {/* CABECERA PÁGINA */}
      <header className='header__section'>
        <div className='header__logo'>
          <img className='n_t--logo' alt='logo' src={n_t}></img>
        </div>
        <div className='header__contact'>
          <h4 className='contact__h4'>//FULL STACK developer</h4>
          <h4 className='contact__h4'> - </h4>
          <h4 className='contact__h4'>(nerea.trebol@gmail.com)</h4>
        </div>
        <div className='header__info'>
          <h4 className='info__h4'>Madrid Based</h4>
        </div>
      </header>

      {/* RENDERIZADO DE EL CONTENIDO PRINCIPAL */}
      <div className='content__section'>
        {renderSection()}
      </div>
      {/* BARRA DE NAVEGACIÓN */}
      <nav className='nav__section'>
        <a className='nav__text' href="#about" onClick={() => handleSectionChange(1)}>
          <span>about</span>
        </a>
        <a className='nav__text' href="#skills" onClick={() => handleSectionChange(2)}>
          <span>skills</span>
        </a>
        <a className='nav__text' href="#projects" onClick={() => handleSectionChange(3)}>
          <span>projects</span>
        </a>
        <a className='nav__text' href="#contact" onClick={() => handleSectionChange(4)}>
          <span>contact</span>
        </a>
      </nav>

    </div>
  );
};

export default MainPage;
