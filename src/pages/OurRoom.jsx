import React from 'react'
import Footer from '../components/footer/Footer'
import Filters from '../components/filters/Filters'
import Stock from '../components/stock/Stock'
import CardsRoom from '../components/cardsRoom/CardsRoom'

const OurRoom = () => {
  return (
    <>
        <CardsRoom/>
        <Stock/>
        <Footer/>
    </>
  )
}

export default OurRoom