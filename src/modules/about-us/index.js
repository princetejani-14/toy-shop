import React from 'react'
import Herobaner_aboutus from './herobaner-ab-us'
import Header from '../../shared/components/header'
import About_us_data1 from './about-us-data1'
import About_us_data2 from './about-us-data2'
import Kidslove_us from '../home/kids-love-us'
import Footer from '../../shared/components/footer'

export default function About_us() {
  return (
    <div>
      <Header/>
      <Herobaner_aboutus />
      <About_us_data1/>
      <About_us_data2/>
      <Kidslove_us/>
      <Footer/>
    </div>
  )
}
