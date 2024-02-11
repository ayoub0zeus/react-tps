import Product from "./product";
import React from "react";

function Products() {
  const produits = [
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
    },
  ];

  
  return (
    <div class="container">
      <div class="row">
        {produits.map((produit, index) => {
          return <Product key={index} data={produit} />;
        })}
      </div>
    </div>
  );
}
export default Products;

