import React from "react";
import './header.css'
import CTA from "./CTA";
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return <header>
    <div className="container header__container">
      <h5>Hello i'm</h5>
      <h1>Caio Fernando</h1>
      <h5 className="text-light ">FrontEnd Developer</h5>
      <CTA />
      <HeaderSocials/>

      
    </div>
  </header>
}

export default Header