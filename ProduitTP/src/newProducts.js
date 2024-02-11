import React from "react";
import Por from "./newProduct";
export default function NewPs(){
    const listP = [
        {
            id: 1,
            price :150 ,
            title: "Gamer HP VICTUS",
            thumbnail: "./pictures/bnb.png",
          },
          {
            id: 2,
            price :130 ,
            title: "Gamer",
            thumbnail: "./pictures/bnb.png",
          },
          {
            id: 3,
            price :210 ,
            thumbnail: "./pictures/bnb.png",
            title: "Chromebook Acer",
          },
          {
            id: 4,
            price :300,
            thumbnail: "./pictures/bnb.png",
            title: "- HUAWEI",
          },
          {
            id: 5,
            price :1030 ,
            thumbnail: "./pictures/bnb.png",
            title: "- HUAWEI",
          }



    ]
    return (
        <>
        {listP.map((x)=>
        <Por produit_date={x}/>
        )}
        </>
    )
}