import React from "react";
import men1 from "../../img/man1.svg";
import men2 from "../../img/man2.svg";
import men3 from "../../img/man3.svg";
import men4 from "../../img/man4.svg";
import men5 from "../../img/man5.svg";
import men6 from "../../img/man6.svg";
import men7 from "../../img/man7.svg";
import men8 from "../../img/man8.svg";
import Card from "./Card";

const arrMen = [
    {name: "Women's tracksuit Q109", price : '$ 30.00', imageUrl: `${men1}`},
    {name: "Women's tracksuit Q109", price : '$ 30.00', imageUrl: `${men2}`},
    {name: "Women's tracksuit Q109", price : '$ 30.00', imageUrl: `${men3}`},
    {name: "Women's tracksuit Q109", price : '$ 30.00', imageUrl: `${men4}`},
    {name: "Women's tracksuit Q109", price : '$ 30.00', imageUrl: `${men5}`},
    {name: "Women's tracksuit Q109", price : '$ 30.00', imageUrl: `${men6}`},
    {name: "Women's tracksuit Q109", price : '$ 30.00', imageUrl: `${men7}`},
    {name: "Women's tracksuit Q109", price : '$ 30.00', imageUrl: `${men8}`}
]

function CardMen(){
    return (
        <div >
            <div className='womenCard'>
                {arrMen.map((obj) => (
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

export default CardMen;