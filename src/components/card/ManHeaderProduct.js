import React from "react";
import share from '../../img/share.svg';
import filter from '../../img/filter.svg';
import burger from  '../../img/burger.svg';
import show from '../../img/showCard.PNG';


function ManHeaderProduct(){
    return (
        <div className="HeaderMenProduct">
            <div className='productNavigation'>
                <span>
                    Home

                </span>
                <b>
                    ►Men
                </b>
                    <img src={share} alt='icon'/>
                    <span>
                        Share
                    </span>
            </div>
            <div className='menCaption'>
                <span>
                    MEN
                </span>
            </div>
            <div className='showContent'>
                <img src={filter} alt='icon'/>
                <span> filter
                </span>
                <img src={burger} alt='icon'/>
                <img src={show} alt='icon'/>
            </div>
        </div>
    );
}

export default ManHeaderProduct;