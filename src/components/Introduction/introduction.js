import './introduction.scss';
import { useState, useRef, useEffect } from 'react';
import { easeIn, easeInOut, motion } from 'framer-motion';
import { Main_photo1, Main_photo2, Main_video } from '../../assets/images';

const Introduction = () => {
  return (
    <div className='introduction-container'>
        <h1 className="hidden">Hidden sectionHand Casting in Regina – Memories in Mold | Couples, Family & Baby Keepsakes</h1>
        <div className='introduction'>
            <div className='name'>
                <h1>
                    <span className='span1'>Creating</span> <br/> 
                    <span className='span2'>memories</span> <br/>
                    <span className="span3">that last a lifetime!</span>
                </h1>
            </div>
            <div className='display-container'>
                <div className='inner-container'>
                    <div className="photo1">
                        <img src={Main_photo2}></img>
                    </div>
                    <div className="video">
                        <video autoPlay loop muted>
                            <source src={Main_video} type="video/mp4"/>
                        </video>
                    </div>
                    <div className="photo2">
                        <img src={Main_photo1}></img>
                    </div>
                </div>
            </div>
        </div>

        {/* Hidden SEO text for keywords */}
        <div style={{ position: "absolute", left: "-9999px" }} aria-hidden="false">
          Professional hand casting in Regina, Saskatchewan for couples, families, and newborns.
          Custom molds for weddings, anniversaries, and family keepsakes.
        </div>
        
        {/* <svg className="svg-curve" viewBox="0 0 1440 79" xmlns="http://www.w3.org/2000/svg">
          <path d="M-100 79C-100 79 218.416 23.165 693.5 23.165C1168.58 23.165 1487 79 1487 79V0H-100V79Z"></path>
        </svg> */}
    </div>
  )
}

export default Introduction;