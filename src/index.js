import React from "react";
import ReactDOM from "react-dom";

function Card(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <img src={props.img} alt="avatar_img" />
      <p>{props.tel}</p>
      <p>{props.email}</p>
    </div>
  );
}

ReactDOM.render(
  <div>
    <h1>My Contacts</h1>
    <Card
      name="Beyonce"
      img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
      tel="+123 456 789"
      email="b@beyonce.com"
    />
    <Card
      name="James Bond"
      img="https://hips.hearstapps.com/hmg-prod/images/casino-royale-james-bond-daniel-craig-1548342795.jpg?crop=0.566xw:1.00xh;0.332xw,0&resize=360:*"
      tel="555 0123"
      email="j.bond@MI6.com"
    />
  </div>,
  document.getElementById("root")
);
