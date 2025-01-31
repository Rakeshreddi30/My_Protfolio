import React from 'react'
import { pageLinks, socialLinks } from '../data'
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Navbar = () => {
    const iconMap = {
        faLinkedin : faLinkedin,
        faGithub :faGithub,
    }
  return (
    <nav className="navbar">
        <div className='nav-center'>
            <div className='nav-header'>
                My Portfolio
            </div>
    
    <ul className='nav-links' id="nav-links">
      {pageLinks.map((link)=>{
         return (
        <a href={link.href} className='nav-link' >
            {link.text}
        </a>
        )
      })}
        </ul>
    <ul className='nav-icons'>
     {socialLinks.map((link)=>{
         const {icon,url,id}= link;
                return(
                    <a key={id} href={url}  className='nav-icon' >
                    <FontAwesomeIcon icon={iconMap[link.icon]} size='2x'/>
                    </a>
                )
            })}
        </ul>
    </div>

    </nav>
  )
}

export default Navbar