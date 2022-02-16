import React from "react";
import share from '../../img/share.svg';
import filter from '../../img/filter.svg';
import burger from  '../../img/burger.svg';
import show from '../../img/showCard.PNG';


function WomenHeaderDescription(){
    return (
        <div className="HeaderMenProduct">
            <div className='productNavigation'>
                <span>
                    Home

                </span>
                <b>
                    ►Women
                </b>
                <img src={share}/>
                <span>
                        Share
                    </span>
            </div>
            <div className='menCaption'>
                <span>
                    WOMEN
                </span>
            </div>
            <div className='showContent'>
                <img src={filter}/>
                <span> filter
                </span>
                <img src={burger}/>
                <img src={show}/>
            </div>
        </div>
    );
}

export default WomenHeaderDescription;