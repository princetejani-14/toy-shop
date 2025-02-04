import React from 'react'
import './footer.scss'
import footertopimg from '../../../assets/image/footer-top-img.png'
import img1 from '../../../assets/image/footer_top_img1.png'
import img2 from '../../../assets/image/footer_top_img2.png'
import img3 from '../../../assets/image/footer_top_img3.png'
import img4 from '../../../assets/image/footer_top_img4.png'
import logo1 from '../../../assets/logo/footer-bottom-part-logo.png'
import { FaInstagram } from "react-icons/fa";
import { LuFacebook } from "react-icons/lu";
import { FaXTwitter } from "react-icons/fa6";
import { SlSocialLinkedin } from "react-icons/sl";
import { BsTelephone } from "react-icons/bs";
import { MdOutlineMailOutline } from "react-icons/md";
import { CiLocationArrow1 } from "react-icons/ci";



export default function Footer() {
  return (
    <div>
      <div className='footer_top_img'>
        <img src={footertopimg} />
      </div>
      <div className='footer_main'>
        <div className='container'>
          <div className='footer_heading'>
            <p>@Toys Store</p>
          </div>
          <div className='footer_top_image'>
            <div className='footer_top_img1'>
              <img src={img1} />
              <FaInstagram className='insta_icone' />
            </div>
            <div className='footer_top_img1'>
              <img src={img2} />
              <FaInstagram className='insta_icone' />

            </div>
            <div className='footer_top_img1'>
              <img src={img3} />
              <FaInstagram className='insta_icone' />

            </div>
            <div className='footer_top_img1'>
              <img src={img3} />
              <FaInstagram className='insta_icone' />

            </div>
            <div className='footer_top_img1'>
              <img src={img4} />
              <FaInstagram className='insta_icone' />

            </div>
            <div className='footer_top_img1'>
              <img src={img1} />
              <FaInstagram className='insta_icone' />

            </div>

          </div>
          <div className='footer_bottom_part'>
            <div className='footer_bottom_part_left'>
              <div className='footer_bottom_left_top_data'>
                <img src={logo1} alt='toy-shop-logo' />
                <p>Lorem ipsum dolor sit amet consectetur. Ornare amet enim vel varius purus consequat
                  ultrices. Id mi viverra euismod risus viverra tortor cursus.</p>
                <h3>FOLLOW Us</h3>
              </div>
              <div className='footer_bottom_left_bottom_appicone'>
                <div className='appicone1'>
                  <LuFacebook className='appicone' />

                </div>
                <div className='appicone1'>
                  <FaInstagram className='appicone' />

                </div>
                <div className='appicone1'>
                  <FaXTwitter className='appicone' />

                </div>
                <div className='appicone1'>
                  <SlSocialLinkedin className='appicone' />
                </div>
              </div>
            </div>
            <div className='footer_bottom_part_right'>
              <div className='footer_bootom_right_part_data1'>
                <h3>Useful Links</h3>
                <p>Wholesale</p>
                <p>Become a retailer</p>
                <p>Corporate orders</p>
                <p>Affiliates</p>
                <p>F.A.Q.</p>
                <p>Contact</p>
              </div>
              <div className='footer_bootom_right_part_data1'>
                <h3>Quick Links</h3>
                <p>About us</p>
                <p>Blogs</p>
                <p>Shop</p>
                <p>Find a store</p>
                <p>Privacy Policy</p>

              </div>
              <div className='footer_bootom_right_part_data3'>
                <h3>Contact Us</h3>
                <div className='contact_main'>
                  <div className='contact_img_data'>
                    <BsTelephone className='contact' />
                  </div>
                  <div className='contact_number'>
                    <p>+001 123 456 987</p>
                  </div>
                </div>
                <div className='email_main'>
                  <div className='email_img_data'>
                    <MdOutlineMailOutline className='email' />
                  </div>
                  <div className='email_number'>
                    <p>exampleinfo@gmail.com</p>
                  </div>
                </div>
                <h3>Subscribe to Our Newslatter</h3>
                <div className='submit_email_main'>
                  <div className='submit_email_logo'>
                    <MdOutlineMailOutline className='email' />
                  </div>
                  <div className='submit_email_text'>
                    <input type='email' placeholder='Enter Your Email' className='ok'></input>
                  </div>
                  <div className='submit_email_button'>
                    <button><CiLocationArrow1 className='submit_button' /></button>
                  </div>

                </div>
              </div>

            </div>

          </div>
          <div className='footer_ending'>
            <p>@2024 All Rights Copyright <a>Toys Store.</a> Design & Developed By <a>UIPARADOX</a></p>
          </div>
        </div>

      </div>

    </div>
  )
}

