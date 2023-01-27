import React from "react";
import { useState } from "react";

import { navLinks } from "../constants";
import styles from "../style";
import logoLight from '../assets/logo-dark.png';
import {FiMenu} from 'react-icons/fi'

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className={`w-full flex py-6 justify-between items-center navbar nav-bg-color ${styles.paddingX} h-[70px]`}>
      <img src={logoLight} className='w-[5rem]' alt="Vince Technologies Logo"/>

      <ul className="md:block hidden">
          {navLinks.map((nav, index) => (
            <a href={`#${nav.id}`} className="ml-14 font-[500] text-md text-white">{nav.title}</a>
          ))}
      </ul>

      {/* moile toggle menu button*/}
      <div className="md:hidden block">
        <FiMenu size={30} />
      </div>
    </nav>
  );
};

export default Navbar;
