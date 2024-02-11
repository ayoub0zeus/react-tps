import React from "react";
import P from "./pclass";
import Pp from "./pclass";
// export default class Ps extends React.Component {
//   render() {
//     const listPs = [
//       {
//         id: 1,
//         price: 150,
//         title: "Gamer HP VICTUS",
//         thumbnail: "./pictures/bnb.png",
//       },
//       {
//         id: 2,
//         price: 130,
//         title: "Gamer",
//         thumbnail: "./pictures/bnb.png",
//       },
//       {
//         id: 3,
//         price: 210,
//         thumbnail: "./pictures/bnb.png",
//         title: "Chromebook Acer",
//       },
//       {
//         id: 4,
//         price: 300,
//         thumbnail: "./pictures/bnb.png",
//         title: "- HUAWEI",
//       },
//       {
//         id: 5,
//         price: 1030,
//         thumbnail: "./pictures/bnb.png",
//         title: "- HUAWEI",
//       },
//     ];
//     return (
//       <>
//         {listPs.map((el) => (
//           <p data={el} />
//         ))}
//       </>
//     );
//   }
// }
// B FUNCTION
export default function Pps() {
  const listPs = [
    {
      id: 1,
      price: 150,
      title: "Gamer HP VICTUS",
      thumbnail: "./pictures/bnb.png",
    },
    {
      id: 2,
      price: 130,
      title: "Gamer",
      thumbnail: "./pictures/bnb.png",
    },
    {
      id: 3,
      price: 210,
      thumbnail: "./pictures/bnb.png",
      title: "Chromebook Acer",
    },
    {
      id: 4,
      price: 300,
      thumbnail: "./pictures/bnb.png",
      title: "- HUAWEI",
    },
    {
      id: 5,
      price: 1030,
      thumbnail: "./pictures/bnb.png",
      title: "- HUAWEI",
    },
  ];
  return (
    <>
      {listPs.map((el) => (
        <Pp data={el} />
      ))}
    </>
  );
}
