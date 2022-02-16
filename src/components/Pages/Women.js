import React from "react";
import Header from "../Header/Header";
import CardWomen from "../card/CardWomen";
import Footer from "../Footer/Footer";
import WomenHeaderProduct from "../card/WomenHeaderProduct";


function Women(){
    return <div className="wrapper">
        <Header/>
        <div className='women'>
            <WomenHeaderProduct/>
            <CardWomen/>
        </div>
        <Footer/>
    </div>
}

export default Women;