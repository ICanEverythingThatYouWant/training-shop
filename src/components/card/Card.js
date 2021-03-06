import ratingIcon1 from "../../img/ratingIcon1.svg";
import ratingIcon0 from "../../img/ratingIcon0.svg";
import React from "react";
import {Link} from "react-router-dom";




function Card(props){
    return (
            <div className='card'>
               <Link to='/ProductPage'><img src={props.imageUrl} alt="womenCardPicture"/></Link>
                <div className='cardDescription'>
                    <span>{props.title}</span>
                    <span>{props.price}</span>
                    <div className='rating'>
                    <img src={ratingIcon1} alt='ratingIcon' />
                    <img src={ratingIcon1} alt='ratingIcon' />
                    <img src={ratingIcon1} alt='ratingIcon' />
                    <img src={ratingIcon1} alt='ratingIcon' />
                    <img src={ratingIcon0} alt='ratingIcon' />
                </div>
                </div>
            </div>
    );
}

export default Card;