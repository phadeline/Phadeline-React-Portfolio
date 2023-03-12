import React from "react";
import "../../styles/About.css";
import image from "../images/myimage.jpg";

export default function About() {
  return (
    <div className="container Aboutcontainer">
      <div className="row align-items-center col-lg-12 text-center">
        <div className="Aboutmediv col-lg-6 col-sm-12">
          <h1 className="Aboutme">About Me</h1>
          <p className="aboutmetext">
            I've always been <span className="redcolor"> interested </span>in
            coding but never pursued it because I assumed that I wouldn't be
            good at it. But, I took a
            <span className="redcolor">leap of faith </span>
            and thought myself HTML and CSS. Overtime, I realized that what I
            <span className="redcolor"> love </span>about coding was how
            challenging and intellectually stimulating it is. I enjoy the{" "}
            <span className="redcolor">euphoric</span> feeling that I get when I
            finally solve a coding problem; it's the{" "}
            <span className="redcolor"> greatest feeling </span>in the world and
            I never want to stop experiencing it.
          </p>
        </div>
        <div className="image col-lg-6 col-sm-12 text-center ">
          <img className="myimage" src={image} alt="Phadeline Evra"></img>
        </div>
      </div>
    </div>
  );
}
