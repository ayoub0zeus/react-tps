import React from "react";
import styled from "styled-components";
export default class Header extends React.Component {
  render() {
    const Head = styled.header`
      background-color: #a5a8ab98;
      height: 50px;
    `;
    const Ul = styled.ul`
      display: flex;
      justify-content: space-between;
      list-style: none;
      color: black;
    `;
    const Li = styled.li`
      padding: 15px;
    `;
    const Span = styled.span`
      padding: 15px;
    `;
    const Main = styled.div`
      height: 140px;
      background-color: #212529;
      color: white;
      padding: 30px;
    `;
    const P = styled.p`
      text-align: center;
    `;
    const H1 = styled.h1`
      text-align: center;
    `;
    const Div2 = styled.div`
      
    `
    const list = ["Start Bootstrap", "Home", "About", "Shope"];
    return (
      <>
        <Head>
          <Ul>
            {list.map((item, index) => (
              <Li key={index}>{item}</Li>
            ))}
            <Span>
              <Div2>
                Cart <span>0</span>
              </Div2>
            </Span>
          </Ul>
        </Head>
        <Main>
          <H1>Shope in style</H1>
          <P>Lorem ipsum dolor sit amet consectetur adipisicing elit</P>
        </Main>
      </>
    );
  }
}
