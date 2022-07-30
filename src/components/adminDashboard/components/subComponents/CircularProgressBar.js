import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function CircularProgressBar(props) {
  return (
    <>
      <h1 className="text-xl text-center my-5">{props.title}</h1>
      <CircularProgressbar value={props.value} text={`${props.value}%`} />
    </>
  );
}

export default CircularProgressBar;
