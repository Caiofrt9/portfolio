import React from 'react';
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FiDribbble} from 'react-icons/fi'
import './header.css'
 
const HeaderSocials = () => {
  return <div className='header__socials'>
    <a href='https://www.linkedin.com/in/caio-fernando-pereira-da-silva-847156214/' target="_blank" rel="noreferrer"><BsLinkedin/></a>
    <a href='https://github.com/caiofrt9' target="_blank"><FaGithub/></a> 
    <a href='https://dribble.com' target="_blank" rel="noreferrer"><FiDribbble/></a>     
  </div>;
}

export default HeaderSocials;