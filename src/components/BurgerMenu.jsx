import React, { useState, useEffect, useCallback } from 'react';
import { slide as Menu } from 'react-burger-menu';
import { navLinks } from '../constants';

const BurgerMenu = ({imgSrc, isOpen, toggleMenu }) => {
  const handleLinkClick = useCallback(() => {
    // Close the menu when a link is clicked
    toggleMenu();
  }, [toggleMenu]);

  useEffect(() => {
    // Close the menu when `isOpen` changes
    if (isOpen) {
      toggleMenu();
    }
  }, [isOpen, toggleMenu]);

  return (
    <div className=''>
        <img src={imgSrc} alt="hamburgermenu" width={25} height={25} onClick={toggleMenu} />
        <Menu isOpen={isOpen} className='space-y-4 w-96 mr-4 absolute left-8 top-20 bg-menu-background rounded-lg'>
        <ul>    
        {navLinks.map((item) => (
            
                <li key={item.label} className='font-montserrat text-white  w-50 pl-24 pt-8 text-2xl'>
                  <a href={item.href} onClick={handleLinkClick} >{item.label}</a>
                </li>
              ) )}
            </ul>

        </Menu>
    </div>
    
  )
}

export default BurgerMenu;
