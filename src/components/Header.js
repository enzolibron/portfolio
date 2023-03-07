import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import laptop from '../assets/laptop.png';

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => setToggle(!toggle);

  const handleClickScroll = (e) => {
    const element = document.getElementById(e);

    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }

    if (toggle) {
      handleToggle();
    }
  };

  return (
    <header className="flex justify-between px-5 py-2 bg-secondery fixed w-full z-10">
      <button onClick={() => handleClickScroll('hero')}>
        <img src={laptop} className="laptop-logo" alt="" />
      </button>

      {/* Desktop Nav */}
      <nav className="hidden md:block">
        <ul className="flex">
          <li>
            <button onClick={() => handleClickScroll('about')}>About</button>
          </li>

          <li>
            <button onClick={() => handleClickScroll('projects')}>
              Projects
            </button>
          </li>
          <li>
            <button onClick={() => handleClickScroll('contact')}>
              Contact
            </button>
          </li>
          <li>
            <button>
              <a
                href="https://drive.google.com/file/d/1Tzb0_CRURH07BFHl2gCJxa89PW4Lr84n/view"
                target="_blank"
                without
                rel="noreferrer"
              >
                Resume
              </a>
            </button>
          </li>
        </ul>
      </nav>

      {/* Mobile Nav */}
      <nav
        className={!toggle ? 'mobile-nav left-[-100%]' : 'mobile-nav left-0'}
      >
        <ul className="flex flex-col">
          <li>
            <button onClick={() => handleClickScroll('about')}>About</button>
          </li>

          <li>
            <button onClick={() => handleClickScroll('projects')}>
              Projects
            </button>
          </li>
          <li>
            <button onClick={() => handleClickScroll('contact')}>
              Contact
            </button>
          </li>
          <li>
            <button>
              <a
                href="https://drive.google.com/file/d/1Tzb0_CRURH07BFHl2gCJxa89PW4Lr84n/view"
                target="_blank"
                without
                rel="noreferrer"
              >
                Resume
              </a>
            </button>
          </li>
        </ul>
      </nav>

      {/* Toggle button */}
      <button onClick={handleToggle} className="block md:hidden">
        {!toggle ? <AiOutlineMenu size={30} /> : <AiOutlineClose size={30} />}
      </button>
    </header>
  );
};

export default Header;
