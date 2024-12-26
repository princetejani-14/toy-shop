import React from 'react'
import Slider from "react-slick";
import img1 from '../../../assets/image/autoplay-brand-1.png'
import img2 from '../../../assets/image/autopaly-brand-2.png'
import img3 from '../../../assets/image/autopaly-brand-3.png'
import img4 from '../../../assets/image/autopaly-brand-4.png'
import img5 from '../../../assets/image/autopaly-brand-5.png'
import img6 from '../../../assets/image/autopaly-brand-6.png'
import './toybrandautoplay.scss'
export default function Toybrand_autoplay() {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 576,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1
              }
            }
          ]
    };
    return (
        <div>
            <div className='container'>
                <div className='autoplay_slider_main'>
                    <div className="slider-container">
                        <Slider {...settings}>
                            <div className='autoplay_img'>
                                <img src={img1} />
                            </div>
                            <div className='autoplay_img'>
                                <img src={img2} />

                            </div>
                            <div className='autoplay_img'>
                                <img src={img3} />
                            </div>
                            <div className='autoplay_img'>
                                <img src={img4} />

                            </div>
                            <div className='autoplay_img'>
                                <img src={img5} />
                            </div>
                            <div className='autoplay_img'>
                                <img src={img6} />

                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    )
}
