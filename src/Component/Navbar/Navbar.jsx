import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); 

  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className={`${styles['bg-nav']} py-8 text-white`}>
        <div className="container mx-auto w-full lg:max-w-screen-lg">
          <div className="flex flex-row justify-between items-center mx-4 lg:mx-0">
            <NavLink to="/">
              <h2 className="font-bold text-3xl uppercase">Start Framework</h2>
            </NavLink>

            <ul className="list-none hidden md:flex flex-row justify-between">
              <li className="text-md font-bold uppercase ms-5">
                <NavLink
                  to="/about"
                  className={({ isActive }) => {
                    return ` p-2 rounded-md ${isActive ? `${styles['active']}` : ''}`;
                  }}
                >
                  about
                </NavLink>
              </li>
              <li className="text-md font-bold uppercase ms-5">
                <NavLink
                  to="portfolio"
                  className={({ isActive }) => {
                    return ` p-2 rounded-md ${isActive ? `${styles['active']}` : ''}`;
                  }}
                >
                  portfolio
                </NavLink>
              </li>
              <li className="text-md font-bold uppercase ms-5">
                <NavLink
                  to="contact"
                  className={({ isActive }) => {
                    return ` p-2 rounded-md ${isActive ? `${styles['active']}` : ''}`;
                  }}
                >
                  contact
                </NavLink>
              </li>
            </ul>

           
            <i
              className="md:hidden fa-solid fa-bars cursor-pointer"
              onClick={toggleMenu} 
            ></i>
          </div>
        </div>

       
        <ul
          className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} text-center mt-4`}
        >
          <li className="text-md font-bold uppercase py-2">
            <NavLink
              to="/about"
              className={({ isActive }) => {
                return ` p-2 rounded-md ${isActive ? `${styles['active']}` : ''}`;
              }}
            >
              about
            </NavLink>
          </li>
          <li className="text-md font-bold uppercase py-2">
            <NavLink
              to="portfolio"
              className={({ isActive }) => {
                return ` p-2 rounded-md ${isActive ? `${styles['active']}` : ''}`;
              }}
            >
              portfolio
            </NavLink>
          </li>
          <li className="text-md font-bold uppercase py-2">
            <NavLink
              to="contact"
              className={({ isActive }) => {
                return ` p-2 rounded-md ${isActive ? `${styles['active']}` : ''}`;
              }}
            >
              contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
