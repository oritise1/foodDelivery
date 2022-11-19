import React from "react";
import "./index.css";
const About = (props) => {
  return (
    <div className="textWrapper">
      <h2
        className="headerWrapper"
        // style={{ textAlign: props.center && "center" }}
      >
        {props.text}
      </h2>
      <div
        className="subtextWrapper"
        // style={{ textAlign: props.center && "center" }}
      >
        <p>{props.subtext}</p>
      </div>
    </div>
  );
};

export default About;
