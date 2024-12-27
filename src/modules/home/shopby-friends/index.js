import React from 'react'
import './shopbyfriends.scss'
import img1 from '../../../assets/image/shopby-friends-img1.png'
import img2 from '../../../assets/image/shopby-friends-img2.png'
import img3 from '../../../assets/image/shopby-friends-img3.png'
import img4 from '../../../assets/image/shopby-friends-img4.png'
import { IoMdHeartEmpty } from "react-icons/io";
import { FaRegEye } from "react-icons/fa6";

import { BiRefresh } from "react-icons/bi";




export default function Shopbyfriends() {
    return (
        <div>
            <div className='container'>
                <div className='shopby_friends_main'>
                    <div className='shopby_friends_box1'>
                        <div className='shopby_friends_box1_img'>
                            <img src={img1} />
                        </div>
                        <div className='shopby_friends_box1_img_upper_left'>
                            <p>-16%</p>
                        </div>
                        <div className='shopby_friends_box1_img_upper_right'>
                            <div className='heart_icone'>
                                <IoMdHeartEmpty className='heart' />
                            </div>
                            <div className='eyes_icone'>
                                <FaRegEye className='eyes'/>
                            </div>
                            <div className='revers_icone'>
                            <BiRefresh  className='revers'/>
                            </div>
                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}
