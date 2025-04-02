import React from 'react'
import './header.scss'
import headerlogo from '../../../assets/logo/toy-shop-header-logo.png'
import { IoSearchOutline } from "react-icons/io5";
import { GoHeart } from "react-icons/go";
import { PiHandbagLight } from "react-icons/pi";
import { FaChevronDown } from "react-icons/fa6";
import { BsTelephone } from "react-icons/bs";
import { IoReorderThreeOutline } from "react-icons/io5";
export default function Header() {
  return (
    <div>
      <div className='container'>
        <div className='toy_shop_header_main'>
          <div className='toy_shop_header_left'>
            <img src={headerlogo} />
          </div>
          <div className='toy_shop_header_center'>
            <div className='toy_shop_header_center_left'>
              <IoSearchOutline className=' toy_shop_header_center_left_img' />
              <input type='text' placeholder='search for products...'></input>
            </div>
            <div className='toy_shop_header_center_right'>
              <button>Search</button>
            </div>
          </div>
          <div className='toy_shop_header_right'>
            <div className='toy_shop_header_right_like_img'>
              <GoHeart className='toy_shop_header_right_like_img_heart' />
            </div>
            <div className='toy_shop_header_right_center_border'>

            </div>
            <div className='toy_shop_header_right_cart_img'>
              <PiHandbagLight className='toy_shop_header_right_cart_img_cart' />
            </div>
            <div className='toy_shop_header_right_text'>
              <p>Shopping cart:</p>
              <h1>$57.00</h1>

            </div>

          </div>

        </div>

      </div>
      <div className='bg_header_bottom'>
        <div className='container'>
          <div className='header_main2'>
            <div className='header_main2_left'>
              <p>Home</p>
              <p>About Us</p>
              <div className='shop-drop'>
                <p>Shop</p>
                <FaChevronDown />
              </div>
              <div className='blog-drop'>
                <p>Blogs</p>
                <FaChevronDown />
              </div>
              <p>Contact Us</p>

            </div>
            <div className='header_main2_right'>
              <div className='header_main_icone'>
                <BsTelephone className='header_main_icone_telephone' />
              </div>
              <div className='header_main_text'>
                <p>(323)576-1942</p>
              </div>
            </div>
            <div className='header_main2_right_responsive'>
              <div className='header_main_icone_resposive'>
                <p>Menu</p>
              </div>
              <div className='header_main_text_resposive'>
                <IoReorderThreeOutline className='header_main_text_resposive_threeline' />

              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  )
}
