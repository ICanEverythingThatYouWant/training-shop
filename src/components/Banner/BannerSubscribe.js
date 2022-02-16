import React from 'react'
import bannerBottom1 from "../../img/bottom1.svg";
import bannerBottom2 from "../../img/bottom2.svg";
import bannerBottom3 from "../../img/bottom3.svg";
import bannerBottom4 from "../../img/bottom4.svg";

function BannerSubscribe(){
    return (
       <div><div className='lookBookWithGet'>
           <div className='lookBook'>
               <img src={bannerBottom1} alt='girlBanner'/>
               <div className='bannerBottom'>
                    <span>
                        New Season
                    </span>
                   <span>
                      lookbook collection
                    </span>
               </div>
           </div>
           <div className='lookBook'>
               <img src={bannerBottom2} alt='girlBanner'/>
               <div className='bannerBottom'>
                    <span>
                        sale
                    </span>
                   <span>
                      Get UP to <a href='/1' className='colorText'> 50% off </a>
                    </span>
               </div>
           </div>
       </div>
           <div className='subscribe'>
               <img src={bannerBottom3} alt='girlPicture'/>
               <div className='subscribeBanner'>

                   <span className='offer'>Special Offer</span>
                   <div className='getOff'>
                      <span> Subscribe And <p>Get 10% Off</p>
                          </span>
                   </div>
                   <a href='/1'>Enter your email</a>
                   <button>subscribe</button>
                   <img src={bannerBottom4} alt='menPicture'/>

               </div>
           </div></div>
    );
}

export default BannerSubscribe;