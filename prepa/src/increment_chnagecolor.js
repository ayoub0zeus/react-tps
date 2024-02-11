import { useState } from 'react';
import styled from 'styled-components';

function Inc() {
  const [number,setNumber]=useState(0)
  const [color,setColor]=useState('red')
  const inc = ()=>{
    setNumber (number + 1)
  }
  const changecolor = ()=>{
    setColor('green')
  }
  
  const Test =styled.p`
  width:50%;
  hieght : 100px;
  background-color:${color};
  `
  

  return (
    <>
    <p>increment  : {number}</p>
    <button onClick={inc}>Click me</button>


    <Test >lorem ipusm delive ufbdi cijirnv cu33nv vnvviu3</Test>
    <button onClick={changecolor}>change color</button>
    
    
    </>
  );
}

export default Inc;
