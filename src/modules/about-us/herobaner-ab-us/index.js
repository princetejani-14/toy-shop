import React from 'react'
import './herobanerabus.scss'
import img1 from '../../../assets/image/about-us-baner-img1.png'
import img2 from '../../../assets/image/about-us-baner-img2.png'
import img3 from '../../../assets/image/about-us-baner-img3.png'
export default function Herobaner_aboutus() {
  return (
    <div>
      <div className='baju'>
        <div className='container'>
          <div className='herobaner_about_us_main'>
            <div className='herobaner_about_us_left_img'>
              <img src={img1} />
            </div>
            <div className='herobaner_about_us_center_text'>
              <h1>About Us</h1>
            </div>
            <div className='herobaner_about_us_right_img'>
              <img src={img2} />
            </div>

          </div>

        </div>

      </div>
      <div className='herobaner_about_us_main2'>
        <img src={img3} />
      </div>
    </div>
  )
}
