import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import share from "../../img/share.svg";
import ratingIcon1 from "../../img/ratingIcon1.svg";
import arrowUp from "../../img/arrowUp.svg";
import arrowDown from "../../img/arrowDown.svg";
import positionProduct1 from "../../img/positionItem1.svg";
import positionProduct2 from "../../img/positionItem2.svg";
import positionProduct3 from "../../img/positionItem3.svg";
import positionProduct4 from "../../img/positionItem4.svg";
import showProduct from "../../img/showProduct.svg";
import colorProduct1 from "../../img/colorProduct1.svg";
import colorProduct2 from "../../img/colorProduct2.svg";
import colorProduct3 from "../../img/colorProduct3.svg";
import colorProduct4 from "../../img/colorProduct4.svg";
import sigeGuide from  "../../img/sigeGuide.svg";
import heartIcon from  "../../img/heartIcon.svg";
import balans from  "../../img/balans.svg";
import carProduct from "../../img/carProduct.svg";
import reloadedProduct from "../../img/reloadedProduct.svg";
import mailIconProduct from "../../img/mailIconProduct.svg";
import methodPay1 from "../../img/methodPay1.svg";
import methodPay2 from "../../img/methodPay2.svg";
import methodPay3 from "../../img/methodPay3.svg";
import methodPay4 from "../../img/methodPay4.svg";
import methodPay5 from "../../img/methodPay5.svg";
import methodPay6 from "../../img/methodPay6.svg";
import methodPay7 from "../../img/methodPay7.svg";
import rating from  "../../img/ratingIcon1.svg";
import message from "../../img/message-svgrepo-com.svg";
import Card from "../card/Card";
import React from "react";
import arrowLeft from "../../img/arrow1.svg";
import arrowRight from "../../img/arrow2.svg";
import recommendation1 from "../../img/reccomended1.svg";
import recommendation2 from "../../img/reccomended2.svg";
import recommendation3 from "../../img/reccomended3.svg";
import recommendation4 from "../../img/reccomended4.svg";


const arrWomen = [
    {name: "Women's tracksuit Q109", price : '$ 30.00', imageUrl: `${recommendation1}`},
    {name: "Women's tracksuit Q109", price : '$ 30.00', imageUrl: `${recommendation2}`},
    {name: "Women's tracksuit Q109", price : '$ 30.00', imageUrl: `${recommendation3}`},
    {name: "Women's tracksuit Q109", price : '$ 30.00', imageUrl: `${recommendation4}`},
]

function ProductPage() {
    return <div className="wrapper">
        <Header/>
        <div className="HeaderMenProduct">
            <div className='productPage-navigation__title'>
                <span>
                    Home

                </span>
                <b>
                   ► Women►Women's tracksuit Q109
                </b>
                <img src={share} alt='icon'/>
                <span>
                        Share
                    </span>
            </div>
            <div className='product-page__title'>
                <span>
                    Women's tracksuit Q109
                </span>
            </div>
            <div className='productPage-rating__description'>
                <img src={ratingIcon1} alt='ratingIcon' />
                <img src={ratingIcon1} alt='ratingIcon' />
                <img src={ratingIcon1} alt='ratingIcon' />
                <img src={ratingIcon1} alt='ratingIcon' />
                <img src={ratingIcon1} alt='ratingIcon' />
                <span> 2 Reviews</span>
                <span> SKU:</span>
                <b> 777</b>
                <span>Availability: </span>
                <b>In stock</b>
            </div>
            <div className='arrows'>
                <img src={arrowUp} alt='' />
                <img src={arrowDown} alt='' />
            </div>
            <div className='show-product__item'>
                <img src={positionProduct1} alt='' />
                <img src={positionProduct2} alt='' />
                <img src={positionProduct3} alt='' />
                <img src={positionProduct4} alt='' />
            </div>
            <div className='main-product__item'>
                <img src={showProduct} alt='' />
                <img src={arrowRight} alt=''/>
                <img src={arrowLeft} alt=''/>
                <span>
                  Color:
                </span>
                <b>
                    Blue
                </b>
                <span>
                    Size:
                </span>
                <b>
                    S
                </b>
            </div>
            <div className='content-product__Color'>
                <img src={colorProduct1} alt=''/>
                <img src={colorProduct2} alt=''/>
                <img src={colorProduct3} alt=''/>
                <img src={colorProduct4} alt=''/>
            </div>
           <div className='product-item__size'>
               <ul>
                <li>
                    <span>
                        XS
                    </span>
                </li>
                <li>
                    <span>
                        S
                    </span>
                </li>
                <li>
                    <span>
                        M
                    </span>
                </li>
                <li>
                    <span>
                        L
                    </span>
                </li>
            </ul>
               <img src={sigeGuide} alt=''/>
               <p>
                   Size guide
               </p>
               <div className='waterLine'>
               </div>
           </div>
            <div className="product-item__price">
                   <span>
                    $ 379.99
                   </span>
                <button>
                    Add to card
                </button>
                <img src={heartIcon} alt=''/>
                <img src={balans} alt=''/>
            </div>
            <div className='water-line__price'>
            </div>
            <div className='product-item__help'>
                <img src={carProduct} alt='icon'/>
                <span>Shipping & Delivery</span>
                <img src={reloadedProduct} alt='icon'/>
                <span>Returns & Exchanges</span>
                <img src={mailIconProduct} alt='icon'/>
                <span>Ask a question</span>
            </div>
            <div className='product-method__pay'>
                <span>
                    guaranteed safe checkout
                </span>
                <div className='pay-method'>
                <img src={methodPay1} alt='icon'/>
                <img src={methodPay2} alt='icon'/>
                <img src={methodPay3} alt='icon'/>
                <img src={methodPay4} alt='icon'/>
                <img src={methodPay5} alt='icon'/>
                <img src={methodPay6} alt='icon'/>
                <img src={methodPay7} alt='icon'/>
                </div>
            </div>
            <div className='product-item__description'>
                <ul>
                    <li>
                        <span>
                            DESCRIPTION
                        </span>
                    </li>
                    <li>
                        <b>
                            ADDITIONAL INFORMATION
                        </b>
                    </li>
                    <li>
                        <b>
                            Color:
                        </b>
                        <span> Blue, White, Black, Grey</span>
                    </li>
                    <li>
                        <b>
                            Size:
                        </b>
                        <span> XS, S, M, L</span>
                    </li>
                    <li>
                        <b>
                            Material:
                        </b>
                        <span> 100% Polyester</span>
                    </li>
                </ul>
            </div>
            <div className='product-item__reviews'>
                <span className='reviews'>
                    REVIEWS
                </span>
                <div className='product-item__write'>
                    <img src={rating} alt='icon'/>
                    <img src={rating} alt='icon'/>
                    <img src={rating} alt='icon'/>
                    <img src={rating} alt='icon'/>
                    <img src={rating} alt='icon'/>
                    <span>2 Reviews </span>
                    <img className='iconMessage' src={message} alt='icon'/>
                    <span>Write a review </span>
                </div>
                <div className='product-item__comment'>
                    <b>Oleh Chabanov </b>
                    <div className='image'>
                    <img src={rating} alt='icon'/>
                    <img src={rating} alt='icon'/>
                    <img src={rating} alt='icon'/>
                    <img src={rating} alt='icon'/>
                    <img src={rating} alt='icon'/>
                    </div>
                    <span>On the other hand, we denounce with righteous indignation and like men who are so beguiled and demoralized by the charms of pleasure of the moment </span>
                    <b>ShAmAn design </b>
                    <div className='lastComment'>
                    <img src={rating} alt='icon'/>
                    <img src={rating} alt='icon'/>
                    <img src={rating} alt='icon'/>
                    <img src={rating} alt='icon'/>
                    <img src={rating} alt='icon'/>
                    </div>
                    <span>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti </span>
                </div>
            </div>
            <div className="related-item__products">
                <span>
                    RELATED PRODUCTS
                </span>
                <div className='arrow-item__related'>
                <img src={arrowRight} alt='icon'/>
                <img src={arrowLeft} alt='icon'/>
                </div>
                <div className='womenCard'>
                    {arrWomen.map((obj) => (
                        <Card title ={obj.name}
                              price = {obj.price}
                              imageUrl = {obj.imageUrl}

                        />))}
                </div>
            </div>
        </div>
        <Footer/>
    </div>


}

export default ProductPage;
