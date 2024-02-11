import React from "react";
import styled from "styled-components";
import Card from "./card";

const Cards = styled.div`
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-auto-rows: auto;
        grid-gap: 1rem;
        `
        export default class CardContainer extends React.Component {
            render() {
                const cardData = [
                    {
                      image: './images/1.png',
                      title: 'Fancy product',
                      price: '$80.00',
                      discountedPrice: null,
                    },
                    {
                      image: './images/1.png',
                      title: 'Special item',
                      price: '$18.00',
                      discountedPrice: '$20.00',
                    },
                    {
                      image: './images/1.png',
                      title: 'Sale item',
                      price: '$25.00',
                      discountedPrice: '$50.00',
                    },
                    {
                      image: './images/1.png',
                      title: 'Popular item',
                      price: '$40.00',
                      discountedPrice: null,
                    },
                  ];
              return (
                <Cards>
                  {/* <Card cardData={cardData} /> */}
                  {cardData.map((item,index)=>(<Card key={index} item={item}/>))}
                </Cards>
              );
            }
          }