import React from 'react'
import './herobaner.scss'
import img1 from '../../../assets/image/hero-image-1.png'
import img2 from '../../../assets/image/hero-image-2.jpg'
import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";

import Slider from "react-slick";
function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div onClick={onClick} className='right_arrow'>
            <FaArrowRightLong />
        </div>
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div onClick={onClick} className='left_arrow'>
            <FaArrowLeftLong />

        </div>
    );
}
export default function Herobaner_home() {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };
    return (
        <div>
            <div className='container'>
                <div className='herobaner_main'>
                    <div className='herobaner_img_left'>
                        <img src={img1} />
                    </div>
                    <div className='herobaner_img_center'>
                        <Slider {...settings}>
                            <div className='herobaner_center_main'>
                                <div className='herobaner_center_main_bg'>

                                </div>
                                <div className='herobaner_center_main_text'>
                                    <div className='herobaner_center_main_text_top'>
                                        <p>New Arrival</p>
                                    </div>
                                    <div className='herobaner_center_main_text_center'>
                                        <h1>Toys That Spark Creativity and joy!</h1>
                                        <p>Lorem ipsum dolor sit amet consectetur. Eget posuere cras est non in leo non sed. Diam varius amet
                                            nulla orci. In semper nisi facilisis nibh sed. At adipiscing malesuada neque</p>
                                    </div>
                                    <div className='herobaner_center_main_text_button'>
                                        <div className='herobaner_center_main_text_button_left'>
                                            <p>Shop Now</p>
                                            <FaArrowRightLong className='right_arrow_herobaner' />
                                        </div>
                                        <div className='herobaner_center_main_text_button_right'>
                                            <button>Learn More</button>
                                        </div>

                                    </div>

                                </div>
                            </div>
                            <div className='herobaner_center_main2'>
                                <div className='herobaner_center_main_bg'>

                                </div>
                                <div className='herobaner_center_main_text'>
                                    <div className='herobaner_center_main_text_top'>
                                        <p>New Arrival</p>
                                    </div>
                                    <div className='herobaner_center_main_text_center'>
                                        <h1>Toys That Spark Creativity and joy!</h1>
                                        <p>Lorem ipsum dolor sit amet consectetur. Eget posuere cras est non in leo non sed. Diam varius amet
                                            nulla orci. In semper nisi facilisis nibh sed. At adipiscing malesuada neque</p>
                                    </div>
                                    <div className='herobaner_center_main_text_button'>
                                        <div className='herobaner_center_main_text_button_left'>
                                            <p>Shop Now</p>
                                            <FaArrowRightLong className='right_arrow_herobaner' />
                                        </div>
                                        <div className='herobaner_center_main_text_button_right'>
                                            <button>Learn More</button>
                                        </div>

                                    </div>

                                </div>
                            </div>
                            <div className='herobaner_center_main3'>
                                <div className='herobaner_center_main_bg'>

                                </div>
                                <div className='herobaner_center_main_text'>
                                    <div className='herobaner_center_main_text_top'>
                                        <p>New Arrival</p>
                                    </div>
                                    <div className='herobaner_center_main_text_center'>
                                        <h1>Toys That Spark Creativity and joy!</h1>
                                        <p>Lorem ipsum dolor sit amet consectetur. Eget posuere cras est non in leo non sed. Diam varius amet
                                            nulla orci. In semper nisi facilisis nibh sed. At adipiscing malesuada neque</p>
                                    </div>
                                    <div className='herobaner_center_main_text_button'>
                                        <div className='herobaner_center_main_text_button_left'>
                                            <p>Shop Now</p>
                                            <FaArrowRightLong className='right_arrow_herobaner' />
                                        </div>
                                        <div className='herobaner_center_main_text_button_right'>
                                            <button>Learn More</button>
                                        </div>

                                    </div>

                                </div>
                            </div>

                        </Slider>

                    </div>
                    <div className='herobaner_img_right'>
                        <img src={img2} />
                    </div>

                </div>
                <div className='herobaner_main2'>
                    <div className='herobaner_main2_left'>
                        <img src={img1} />
                    </div>
                    <div className='herobaner_main2_right'>
                        <img src={img2} />
                    </div>

                </div>
            </div>

        </div>
    )
}
