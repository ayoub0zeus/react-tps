import React from "react";
import styled from "styled-components";

export default class Footer extends React.Component{
    render(){
        const P = styled.p`
        text-align: center;
        `
        const Foot = styled.footer`
        background-color: #212529;
        color: white;
        padding: 20px;
        margin-top: 40px;
        `

        return(
            <Foot>
                <P>Copyright ©Your website2022</P>
            </Foot>
        )
    }
}