import React from 'react'
import './styles/index.css'
import Navbar from '@/components/Navbar'
import NavbarBeta from '@/components/NavbarBeta'
import BannerAds from '@/components/BannerAds'
import OfferCard from '@/components/OfferCard'

const index = () => {
  return (
    <div className='mainContainer'>
        <Navbar className='nonScrollable' />
        <NavbarBeta />
        <BannerAds />
        <div className='offerCardsMainContainer'>
          <OfferCard title={"Upto 60% off | Styles for men"}
          images={["/card1/ad1.jpg","/card1/ad2.jpg","/card1/ad3.jpg","/card1/ad4.jpg"]}
          imageLabel={["Clothing", "Footwear", "Watches", "Bags & Wallets"]}
          saleName={"End of season sale"}
          />
          <OfferCard title={"Starting ₹99 | All your home improvement"}
          images={["/card2/ad1.jpg","/card2/ad2.jpg","/card2/ad3.jpg","/card2/ad4.jpg"]}
          imageLabel={["Spin mops, wipes & more", "Bathroom hardware & accessories", "Hammers, screwdrivers & more", "Extension boards, plugs & more"]}
          saleName={"Explore all"}
          />
          <OfferCard title={"Revamp your home in style"}
          images={["/card3/ad1.jpg","/card3/ad2.jpg","/card3/ad3.jpg","/card3/ad4.jpg"]}
          imageLabel={["Cushion Covers & more", "Figurines, vases & more", "Home storage", "Lighting solution"]}
          saleName={"Explore all"}
          />
          <OfferCard title={"Top mobile accessories for your smartphone"}
          images={["/card4/ad1.jpg","/card4/ad2.jpg","/card4/ad3.jpg","/card4/ad4.jpg"]}
          imageLabel={["Headsets", "Cables and chargers", "Cases and covers", "Powerbanks"]}
          saleName={"See all offers"}
          />
        </div>
        <div className='offerCardsMainContainer'>
          <OfferCard title={"Upto 60% off | Styles for men"}
          images={["/card1/ad1.jpg","/card1/ad2.jpg","/card1/ad3.jpg","/card1/ad4.jpg"]}
          imageLabel={["Clothing", "Footwear", "Watches", "Bags & Wallets"]}
          saleName={"End of season sale"}
          />
          <OfferCard title={"Starting ₹99 | All your home improvement"}
          images={["/card2/ad1.jpg","/card2/ad2.jpg","/card2/ad3.jpg","/card2/ad4.jpg"]}
          imageLabel={["Spin mops, wipes & more", "Bathroom hardware & accessories", "Hammers, screwdrivers & more", "Extension boards, plugs & more"]}
          saleName={"Explore all"}
          />
          <OfferCard title={"Revamp your home in style"}
          images={["/card3/ad1.jpg","/card3/ad2.jpg","/card3/ad3.jpg","/card3/ad4.jpg"]}
          imageLabel={["Cushion Covers & more", "Figurines, vases & more", "Home storage", "Lighting solution"]}
          saleName={"Explore all"}
          />
          <OfferCard title={"Top mobile accessories for your smartphone"}
          images={["/card4/ad1.jpg","/card4/ad2.jpg","/card4/ad3.jpg","/card4/ad4.jpg"]}
          imageLabel={["Headsets", "Cables and chargers", "Cases and covers", "Powerbanks"]}
          saleName={"See all offers"}
          />
        </div>
    </div>
  )
}

export default index