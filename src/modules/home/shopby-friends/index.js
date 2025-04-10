import React, { useState } from 'react';
import './shopbyfriends.scss';
import img1 from '../../../assets/image/shopby-friends-img1.png';
import img2 from '../../../assets/image/shopby-friends-img2.png';
import img3 from '../../../assets/image/shopby-friends-img3.png';
import img4 from '../../../assets/image/shopby-friends-img4.png';
import { IoMdStar, IoMdHeartEmpty } from "react-icons/io";
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa6";
import { BiRefresh } from "react-icons/bi";

export default function Shopbyfriends() {
    // Define initial counts (4 products)
    const [counts, setCounts] = useState([1, 1, 1, 1]);

    // Handle Increment
    const increment = (index) => {
        const newCounts = [...counts];
        newCounts[index] += 1;
        setCounts(newCounts);
    };

    // Handle Decrement
    const decrement = (index) => {
        const newCounts = [...counts];
        if (newCounts[index] > 0) {
            newCounts[index] -= 1;
        }
        setCounts(newCounts);
    };

    // Data for products
    const products = [
        { img: img1, title: "Huggable Friends" },
        { img: img2, title: "Snuggle Buddies" },
        { img: img3, title: "Cuddle Companions" },
        { img: img4, title: "Plush Toy Friends" },
    ];

    return (
        <div className='container'>
            <div className='shopby_friends_main'>
                {products.map((product, index) => (
                    <div className='shopby_friends_box1' key={index}>
                        <div className='shopby_friends_box1_img'>
                            <img src={product.img} alt={product.title} />
                        </div>

                        <div className='shopby_friends_box1_img_upper_left'>
                            <p>-16%</p>
                        </div>

                        <div className='shopby_friends_box1_img_upper_right'>
                            <div className='heart_icone'>
                                <IoMdHeartEmpty className='heart' />
                            </div>
                            <div className='eyes_icone'>
                                <FaRegEye className='eyes' />
                            </div>
                            <div className='revers_icone'>
                                <BiRefresh className='revers' />
                            </div>
                        </div>

                        <div className='shopby_friends_box1_bottom_star_main'>
                            <div className='shopby_friends_box1_bottom_star'>
                                <IoMdStar className='star1' />
                                <IoMdStar className='star1' />
                                <IoMdStar className='star1' />
                                <IoMdStar className='star1' />
                                <IoMdStar className='star2' />
                            </div>
                            <div className='shopby_friends_box1_bottom_star_flex'>
                                <p>(02)</p>
                            </div>
                        </div>

                        <div className='shopby_friends_box1_bottom_data'>
                            <h1>{product.title}</h1>
                            <p>Lorem ipsum dolor sit amet consectetur. Id viverra cursus enim risus mattis urna nullam.</p>
                        </div>

                        <div className='shopby_friends_box1_bottom_prize'>
                            <p>$18.00</p>
                            <del>$20.00</del>
                        </div>

                        <div className='shopby_friends_box1_bottom_cart_button'>
                            <div className='shopby_friends_box1_bottom_cart_button_left'>
                                <FaMinus className='minus' onClick={() => decrement(index)} style={{ cursor: 'pointer' }}/>
                                <p>{counts[index]}</p>
                                <FaPlus className='plus' onClick={() => increment(index)} style={{ cursor: 'pointer' }} />
                            </div>
                            <div className='shopby_friends_box1_bottom_cart_button_right'>
                                <button>Add to cart</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
