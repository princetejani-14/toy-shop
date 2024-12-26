import React from 'react'
import './ourplayful.scss'
import img1 from '../../../assets/image/ourplayfull-box-img1.png'
import img2 from '../../../assets/image/ourplayfull-box-img2.png'
import img3 from '../../../assets/image/ourplayfull-box-img3.png'
import img4 from '../../../assets/image/ourplayfull-box-img4.png'
import img5 from '../../../assets/image/ourplayfull-box-img5.png'
import img6 from '../../../assets/image/ourplayfull-box-img6.png'
export default function Ourplayful() {
    return (
        <div>
            <div className='container'>
                <div className='ourplayful_heading'>
                    <h1>Explore Our Playful Categories</h1>
                    <p>Lorem ipsum dolor sit amet consectetur. Id viverra cursus enim risus
                        mattis urnanullam quis magna ligula maecenas integer.</p>
                </div>
                <div className='ourplayful_box_main'>
                    <div className='ourplayful_box1'>
                        <div className='ourplayful_box1-img'>
                            <img src={img1} />
                        </div>
                        <p>Game and Puzzle</p>
                    </div>
                    <div className='ourplayful_box2'>
                        <div className='ourplayful_box2-img'>
                            <img src={img2} />
                        </div>
                        <p>Indoor Play</p>
                    </div>
                    <div className='ourplayful_box3'>
                        <div className='ourplayful_box3-img' >
                            <img src={img3} />
                        </div>
                        <p>Toy Figures</p>
                    </div>
                    <div className='ourplayful_box4'>
                        <div className='ourplayful_box4-img'>
                            <img src={img4} />
                        </div>
                        <p>Kids Books</p>
                    </div>
                    <div className='ourplayful_box5'>
                        <div className='ourplayful_box5-img'>
                            <img src={img5} />
                        </div>
                        <p>Rockers and Rides</p>
                    </div>
                    <div className='ourplayful_box6'>
                        <div className='ourplayful_box6-img'>
                            <img src={img6} />
                        </div>
                        <p>Dolls</p>
                    </div>

                </div>

            </div>

        </div>
    )
}
