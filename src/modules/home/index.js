import React from 'react'
import Header from '../../shared/components/header'
import Herobaner_home from './herobaner-home'
import Toybrand_autoplay from './toy-brand-autoplay'
import Ourplayful from './Our-playful'
import Shopbykids from './shopby-kids'
import Shopbyfriends from './shopby-friends'
import Free_shiping from './free-shiping'
import Top_colecction from './top_colection'
import Feature_toy from './feature_toy'
import Kidslove_us from './kids-love-us'
import Newsartical from './news-artical'

export default function Home() {
  return (
    <div>
        <Header/>
        <Herobaner_home/>  
        <Toybrand_autoplay/>
        <Ourplayful/> 
        <Shopbykids/>
        <Shopbyfriends/>
        <Free_shiping/>
        <Top_colecction/>
        <Feature_toy/>
        <Kidslove_us/>
        <Newsartical/>
      
    </div>
  )
}
