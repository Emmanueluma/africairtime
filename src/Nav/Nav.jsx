import React, { useState } from 'react'
import './nav.css'
import Logo from '../asset/Logo.png'
import HomeLogo from '../asset/Home 5.png'
import CardLogo from '../asset/Wallet 2.png'
import CalendarLogo from '../asset/Calendar 1.png'
import ProfileLogo from '../asset/Profile 3.png'
import SupportLogo from '../asset/Chat 4.png'
import SettingLogo from '../asset/Setting 2.png'
import Group from '../asset/Group 47.png'

const Nav = ({router, setRouter}) => {
  const [toggle, setToggle] = useState('#home');
  return (
    <section className="nav">
      <div className="logo">
        <img src={Logo} alt="" />
      </div>
      <nav>
        <a href="#" onClick={e => {setRouter('#home')}} className={ router === '#home' ? 'active' : ''}>
          <img src={HomeLogo} className='a-logo' alt="" />
           Dashboard
        </a>
        <a href="#airtime" onClick={e => {setRouter('#airtime')}} className={ router === '#airtime' ? 'active' : ''}>
          <img src={CardLogo} className='a-logo' alt="" />
           cards</a>
        
        <a href="#">
          <img src={CalendarLogo} className='a-logo' alt="" />
           scheduler
        </a>
        <a href="#">
          <img src={ProfileLogo} className='a-logo' alt="" />
           profile</
        a>
        <a href="#">
          <img src={SupportLogo} className='a-logo' alt="" />
           support</
        a>
        <a href="#">
          <img src={SettingLogo} className='a-logo' alt="" />
           setting</
        a>
      </nav>
      <section className='pre'>
        <img src={Group} alt="" />
      </section>
    </section>
  )
};

export default Nav
