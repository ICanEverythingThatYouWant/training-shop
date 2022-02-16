import React from "react";

import Blog from "../Banner/Blog";
import Header from "../Header/Header";
import Banner from "../Banner/Banner";
import WomenHeader from "../card/WomenHeader";
import ManHeader from "../card/ManHeader";
import BannerSubscribe from "../Banner/BannerSubscribe";
import CardMen from "../card/CardMen";
import CardWomen from "../card/CardWomen";
import Footer from "../Footer/Footer";


function Main() {
    return <div className="wrapper">
        <Header/>
        <Banner/>
        <div className='women'>
            <WomenHeader/>
            <CardWomen/>
            <ManHeader/>
            <CardMen/>
            <BannerSubscribe/>
            <Blog/>
        </div>
        <Footer/>
    </div>
}

export default Main;
