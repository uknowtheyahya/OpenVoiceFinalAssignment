import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [hideLeft, setHideLeft] = useState("-left-[1000px]");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const onOpen = () => {
    setHideLeft("left-0");
  };
  const onClose = () => {
    setHideLeft("-left-[1000px]");
  };

  const menuItems = [
    { link: 'Home', path: '/' },
    { link: 'Services', path: 'services' }, // Updated path to 'services'
    { link: 'About', path: 'about' },
    { link: 'Contact Us', path: '/contact' },
  ];

  return (
    <div className={`bg-slate-900 text-white ${isSticky ? 'fixed top-0 w-full z-50' : ''}`}>
      <div className='max-[900px]:hidden'>
        <DesktopNav menuItems={menuItems} />
      </div>
      <div className='min-[900px]:hidden bg-slate-800 text-white'>
        <MobileNav
          menuItems={menuItems}
          onClose={onClose}
          hideLeft={hideLeft}
          onOpen={onOpen}
        />
      </div>
    </div>
  );
};

export default NavBar;
