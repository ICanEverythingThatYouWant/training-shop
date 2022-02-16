import Card from "./Card";
import women1 from "../../img/women1.svg";
import women2 from "../../img/women2.svg";
import women3 from "../../img/women3.svg";
import women4 from "../../img/women4.svg";
import women5 from "../../img/women5.svg";
import women6 from "../../img/women6.svg";
import women7 from "../../img/women7.svg";
import women8 from "../../img/women8.svg";

const arrWomen = [
    {name: "Women's tracksuit Q109", price : '$ 30.00', imageUrl: `${women1}`},
    {name: "Women's tracksuit Q109", price : '$ 30.00', imageUrl: `${women2}`},
    {name: "Women's tracksuit Q109", price : '$ 30.00', imageUrl: `${women3}`},
    {name: "Women's tracksuit Q109", price : '$ 30.00', imageUrl: `${women4}`},
    {name: "Women's tracksuit Q109", price : '$ 30.00', imageUrl: `${women5}`},
    {name: "Women's tracksuit Q109", price : '$ 30.00', imageUrl: `${women6}`},
    {name: "Women's tracksuit Q109", price : '$ 30.00', imageUrl: `${women7}`},
    {name: "Women's tracksuit Q109", price : '$ 30.00', imageUrl: `${women8}`}
]

function CardWomen(){
    return (
        <div >
            <div className='womenCard'>
                {arrWomen.map((obj) => (
                    <Card title ={obj.name}
                          price = {obj.price}
                          imageUrl = {obj.imageUrl}

                    />))}
            </div>
            <div className='seeAll'>
                     <span>
                         see all
                     </span>
            </div>
        </div>
    );
}

export default CardWomen;