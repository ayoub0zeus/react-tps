import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: auto;
  grid-gap: 1rem;
`;

const Card = styled.div`
  border: 2px solid #e7e7e7;
  border-radius: 4px;
  padding: 0.5rem;
  margin-top: 40px;
`;

const Img = styled.div`
  height: 60%;
  width: 100%;

  img {
    width: 100%;
    height: 100%;
  }
`;

const Button = styled.button`
  margin-left: 90px;
  background-color: white;
  border: 1px solid black;
  color: black;
  width: 110px;
  height: 30px;
`;

const P = styled.p`
  text-align: center;
`;

export default class Cardtest extends React.Component {
  render() {
    const cardData = [
      {
        image: "./images/1.png",
        title: "Fancy product",
        price: "$80.00",
        discountedPrice: null,
      },
      {
        image: "./images/1.png",
        title: "Special item",
        price: "$18.00",
        discountedPrice: "$20.00",
      },
      {
        image: "./images/1.png",
        title: "Sale item",
        price: "$25.00",
        discountedPrice: "$50.00",
      },
      {
        image: "./images/1.png",
        title: "Popular item",
        price: "$40.00",
        discountedPrice: null,
      },
    ];

    return (
      <CardContainer>
        {cardData.map((item, index) => (
          <Card key={index}>
            <Img>
              <img src={item.image} alt="" />
            </Img>
            <P>{item.title}</P>
            {item.discountedPrice ? (
              <P>
                <s>{item.discountedPrice}</s>
                {item.price}
              </P>
            ) : (
              <P>{item.price}</P>
            )}
            <Button>Add to cart</Button>
          </Card>
        ))}
      </CardContainer>
    );
  }
}


