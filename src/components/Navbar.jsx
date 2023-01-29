import React from "react";
import { useState } from "react";

import { navLinks } from "../constants";
import styles from "../style";
import logoLight from '../assets/logo-dark.png';
import {FiMenu} from 'react-icons/fi'
import {AiOutlineClose} from 'react-icons/ai'

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle((prev) => prev = !prev)
    console.log(toggle)
  }

  return (
    <nav className={`w-full flex py-6 justify-between items-center navbar nav-bg-color ${styles.paddingX} h-[70px]`}>
      <img src={logoLight} className='w-[5rem]' alt="Vince Technologies Logo"/>

      <ul className="md:block hidden">
          {navLinks.map((nav, index) => (
            <a href={`#${nav.id}`} className="ml-14 font-[500] text-md text-white">{nav.title}</a>
          ))}
      </ul>

      {/* moile toggle menu button*/}
      <div className="md:hidden block" onClick={handleToggle}>
        {!toggle ? <FiMenu size={30} color={`white`}/> : <AiOutlineClose size={30} color='white'/> }
      </div>

      {/* mobile menu */}
      <div className={`${!toggle ? 'left-[-100rem]' : 'left-0'} absolute top-0 h-full z-10 w-1/2 p-9 bg-[var(--yellow)]  transition-all ease-linear duration-300 md:hidden`}>
      <ul className="flex flex-col space-y-8">
          {navLinks.map((nav, index) => (
            <a href={`#${nav.id}`} className="font-[500] text-md text-white">{nav.title}</a>
          ))}
      </ul>
      </div>
    </nav>
  );
};

export default Navbar;
