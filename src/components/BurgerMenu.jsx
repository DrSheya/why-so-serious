import React, { useState } from 'react';
import { slide as Menu } from 'react-burger-menu';
import { navLinks } from '../constants';

const BurgerMenu = ({imgSrc}) => {
    const [ isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    };
  return (
    <div className=''>
        <img src={imgSrc} alt="hamburgermenu" width={25} height={25} onClick={handleClick}/>
        <Menu isOpen={isOpen} className='space-y-4 w-96 mr-4 absolute left-8 top-20 bg-menu-background rounded-lg'>
        <ul>    
        {navLinks.map((item) => (
            
                <li key={item.label} className='font-montserrat text-white  hover:text-white w-50 pl-24 pt-8 text-2xl'>
                  <a href={item.href} >{item.label}</a>
                </li>
              ) )}
            </ul>

        </Menu>
    </div>
    
  )
}

export default BurgerMenu;