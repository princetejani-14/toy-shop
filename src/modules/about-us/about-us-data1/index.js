import React from 'react'
import './aboutusdataone.scss'
import img1 from '../../../assets/image/about-us-data-img.png'
export default function About_us_data1() {
    return (
        <div>
            <div className='container'>
                <div className='about-us-data_main'>
                    <div className='main-child-data1'>
                        <p>Welcome to Toy Store your trusted neighborhood Toys and Joy, dedicated to bringing you the freshest and healthiest products at affordable prices. We are passionate about providing our community with selection of quality groceries, from organic produce to pantry staples, all sourced with care and integrity.</p>
                    </div>
                    <div className='main-child-data2'>
                        <img src={img1} />
                    </div>

                </div>

            </div>
        </div>
    )
}
