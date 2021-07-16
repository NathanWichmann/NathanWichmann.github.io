import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";


const NavBar = () => {
  return (
    <header className="bg-gray-500">
      <div className="container mx-auto flex justify-between">
        <nav className="flex">
          <NavLink
            to="/My-App"
            exact
            activeClassName="text-white"
            className="inflex-flex items-left py-6 px-3 mr-4 text-gray-100 hover:text-gray-600 text-6xl font-bold tracking-widest"
          >
            Wichmann
          </NavLink>
          <NavLink
            to="/about"
            activeClassName="text-white"
            className="inflex-flex items-center py-3 px-3 mr-6 text-gray-400 hover:text-gray-600 text-4xl font-bold tracking-widest"
          >
            About Me
          </NavLink>
          <NavLink
            to="/project"
            activeClassName="text-white"
            className="inflex-flex items-center py-3 px-3 mr-4 text-gray-400 hover:text-gray-600 text-4xl font-bold tracking-widest"
          >
            Portfolio
          </NavLink>
          <NavLink
            to="/contact"
            activeClassName="text-white"
            className="inflex-flex items-center py-3 px-3 mr-4 text-gray-400 hover:text-gray-600 text-4xl font-bold tracking-widest"
          >
            Contact
          </NavLink>
          <NavLink
            to="/resume"
            activeClassName="text-white"
            className="inflex-flex items-center py-3 px-3 mr-4 text-gray-400 hover:text-gray-600 text-4xl font-bold tracking-widest"
          > Resume
          </NavLink>
          
        </nav>
        <div className="inline-flex py-3 px-3 my-6 ">
          <SocialIcon
            url="https://github.com/NathanWichmann"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://www.linkedin.com/in/nathan-wichmann-731a7219a/"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://stackoverflow.com/users/16409018/nathan-wichmann"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
          
        </div>
      </div>
    </header>
    
  );
};

export default NavBar;
