'use client';

import React, {useState} from 'react'
import './styles/bannerads.css'

import Image from 'next/image'

import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const bannerImages = [
    '/banner_1.png',
    '/banner_2.png',
    '/banner_3.png',
    '/banner_4.png',
    '/banner_5.png',
  ];

const BannerAds = () => {

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handlePrevClick = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? bannerImages.length - 1 : prevIndex - 1));
      };

    const handleNextClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === bannerImages.length - 1 ? 0 : prevIndex + 1));
        };

  return (
    <div className='bannerMainContainer'>
        <IoIosArrowBack className="arrowBackForward" size={75} onClick={handlePrevClick}/>
        <div className='bannerImage'>
            <Image src={bannerImages[currentImageIndex]}  height={350} width={900} alt='' priority />
        </div>
        <IoIosArrowForward className="arrowBackForward" size={75} onClick={handleNextClick}/>
    </div>
  )
}

export default BannerAds