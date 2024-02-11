import css from "./style.css";
import React, { Component } from "react";
import SoundPlayer from "./soundPlayer";

class Soundcontainer extends Component {
  render() {
    const list = [
      {
        lienMp3: "/sounds/marimba-for-smartphone-151931.mp3",
        image: "./images/111.png",
        length: 13,
        titre: "Marimba For Smartphone",
        description: "Sonnerie unique et captivante.",
      },
      {
        lienMp3: "/sounds/original-phone-ringtone-36558.mp3",
        image: "./images/222.png",
        length: 20,
        titre: "Original Phone Ringtone",
        description: "Sonnerie unique et captivante.",
      },
      {
        lienMp3: "/sounds/church-clock-strikes-5-74801.mp3",
        image: "./images/333.png",
        length: 8,
        titre: "Church Clock Strikes 5",
        description: "Sonnerie unique et captivante.",
      },
      {
        lienMp3: "/sounds/bell-123742.mp3",
        image: "./images/444.png",
        length: 6,
        titre: "Mobile Phone Nokia 8210 Three Ringtones",
        description: "Sonnerie unique et captivante.",
      },
      {
        lienMp3: "/sounds/bell-123742.mp3",
        image: "./images/555.png",
        length: 18,
        titre: "Bell",
        description: "Sonnerie unique et captivante.",
      },
      {
        lienMp3: "/sounds/simple-notification-152054.mp3",
        image: "./images/666.png",
        length: 7,
        titre: "Simple Notification",
        description: "Sonnerie unique et captivante.",
      },
      {
        lienMp3: "/sounds/phone-calling-153844.mp3",
        image: "./images/777.png",
        length: 16,
        titre: "Phone Calling",
        description: "Sonnerie unique et captivante.",
      },
      {
        lienMp3: "/sounds/office_phone-ring_medium-loudaif-14604.mp3",
        image: "./images/888.png",
        length: 21,
        titre: "Office Phone Ring Medium Loudaif",
        description: "Sonnerie unique et captivante.",
      },
      {
        lienMp3: "/sounds/clock-alarm-8761.mp3",
        image: "./images/888.png",
        length: 9,
        titre: "Clock Alarm",
        description: "Sonnerie unique et captivante.",
      },
      {
        lienMp3: "/sounds/ringtone-126505.mp3",
        image: "./images/888.png",
        length: 29,
        titre: "Ringtone",
        description: "Sonnerie unique et captivante.",
      },
      {
        lienMp3: "/sounds/telephone-dial-and-call-ring-21151.mp3",
        image: "./images/888.png",
        length: 22,
        titre: "Telephone Dial And Call Ring",
        description: "Sonnerie unique et captivante.",
      },
    ];

    return (
      <div className="sound">
        {list.map((el) => {return <SoundPlayer sound={el} />;})}
      </div>
    );
  }
}
export default Soundcontainer;
