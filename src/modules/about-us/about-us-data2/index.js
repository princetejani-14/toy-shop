import React from 'react'
import './aboutusdatatwo.scss'
import img1 from '../../../assets/image/about-us-data-img2.png'
import img2 from '../../../assets/image/about-us-data-img3.png'
export default function About_us_data2() {
  return (
    <div>
      <div className='container'>
        <div className='about_us_data_main2'>
          <div className='main2_data_left'>
            <div className='main2_data_left_box1'>
              <h1>Our Story</h1>
              <p>Toy Store was founded on the belief that everyone deserves access to fresh, wholesome food. We started as a small family-owned business with a simple mission: to make quality groceries accessible to everyone in our community. Over the years, we’ve grown, but our commitment to our customers remains the same.</p>
            </div>
            <div className='main2_data_left_box2'>
              <h1>Our Values</h1>
              <ul>
                <ol>
                  <li><p><span>Quality:</span> We carefully select our products to ensure that only the best items to our shelves.</p></li>
                  <li><p><span>Community: </span> We’re more than just a Toys and Joy; we’re a part of the community. We support local farmers, producers, and businesses.</p></li>
                  <li><p><span>Sustainability:</span>We are committed to reducing our environmental footprint through sustainable practices and offering eco-friendly products.</p></li>
                </ol>
              </ul>
            </div>
            <div className='main2_data_left_box3'>
              <img src={img1} />
            </div>
          </div>
          <div className='main2_data_right'>
            <div className='main2_data_left_box4'>
              <h1>What We Offer</h1>
              <ul>
                <li><p><span>Fresh Produce: </span> We pride ourselves on offering a wide variety of fresh fruits and vegetables, sourced locally whenever possible to ensure peak freshness.</p></li>
                <li><p><span>Organic Options: </span>For those who prefer organic, we have a range of organic products that meet the highest standards of quality.</p></li>
                <li><p><span>Grocery Essentials:</span> From dairy and bakery to canned goods and snacks, we have everything you need for your kitchen.</p></li>
                <li><p><span>Eco-Friendly Products:</span> We care about the environment, which is why we offer a selection of sustainable and eco-friendly products.erything you need for your kitchen.</p></li>
              </ul>
            </div>
            <div className='main2_data_left_box5'>
              <img src={img2} />
            </div>
            <div className='main2_data_left_box6'>
              <h1>Why Choose Us?</h1>
              <p>At Toy Store you’re not just a customer – you’re part of our family. We strive to create a welcoming environment where you can shop comfortably and confidently, knowing that every product is chosen with your well-being in mind.</p>
              <a>Thank you for choosing EcoStoere. We look forward to serving you and becoming your go-to Toys and Joy for all your needs</a>

            </div>
          </div>

        </div>

      </div>

    </div>
  )
}
