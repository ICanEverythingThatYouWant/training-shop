import phoneIcon from "../../img/Vector (1).svg";
import locationIcon from "../../img/Vector.svg";
import timeWorkIcon from "../../img/Vector (2).svg";
import faceBookIcon from "../../img/Vector (3).svg";
import twitterIcon from "../../img/Vector (4).svg";
import instagramIcon from "../../img/Vector (5).svg";
import pinterestIcon from "../../img/Vector (6).svg";
import CleverShopLogo from "../../img/CleverShop.svg";
import searchIcon from "../../img/Vector7.svg";
import worldIcon from "../../img/Vector8.svg";
import personIcon from "../../img/4092564-about-mobile-ui-profile-ui-user-website_114033.svg";
import shopIcon from "../../img/Vector 11.svg";
import React from "react";


function Header(){
    return (
        <div>
        <div className='headerInfo'>
            <div className='headerDescription'>
                <li>
                    <img src={phoneIcon}  alt='icon'/>
                    <a href='1' className='textNumber'> +375 29 100 20 30 </a>
                </li>
                <li>
                    <img src={locationIcon} alt='icon'/>
                    <a href='1' className="textLocation">Belarus, Gomel, Lange 17 </a>
                </li>
                <li>
                    <img src={timeWorkIcon} alt='icon'/>
                    <a href='1' className='textTimeWork'>All week 24/7</a>
                </li>
                <div className='iconMessenger'>
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
    <div className='headerNavigation'>
        <a href="/Main" className='logo' > <img src={CleverShopLogo}  alt='agag'/>
        </a>
        <ul className='mnu_top'>
            <li><a href='1'>About Us</a></li>
            <li><a href="/Women">Women</a></li>
            <li><a href='/Men'>Men</a></li>
            <li><a href='1'>Beauty</a></li>
            <li><a href='1'>Accessories</a></li>
            <li><a href='1'>Blog</a></li>
            <li><a href='1'>Contact</a></li>
        </ul>
        <ul className='mnu_right'>
            <li>
                <img src={searchIcon} alt='icon'/>
            </li>
            <li>
                <img src={worldIcon} alt='icon'/>
            </li>
            <li>
                <img src={personIcon} alt='icon'/>
            </li>
            <li>
                <span className='shopCount'>2</span>
                <img src={shopIcon} alt='icon'/>
            </li>
        </ul>
    </div>
        </div>
    );
}

export default Header;