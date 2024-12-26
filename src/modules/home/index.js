import React from 'react'
import Header from '../../shared/components/header'
import Herobaner_home from './herobaner-home'
import Toybrand_autoplay from './toy-brand-autoplay'
import Ourplayful from './Our-playful'
import Shopbykids from './shopby-kids'
import Shopbyfriends from './shopby-friends'

export default function Home() {
  return (
    <div>
        <Header/>
        <Herobaner_home/>  
        <Toybrand_autoplay/>
        <Ourplayful/> 
        <Shopbykids/>
        <Shopbyfriends/>
      
    </div>
  )
}
