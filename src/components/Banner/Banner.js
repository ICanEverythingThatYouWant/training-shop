import arrowLeft from "../../img/arrow2.svg";
import arrowRight from "../../img/arrow1.svg";
import rectangle from "../../img/Rectangle.svg";
import women from "../../img/Rectangle (1).svg";
import men from "../../img/Rectangle (2).svg";
import accessories from "../../img/Rectangle (3).svg";
import carIcon from "../../img/Vector12.svg";
import returnIcon from "../../img/Vector13.svg";
import supportIcon from "../../img/Vector14.svg";
import React from "react";

function Banner(){
    return (
        <div>
        <div className='banner'>
            <div className='titleText'>
                <span>Banner</span>
                <span>your Title text </span>
            </div>
            <img className='arrowLeft' src={arrowLeft} alt='icon'/>
            <img className='arrowRight' src={arrowRight} alt='icon'/>
            <img className='imageTitle' src={rectangle} alt='icon'/>
            <img className='womenBanner' src={women} alt='icon'/>
            <div className='titleWomen'>
                <span>Women</span>
            </div>
            <img className='men' src={men} alt='icon'/>
            <div className='titleMen'>
                <span>Men</span>
            </div>
            <img className='access' src={accessories} alt='icon' />
            <div className='accessor'>
                <span>
                    accessories
                    </span>
            </div>
        </div>
    <div className='headerSpecification'>
        <li>
            <img src={carIcon}  alt=''/>
            <a href='/1'>free shipping </a>
            <p className=''>On all UA order or order above $100 </p>

        </li>
        <li>
            <img src={returnIcon} alt='icon'/>
            <a href='/1'>30 DAYS RETURN</a>
            <p className=''>Simply return it within 30 days for an exchange</p>
        </li>
        <li>
            <img src={supportIcon} alt='icon'/>
            <a href='/1'>SUPPORT 24/7</a>
            <p className=''>Contact us 24 hours a day, 7 days a week</p>
        </li>
    </div>
   </div>
    );
}

export default Banner;