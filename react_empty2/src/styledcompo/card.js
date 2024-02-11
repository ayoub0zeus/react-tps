import React from "react";
import styled from "styled-components";

const CardWrapper  = styled.div`
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
`
export default class Card extends React.Component {
  render() {
    const { item } = this.props;
    return (
      <CardWrapper >
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
              <P>{item.  price}</P>
            )}
            <Button>Add to cart</Button>
      </CardWrapper>
    );
  }
}
