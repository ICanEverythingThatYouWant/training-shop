import Header from "../Header/Header";
import ManHeaderDescription from "../card/ManHeaderProduct";
import CardMen from "../card/CardMen";

import Footer from "../Footer/Footer";

function Main() {
    return <div className="wrapper">
        <Header/>
        <div className='women'>
            <ManHeaderDescription/>
            <CardMen/>
        </div>
        <Footer/>
    </div>


}

export default Main;
