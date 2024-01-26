import React from 'react'
import './styles/index.css'
import Navbar from '@/components/Navbar'
import NavbarBeta from '@/components/NavbarBeta'
import BannerAds from '@/components/BannerAds'
import OfferCard from '@/components/OfferCard'
import OfferCard2 from '@/components/OfferCard2'

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
          <OfferCard2 title={"Regional Crafts Paradise"}
          image={'/largeAdCard/ad1.jpg'}
          label={"See more"}
          />
        </div>
        <div className='offerCardsMainContainer'>
          <OfferCard title={"Top mobile accessories for your smartphone"}
          images={["/card4/ad1.jpg","/card4/ad2.jpg","/card4/ad3.jpg","/card4/ad4.jpg"]}
          imageLabel={["Headsets", "Cables and chargers", "Cases and covers", "Powerbanks"]}
          saleName={"See all offers"}
          />
          <OfferCard title={"Snacks & Beverages from emerging brands"}
          images={["/card5/ad1.jpg","/card5/ad2.jpg","/card5/ad3.jpg","/card5/ad4.jpg"]}
          imageLabel={["Syrups and spreads", "Seeds and dry fruits", "Breakfast essentials", "Sweets & snack"]}
          saleName={"See more"}
          />
          <OfferCard title={"Handmade ethnic collection"}
          images={["/card6/ad1.jpg","/card6/ad2.jpg","/card6/ad3.jpg","/card6/ad4.jpg"]}
          imageLabel={["Sarees", "Kurti", "Men's wear", "Handwoven dupatta"]}
          saleName={"See more"}
          />
          <OfferCard2 title={"Manufacturing Marvel Parade"}
          image={'/largeAdCard/ad2.jpg'}
          label={"See more"}
          />
        </div>
    </div>
  )
}

export default index