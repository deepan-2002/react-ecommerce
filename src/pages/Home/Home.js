import React from 'react'
import Banner from '../../components/Banner/Banner'
import Popular from '../../components/Popular/Popular'
import Offer from '../../components/Offer/Offer'
import Newsletter from '../../components/Newsletter/Newsletter'

const Home = () => {
  return (
    <>
      <Banner />
      <Popular/>
      <Offer/>
      <Newsletter/>
    </>
  )
}

export default Home