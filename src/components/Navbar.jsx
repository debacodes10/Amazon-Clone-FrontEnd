import React from 'react'
import './styles/navbar.css'

import { FaLocationDot } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";


import Image from 'next/image'

const Navbar = () => {
  return (
    <div className='navbarContainer'>
        <div className='logoContainer'>
            <Image src={('/amazon-rectangle.png')} width={190} height={40} alt=''/>
        </div>
        <div className='delivLocationContainer'>
            <span className='delivLabelUpper'>
                Delivering to Mumbai 400001</span>
            <div className='delivLocationSubDiv'>
                <FaLocationDot size={18} color='#FFF'/>
                <span className='delivLabel'>
                    Update Location</span>
            </div>
        </div>
        <div className='searchBarContainer'>
            <select className='searchDropdown'>
                <option value={"All Categories"}>All Categories</option>
                <option value={"Baby"}>Baby</option>
                <option value={"Beauty"}>Beauty</option>
                <option value={"Books"}>Books</option>
                <option value={"Electronics"}>Electronics</option>
                <option value={"Furniture"}>Furniture</option>
                <option value={"Jewellery"}>Jewellery</option>
            </select>
            <input className='searchInput'
            placeholder='Search Amazon.com'/>
            <button className='searchButton'>
                <FaSearch size={25} color='#333333'/>
            </button>
        </div>
        <div className='languageContainer'>
            <div className='innerLanguageContainer'>
                <Image src={("/indian-flag-icon-20.png")} height={20} width={20} alt='' priority={true}/>
                <span className='languageLabel'>EN</span>
                <IoMdArrowDropdown size={20} color='#CCCCCC'/>
            </div>
            <div className='dropdownLanguage' defaultValue={"English"}>
                <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                    <input type='radio' />
                    <span className='languageDropdownLabel'>Hindi</span>
                </div>
                <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                    <input type='radio' />
                    <span className='languageDropdownLabel'>Tamil</span>
                </div>
            </div>
        </div>
        <div className='accountAndListContainer'>
            <span className='accountAndListsLabel1'>Hello, sign in</span>
            <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                <span className='accountAndListsLabel2'>Account and Lists</span>
                <IoMdArrowDropdown size={20} color='#CCCCCC'/>
            </div>
            <div className='accountDropdown'>
                <div style={{display: 'flex', flexDirection: 'column'}}>
                    <button className='signInBtn'>
                        <span style={{fontWeight: '500', fontSize: 14}}>Sign In</span>
                    </button>
                    <div style={{display: 'flex', justifyContent: 'center'}}>
                    <span className='newHereLabelText1'>New Customer?</span>
                    <span className='newHereLabelText2'>Start Here.</span>
                    </div>
                </div>
                <div className='listaccountsubcontainer'>
                    <div className='listContainer'>
                        <span className='labelListAlpha'>Your Lists</span>
                        <span className='labelListBeta'>Create a Wishlist</span>
                        <span className='labelListBeta'>Wish from Any Website</span>
                        <span className='labelListBeta'>Baby Wishlist</span>
                        <span className='labelListBeta'>Discover Your Style</span>
                        <span className='labelListBeta'>Explore Showroom</span>
                    </div>
                    <div className='accountContainer'>
                        <span className='labelListAlpha'>Your Account</span>
                        <span className='labelListBeta'>Your Account</span>
                        <span className='labelListBeta'>Your Orders</span>
                        <span className='labelListBeta'>Your Wishlist</span>
                        <span className='labelListBeta'>Your Recommendation</span>
                        <span className='labelListBeta'>Your Prime Membership</span>
                        <span className='labelListBeta'>Your Prime Video</span>
                        <span className='labelListBeta'>Your Subscribe & Save Items </span>
                        <span className='labelListBeta'>Memberships & Subscriptions</span>
                        <span className='labelListBeta'>Your Seller Account</span>
                        <span className='labelListBeta'>Manage Your Content and Devices</span>
                        <span className='labelListBeta'>Your Free Amazon Business Account</span>
                    </div>
                </div>
            </div>
        </div>
        <div className='returnsAndOrders'>
            <span className='returnsLabelText'>Returns</span>
            <span className='ordersLabelText'>&Orders</span>
        </div>
        <div className='cartContainer'>
            <FaShoppingCart size={30} color='#CCCCCC'/>
            <span className='cartLabel'>Cart</span>
        </div>
    </div>
  )
}

export default Navbar