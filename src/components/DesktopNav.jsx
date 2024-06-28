import React from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import logo from '../assets/logo.png';

const DesktopNav = ({ menuItems }) => {
  return (
    <div className='h-16 flex justify-between items-center px-6 lg:px-12'>
      <a href="/">
        <img className='w-16 h-16' src={logo} alt="Logo" />
      </a>
      <ul className='flex gap-8'>
        {menuItems.map((menu, index) => (
          <li key={index} className='hover:text-black hover:bg-white rounded hover:px-2'>
            {menu.path === 'services' || menu.path === 'about' ? (
              <ScrollLink to={menu.path} smooth={true} duration={500} className='cursor-pointer font-medium capitalize text-secondary'>
                {menu.link}
              </ScrollLink>
            ) : (
              <Link to={menu.path} className='font-medium capitalize text-secondary'>
                {menu.link}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DesktopNav;
