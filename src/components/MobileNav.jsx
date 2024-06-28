import React from 'react';
import { HiBars3BottomRight } from "react-icons/hi2";
import { RiCloseCircleLine } from "react-icons/ri";
import { Link as ScrollLink } from 'react-scroll';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const MobileNav = ({ menuItems, onClose, hideLeft, onOpen }) => {
  return (
    <div className="h-16  flex justify-between items-center px-6 lg:px-12">
      <a href="/">
        <img className='w-16 h-16' src={logo} alt="Logo" />
      </a>
      <button onClick={onOpen} className='border border-primary rounded'>
        <HiBars3BottomRight className='w-7 h-7' />
      </button>

      <div className={`transition-all w-full h-full fixed bg-primary z-50 top-0 ${hideLeft} flex justify-center items-center`}>
        <button onClick={onClose} className='absolute right-8 top-32'>
          <RiCloseCircleLine className='w-7 h-7 bg-slate-800 text-white rounded-full' />
        </button>
        <div className='border p-8 bg-white rounded-3xl'>
          <ul className='flex flex-col gap-5 text-slate-800 '>
            {menuItems.map((menu, index) => (
              <li key={index} className='hover:text-white hover:bg-black hover:rounded-lg'>
                {menu.path === 'services' || menu.path === 'about' ? (
                  <ScrollLink to={menu.path} smooth={true} duration={500} onClick={onClose} className='cursor-pointer font-medium capitalize text-secondary text-2xl'>
                    {menu.link}
                  </ScrollLink>
                ) : (
                  <Link to={menu.path} className='font-medium capitalize text-secondary text-2xl' onClick={onClose}>
                    {menu.link}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
