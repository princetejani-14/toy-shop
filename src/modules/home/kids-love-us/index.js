import React from 'react'
import './kidsloveus.scss'
import bgimg1 from '../../../assets/image/kidslove-us-bgimg-1.png'
import bgimg2 from '../../../assets/image/kidslove-us-bgimg-2.png'
import bgimg3 from '../../../assets/image/kidslove-us-bgimg-3.png'
import img1 from '../../../assets/image/kidslove-us-img1.png'
import img2 from '../../../assets/image/kidslove-us-img2.png'
import img3 from '../../../assets/image/kidslove-us-img3.png'
import { BiSolidQuoteAltRight } from "react-icons/bi";

import Slider from "react-slick";
export default function Kidslove_us() {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 6000,
        autoplaySpeed: 6000,
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
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 576,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    };
    return (
        <div>
            <div className='container'>
                <div className='kidslove_us_heading'>
                    <h1>Parents and Kids Love Us!</h1>
                    <p>Lorem ipsum dolor sit amet consectetur. Id viverra cursus enim risus
                        mattis urnanullam quis magna ligula maecenas integer.</p>
                </div>
                <div className="slider-container">
                    <Slider {...settings}>
                        <div className='kidslove_us_box1'>
                            <div className='kidslove_us_box1_bg_img'>
                                <img src={bgimg1} />
                            </div>
                            <div className='kidslove_us_box1_left'>
                                <img src={img1} />
                                <h1>Jack Edwards</h1>
                                <p>Software Engineer</p>
                            </div>
                            <div className='kidslove_us_box1_right'>
                                <h4>★★★★★★</h4>
                                <p>Lorem ipsum dolor sit amet consectetur. Quisque nam platea suscipit aliquam eget amet arcu bibendum. At sit sem in
                                    malesuada ut egestas massa neque elementum.</p>
                            </div>
                            <div className='kidslove_us_box1_extra_svg'>
                                <BiSolidQuoteAltRight className='quto1' />
                            </div>

                        </div>
                        <div className='kidslove_us_box1'>
                            <div className='kidslove_us_box1_bg_img'>
                                <img src={bgimg2} />
                            </div>
                            <div className='kidslove_us_box1_left'>
                                <img src={img2} />
                                <h1>Samuel Brooks</h1>
                                <p>Software Engineer</p>
                            </div>
                            <div className='kidslove_us_box1_right'>
                                <h4>★★★★★★</h4>
                                <p>Lorem ipsum dolor sit amet consectetur. Quisque nam platea suscipit aliquam eget amet arcu bibendum. At sit sem in
                                    malesuada ut egestas massa neque elementum.</p>
                            </div>
                            <div className='kidslove_us_box1_extra_svg'>
                                <BiSolidQuoteAltRight className='quto2'/>
                            </div>

                        </div>
                        <div className='kidslove_us_box1'>
                            <div className='kidslove_us_box1_bg_img'>
                                <img src={bgimg3} />
                            </div>
                            <div className='kidslove_us_box1_left'>
                                <img src={img3} />
                                <h1>Henry Davies</h1>
                                <p>Software Engineer</p>
                            </div>
                            <div className='kidslove_us_box1_right'>
                                <h4>★★★★★★</h4>
                                <p>Lorem ipsum dolor sit amet consectetur. Quisque nam platea suscipit aliquam eget amet arcu bibendum. At sit sem in
                                    malesuada ut egestas massa neque elementum.</p>
                            </div>
                            <div className='kidslove_us_box1_extra_svg'>
                                <BiSolidQuoteAltRight className='quto3'/>
                            </div>

                        </div>


                    </Slider>
                </div>
            </div>
        </div>
    )
}
