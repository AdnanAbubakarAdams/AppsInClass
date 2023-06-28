import React from 'react';
import {TbBuildingCastle} from "react-icons/tb";
import {CgGym} from "react-icons/cg";

import { Link } from 'react-router-dom';

import "./NavBar.scss";


const NavBar = () => {
  return (
    <div className='navBar'>
        <Link to="/">
        <TbBuildingCastle size={30}/>
        </Link>
        <Link to="/">
        PRACTICE ARENA
        </Link>
        <Link to="/">
        <CgGym size={40}/>
        </Link>
    </div>
  )
}

export default NavBar;