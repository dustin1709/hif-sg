import React from 'react';
import './Footer.css';
import { FaCopyright } from 'react-icons/fa';
import soil from '../images/soil.png';

function Footer() {
    return (
        <div className='footer p-5' style={{backgroundImage: `url(${soil})`}}>
            <div className='container'>
                <ul>
                    <li className='nav-item'>
                        <a href='/'>Home</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#about'>About</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#business'>What we do</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#careers'>Careers</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#contact'>Contact us</a>
                    </li>
                </ul>
                <div className='bottom'>
                    <span className='line'></span>
                    <hr/>
                    <p className='pt-5 flex items-center gap-[12px]'><FaCopyright /> {new Date().getFullYear()} QEM LTD. All rights reserved</p>
                </div>
            </div>
        </div>
    )
}

export default Footer