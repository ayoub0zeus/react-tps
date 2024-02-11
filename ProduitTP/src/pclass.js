// import React from "react";
// export default class P extends React.Component {
//   constructor(props) {
//     super(props);
//     this.thumbnail = props.data.thumbnail;
//     // this.price=props.data.price
//     // this.title=props.data.title
//     this.state = {
//       price: this.props.data.price,
//       title: this.props.data.title,
//     };
//   }
//   change = () => {
//     this.setState({ price: this.state.price + 1 });
//   };
//   //   changetitle = () => {
//   //     this.setState({
//   //       title: "New Name",
//   //     });
//   //   };

//   changetitle = () => {
//     const newTitle = prompt("Enter the new name:");
//     if (newTitle !== null) {
//       this.setState({
//         title: newTitle,
//       });
//     }
//   };
//   render() {
//     return (
//       <>
//         <img src={this.thumbnail} height="40px" alt="" />
//         <br />
//         <h1>{this.state.title}</h1>
//         <button onClick={this.changetitle}>changer nom</button>
//         <hr />
//         <p type="p">{this.state.price}</p>

//         <button onClick={this.change}>editer</button>
//       </>
//     );
//   }
// }
// B FUNCTION

import React, { useState } from "react";
export default function Pp(props) {
  const [price, setPrice] = useState(props.data.price);
  const [title, setTitle] = useState(props.data.title);
  const thumbnail = props.data.thumbnail;
  const change = () => {
    setPrice(price + 1);
  };
  const changeTitle = () => {
    setTitle("New Name");
  };
  return (
    <>
      <img src={thumbnail} height="40px" alt="" />
      <br />
      <h1>{title}</h1>
      <button onClick={changeTitle}>changer nom</button>
      <hr />
      <p type="p">{price}</p>
      <button onClick={change}>editer</button>
    </>
  );
}
