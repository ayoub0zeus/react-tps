import React from "react";
export default function Por(props) {
  return (
    <>
      <div>
        <img src={props.produit_date.thumbnail} height="90px" alt="" />
        <h1>{props.produit_date.title}</h1>
        <button type="button">{props.produit_date.price}</button>
      </div>
    </>
  );
}
