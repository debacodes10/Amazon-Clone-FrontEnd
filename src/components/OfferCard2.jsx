import React from 'react'
import './styles/offercard.css'
import Image from 'next/image'

const OfferCard2 = ({title,image,label}) => {
  return (
    <div className='offerCardContainer'>
        <span className='offerCardTitle'>{title}</span>
        <div className='largeOfferImageContainer'>
            <Image src={image} width={250} height={250} className='largeOfferImage'/>
        </div>
        <span className='saleNameLabel'>{label}</span>
    </div>
  )
}

export default OfferCard2