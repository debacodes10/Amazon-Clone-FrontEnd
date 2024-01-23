import React from 'react'
import './styles/navbarbeta.css';

import { GiHamburgerMenu } from "react-icons/gi";

const NavbarBeta = () => {
  return (
    <div className='betaNavbarMainContainer'>
        <GiHamburgerMenu size={20} color='#FFFFFF'/>
        <span className='subTextLabels'>All</span>
        <span className='subTextLabels'>Amazon miniTV</span>
        <span className='subTextLabels'>Sell</span>
        <span className='subTextLabels'>Best Seller's</span>
        <span className='subTextLabels'>Today's Deals</span>
        <span className='subTextLabels'>Mobiles</span>
        <span className='subTextLabels'>Electronics</span>
        <span className='subTextLabels'>Prime</span>
        <span className='subTextLabels'>Customer Service</span>
        <div className='totalAdContainer'>
          <div style={{marginLeft: 8, marginRight: 12, display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
            <span className='adLabel'>INDIAN POLICE</span>
            <span className='adLabel'>FORCE</span>
          </div>
          <div className='joinPrimeContainer'>
            <div className='pseudoCircular'></div>
            <div style={{display: 'flex', flexDirection: 'column'}}>
              <span className='joinPrimeLabel'>Join Prime now</span>
              <span className='joinPrimeLabelBeta'>*Redirects to primevideo.com</span>
            </div>
          </div>
        </div>
    </div>
  )
}

export default NavbarBeta