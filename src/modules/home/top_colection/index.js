import React from 'react'
import './topcolection.scss'
import bg_img1 from '../../../assets/image/top-collection-bg-img1.png'
import bg_img2 from '../../../assets/image/top-collection-bg-img2.jpg'
import bg_img3 from '../../../assets/image/top-collection-bg-img3.jpg'
import img1 from '../../../assets/image/top_colection-img1.png'
import img2 from '../../../assets/image/top_colection-img2.png'
import img3 from '../../../assets/image/top_colection-img3.png'
export default function Top_colecction() {
    return (
        <div>
            <div className='container'>
                <div className='top_colecction_heading'>
                    <h1>Shop Our Top Collections</h1>
                    <p>Lorem ipsum dolor sit amet consectetur. Id viverra cursus enim risus
                        mattis urnanullam quis magna ligula maecenas integer.</p>
                </div>  
                <div className='top_colecction_box_main'>
                    <div className='top_colecction_box1'>
                        <div className='top_colecction_box1_bg_img'>
                            <img src={bg_img1} />
                        </div>
                        <div className='top_colecction_box1_img_main'>
                            <img src={img1} />
                        </div>
                        <div className='top_colecction_box1_text'>
                            <h6>New Arrival</h6>
                            <h1>Boy Toys</h1>
                            <p>Lorem ipsum dolor sit <br></br>amet<br></br>
                            consectetur mauris.</p>

                        </div>

                    </div>
                    <div className='top_colecction_box1'>
                        <div className='top_colecction_box1_bg_img'>
                            <img src={bg_img2} />
                        </div>
                        <div className='top_colecction_box1_img_main'>
                            <img src={img2} />
                        </div>
                        <div className='top_colecction_box1_text'>
                        <h6>New Arrival</h6>
                            <h1>Girl Toys</h1>
                            <p>Lorem ipsum dolor sit <br></br>amet<br></br>
                            consectetur mauris.</p>

                        </div>

                    </div>
                    <div className='top_colecction_box1'>
                        <div className='top_colecction_box1_bg_img'>
                            <img src={bg_img3} />
                        </div>
                        <div className='top_colecction_box1_img_main'>
                            <img src={img3} />
                        </div>
                        <div className='top_colecction_box1_text'>
                        <h6>New Arrival</h6>
                            <h1>Kids Toys</h1>
                            <p>Lorem ipsum dolor sit <br></br>amet<br></br>
                            consectetur mauris.</p>
                        </div>

                    </div>

                </div>
            </div>

        </div>
    )
}
