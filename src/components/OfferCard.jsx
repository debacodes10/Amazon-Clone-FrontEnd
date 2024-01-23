import React from 'react'
import './styles/offercard.css'

import Image from 'next/image'

const OfferCard = ({title, images, imageLabel, saleName}) => {
  return (
    <div className='offerCardContainer'>
        <span className='offerCardTitle'>{title}</span>
        <div className='offerItemsGrid'>
          <div className='eachOfferItem'>
            <Image src={images[0]} width={100} height={100} alt='' className='offerImage'/>
            <span className='eachOfferItemLabel'>{imageLabel[0]}</span>
          </div>
          <div className='eachOfferItem'>
            <Image src={images[1]} width={100} height={100} alt='' className='offerImage'/>
            <span className='eachOfferItemLabel'>{imageLabel[1]}</span>
          </div>
          <div className='eachOfferItem'>
            <Image src={images[2]} width={100} height={100} alt='' className='offerImage'/>
            <span className='eachOfferItemLabel'>{imageLabel[2]}</span>
          </div>
          <div className='eachOfferItem'>
            <Image src={images[3]} width={100} height={100} alt='' className='offerImage'/>
            <span className='eachOfferItemLabel'>{imageLabel[3]}</span>
          </div>
        </div>
        <span className='saleNameLabel'>{saleName}</span>
    </div>
  )
}

export default OfferCard