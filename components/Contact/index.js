import React from 'react';
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaRegCopyright } from "react-icons/fa";
import bottomImg from '../Images/Vector.png'
import './index.css'

function Contact() {
  return (
    <div className='contact-main-container'>
    <div className='contact-container'>
        <ul className='contact-list'>
        <li className='contact-icon'>
        <FaInstagram />
        </li>
        <li className='contact-icon'>
        <FaLinkedin />
        </li>
        <li className='contact-icon'>
        <IoIosMail />
        </li>
        </ul>
    </div>
        <p className='contact-txt'>Copyright <FaRegCopyright/> 2024. All rights reserved</p>
        <img src={bottomImg} alt='bottom-img' className='bottom-img'/>
        </div>
  );
}

export default Contact;
