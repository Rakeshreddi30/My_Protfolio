
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { FaWhatsapp } from 'react-icons/fa'
import React from 'react'
const Footer = () => {
  return (
    <section className='footer'>
        <div className='copyright'>
            <p ><span>&copy;2025 </span>Rakesh Reddy G. All rights reserved</p>
        </div>
        <div className="footer-links">
            <span><FaWhatsapp/> +917036407148 </span>
            <span><MdOutlineMarkEmailUnread/> rakeshreddi19@gmail.com</span>
        </div>
    </section>
  )
}

export default Footer