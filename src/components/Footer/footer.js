import React from 'react';
import './footer.scss';
import { MM_Logo } from '../../assets/images';
import { FaFacebook, FaInstagram  } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="footer">
            <svg class="svg-curve" viewBox="0 0 1440 79" xmlns="http://www.w3.org/2000/svg">
                <path d="M-100 0C-100 0 218.416 55.835 693.5 55.835C1168.58 55.835 1487 0 1487 0V79H-100V0Z"></path>
            </svg>
            <div className="footer-box">
                <div className="content">
                    <div className="logo">
                        <img src={MM_Logo} alt="Memories in Mold" />
                        <p>Casting memories that last a life time!</p>
                    </div>
                    <div className="contact">
                        <h2>Contact Us</h2>
                        <p>Memories in Mold</p>
                        <p>Regina, SK</p>
                        <p>Phone: +1(306)535-1226</p>
                        <p>Email: memoriesinmold@gmail.com</p>
                    </div>
                    <div className="social">
                        <h2>Follow Us</h2>
                        <div className="social-links">
                            <a href="https://www.instagram.com/memories_in_mold/" target="_blank" rel="noreferrer">
                                <FaInstagram />   
                            </a>
                            <a href="https://www.facebook.com/memoriesinmold" target="_blank" rel="noreferrer">
                                <FaFacebook />
                            </a>
                        </div>
                    </div>
                </div>
                <p className='copyright'>&copy; {new Date().getFullYear()} memories_in_mold. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;