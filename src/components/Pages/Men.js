import Header from "../Header/Header";
import ManHeaderProduct from "../card/ManHeaderProduct";
import CardMen from "../card/CardMen";

import Footer from "../Footer/Footer";

function Main() {
    return <div className="wrapper">
        <Header/>
        <div className='women'>
            <ManHeaderProduct/>
            <CardMen/>
        </div>
        <Footer/>
    </div>


}

export default Main;
