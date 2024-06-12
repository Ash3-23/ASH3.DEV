// MainPage.js
import React, { useState } from 'react';
import './MainPage.css';
import AboutMe from '../components/AboutMe/AboutMe';
import Skills from '../components/Skills/Skills';
import OwlNight from '../components/OwlNight/OwlNight';
import DulceConMaria from '../components/DulceConMaria/DulceConMaria';
import SalaVirtual from '../components/SalaVirtual/SalaVirtual';

const MainPage = () => {
  const [section, setSection] = useState(0);

  const pages = [
    'About Me',
    'Skills',
    'OwlNight',
    'Sala Virtual',
    'Dulce con Maria'
  ];

  const renderSection = () => {
    switch (section) {
      case 0:
        return <AboutMe />;
      case 1:
        return <Skills />;
      case 2:
        return <OwlNight />;
      case 3:
        return <SalaVirtual />;
      case 4:
        return <DulceConMaria />;
      default:
        return <AboutMe />;
    }
  };

  const handleSectionChange = (index) => {
    setSection(index);
  };
  return (
    <div className='main-page'>
      <div className='border-box__section'>
        <div className="navbar-section">
          <nav className='navbar__actions'>
            contact
          </nav>
        </div>
        <div className="principal-section">
          <div className='first-content__section'>
            {(section === 0 || section === 1) ? (
              <>
                <h2 className='content__title'>Nerea Trébol Crespo</h2>
                <h4 className='content__subtitle'>{pages[section]}</h4>
              </>
            ) : (
              <h1 className='content__title'>{pages[section]}</h1>
            )}
            {renderSection()}
          </div>
        </div>
        <div className="footer-section">
          <div className='action-content__section'>
            <button className='action__about-me' onClick={() => handleSectionChange(0)}>About Me</button>
            <button className='action__skills' onClick={() => handleSectionChange(1)}>Skills</button>
            <button className='action__owlnight' onClick={() => handleSectionChange(2)}>OwlNight</button>
            <button className='action__sala-virtual' onClick={() => handleSectionChange(3)}>Sala Virtual</button>
            <button className='action__dulce-con-maria' onClick={() => handleSectionChange(4)}>Dulce con Maria</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
