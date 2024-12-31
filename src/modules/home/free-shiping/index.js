import React from 'react'
import './freeshiping.scss'
import img1 from '../../../assets/image/free-shiping-img1.png'
import img2 from '../../../assets/image/free-shiping-img2.png'
import img3 from '../../../assets/image/free-shiping-img3.png'
import img4 from '../../../assets/image/free-shiping-img4.png'
export default function Free_shiping() {
    return (
        <div>
            <div className='container'>
                <div className='free_shiping_main'>
                    <div className='free_shiping_box1'>
                        <div className='free_shiping_box1_img'>
                            <img src={img1} />
                        </div>
                        <div className='free_shiping_box1_text'>
                            <h1>Secures Payments</h1>
                            <p>Your transactions are always
                            secure and protected with us.</p>

                        </div>
                    </div>
                    <div className='free_shiping_box2'>
                        <div className='free_shiping_box1_img2'>
                            <img src={img2} />
                        </div>
                        <div className='free_shiping_box1_text2'>
                            <h1>Free Shipping</h1>
                            <p>Enjoy free delivery on all your
                            orders, right to your doorstep.</p>

                        </div>
                    </div>
                    <div className='free_shiping_box3'>
                        <div className='free_shiping_box1_img3'>
                            <img src={img3} />
                        </div>
                        <div className='free_shiping_box1_text3'>
                            <h1>Easy Return Policy</h1>
                            <p>Hassle-free returns for complete
                            peace of mind.</p>

                        </div>
                    </div>
                    <div className='free_shiping_box4'>
                        <div className='free_shiping_box1_img4'>
                            <img src={img4} />
                        </div>
                        <div className='free_shiping_box1_text4'>
                            <h1>Online Support</h1>
                            <p>We're here 24/7 to assist with<br></br> any<br></br>
                            questions or concerns</p>

                        </div>
                    </div>

                </div>

            </div>

        </div>
    )
}
