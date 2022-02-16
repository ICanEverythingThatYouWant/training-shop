import React from "react";
import faceBookIcon from "../../img/Vector (3).svg";
import twitterIcon from "../../img/Vector (4).svg";
import instagramIcon from "../../img/Vector (5).svg";
import pinterestIcon from "../../img/Vector (6).svg";
import locationIcon from "../../img/location.png";
import phoneIcon from "../../img/Vector (1).svg";
import timeWorkIcon from "../../img/timeFooter.svg";
import mailIcon from "../../img/mailIcon.svg";
import pay1 from "../../img/pay1.svg";
import pay2 from "../../img/pay2.svg";
import pay3 from "../../img/pay3.svg";
import pay4 from "../../img/pay4.svg";
import pay5 from "../../img/pay5.svg";
import pay6 from "../../img/pay6.svg";
import pay7 from "../../img/pay7.svg";




function Footer(){
    return (
        <div>
            <div className='footer'>
                <div className='headerFooter'>
              <span>
                BE IN TOUCH WITH US:
              </span>
                    <input placeholder='Enter your email'></input>
                    <button>
                        Join Us
                    </button>
                    <div className='iconMessengerFooter'>
                        <li>
                            <img src={faceBookIcon} alt='icon'/>
                        </li>
                        <li>
                            <img src={twitterIcon} alt='icon'/>
                        </li>
                        <li>
                            <img src={instagramIcon} alt='icon'/>
                        </li>
                        <li>
                            <img src={pinterestIcon} alt='icon'/>

                        </li>
                    </div>
                </div>
            </div>
            <div className='footerCategories'>
                <div >
                    <ul className='footerDescription'>
                        <p>Categories</p>
                        <li><a href='/Men'>Men</a></li>
                        <li><a href='/Women'>Women</a></li>
                        <li><a href='#'>Accessories</a></li>
                        <li><a href='#'>Beauty</a></li>
                    </ul>
                </div>
                <div >
                    <ul className='footerDescription'>
                        <p>information</p>
                        <li><a href='#'>About Us</a></li>
                        <li><a href='#'>Contact Us</a></li>
                        <li><a href='#'>Blog</a></li>
                        <li><a href='#'>FAQs</a></li>
                    </ul>
                </div>
                <div >
                    <ul className='footerDescription'>
                        <p>Useful links</p>
                        <li><a href='#'>Terms & Conditions Returns </a></li>
                        <li><a href='#'> Returns & Exchanges</a></li>
                        <li><a href='#'> Shipping & Delivery</a></li>
                        <li><a href='#'> Privacy Policy</a></li>
                    </ul>
                </div>
                <div >
                    <ul className='footerDescription'>
                        <p>CONTACT US</p>
                        <li><a href='#'><img src={locationIcon} alt='icon'/>
                            Belarus, Gomel, Lange 17</a></li>
                        <li><a href='#'><img src={phoneIcon}  alt='icon'/>
                            +375 29 100 20 30</a></li>
                        <li><a href='#'><img src={timeWorkIcon} alt='icon'/> All week 24/7</a></li>
                        <li><a href='#'><img src={mailIcon}  alt='icon'/> info@clevertec.ru</a></li>
                    </ul>
                </div>
            </div>
            <div className='footerCopyright'>
                <span>
                    Copyright © 2032 all rights reserved
                </span>
                <img src={pay1}  alt='icon'/>
                <img src={pay2}  alt='icon'/>
                <img src={pay3}  alt='icon'/>
                <img src={pay4}  alt='icon'/>
                <img src={pay5}  alt='icon'/>
                <img src={pay6}  alt='icon'/>
                <img src={pay7}  alt='icon'/>
                <a href='#'>Clevertec.ru/training</a>
            </div>
        </div>
    );
}

export default Footer;