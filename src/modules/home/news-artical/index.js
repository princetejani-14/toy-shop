import React from 'react'
import './newsartical.scss'
import img1 from '../../../assets/image/news-articles-img1.png'
import img2 from '../../../assets/image/news-articles-img2.png'
import img3 from '../../../assets/image/news-articles-img3.png'
import img4 from '../../../assets/image/news-articles-img4.png'
import { FaArrowRightLong } from "react-icons/fa6";

export default function Newsartical() {
    return (
        <div>
            <div className='container'>
                <div className='newsartical_heading'>
                    <h1>Kids News Articles</h1>
                    <p>Lorem ipsum dolor sit amet consectetur. Id viverra cursus enim risus
                        mattis urnanullam quis magna ligula maecenas integer.</p>
                </div>
                <div className='newsartical_box_main'>
                    <div className='newsartical_box1'>
                        <div className='newsartical_box1_img'>
                            <img src={img1} />
                        </div>
                        <div className='newsartical_box1_date_box'>
                            <p>24 Aug, 2024</p>
                        </div>
                        <div className='newsartical_box1_data'>
                            <h1>Healthy Eating Tips for a Balanced Lifestyle</h1>
                            <p>Lorem ipsum dolor sit amet consectetur. Ullamcorper tempus.</p>
                        </div>
                        <div className='newsartical_box1_readmore'>
                            <p>Read More</p>
                            <FaArrowRightLong className='rightarrow'/>
                        </div>

                    </div>
                    <div className='newsartical_box2'>
                        <div className='newsartical_box1_img'>
                            <img src={img2} />
                        </div>
                        <div className='newsartical_box1_date_box'>
                            <p>24 Aug, 2024</p>
                        </div>
                        <div className='newsartical_box1_data'>
                            <h1>Healthy Eating Tips for a Balanced Lifestyle</h1>
                            <p>Lorem ipsum dolor sit amet consectetur. Ullamcorper tempus.</p>
                        </div>
                        <div className='newsartical_box1_readmore'>
                            <p>Read More</p>
                            <FaArrowRightLong className='rightarrow'/>
                        </div>

                    </div>
                    <div className='newsartical_box3'>
                        <div className='newsartical_box1_img'>
                            <img src={img3} />
                        </div>
                        <div className='newsartical_box1_date_box'>
                            <p>24 Aug, 2024</p>
                        </div>
                        <div className='newsartical_box1_data'>
                            <h1>Healthy Eating Tips for a Balanced Lifestyle</h1>
                            <p>Lorem ipsum dolor sit amet consectetur. Ullamcorper tempus.</p>
                        </div>
                        <div className='newsartical_box1_readmore'>
                            <p>Read More</p>
                            <FaArrowRightLong className='rightarrow'/>
                        </div>

                    </div>
                    <div className='newsartical_box4'>
                        <div className='newsartical_box1_img'>
                            <img src={img4} />
                        </div>
                        <div className='newsartical_box1_date_box'>
                            <p>24 Aug, 2024</p>
                        </div>
                        <div className='newsartical_box1_data'>
                            <h1>Healthy Eating Tips for a Balanced Lifestyle</h1>
                            <p>Lorem ipsum dolor sit amet consectetur. Ullamcorper tempus.</p>
                        </div>
                        <div className='newsartical_box1_readmore'>
                            <p>Read More</p>
                            <FaArrowRightLong className='rightarrow'/>
                        </div>

                    </div>
                    

                </div>
            </div>
        </div>
    )
}
