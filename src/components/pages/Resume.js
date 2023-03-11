import React from "react";
import "../../styles/Resume.css";
import MERN from "../images/MERNStack.png";

export default function Resume() {
  return (
    <div className="skills d-flex flex-column">
      <div className="resume col-lg-4">Resume</div>
      <div className="frontEnd d-flex flex-column align-items-end">
        <div className="skillsText d-flex flex-column col-lg-8 col-sm-12 text-center">
          <h3>SKILLS</h3>
          <h4>Front End</h4>
        </div>
        <div className="allIcons d-flex col-lg-8 col-sm-12 text-center justify-content-center">
          <div className="icons col-lg-2 col-sm-3">
            <img
              src="https://img.icons8.com/pulsar-color/96/null/html-filetype.png"
              alt="HTML"
            />
          </div>

          <div className="icons col-lg-2 col-sm-3">
            <img
              src="https://img.icons8.com/dusk/100/null/css3.png"
              alt="CSS"
            />
          </div>

          <div className="icons col-lg-2 col-sm-3">
            <img
              src="https://img.icons8.com/dusk/110/null/javascript-logo.png"
              alt="Javascript"
            />
          </div>

          <div className="icons col-lg-2 col-sm-3">
            <img
              src="https://img.icons8.com/color/130/null/bootstrap.png"
              alt="Bootstrap"
            />
          </div>

          <div className="icons col-lg-2 col-sm-3">
            <img
              src="https://img.icons8.com/plasticine/120/null/react.png"
              alt="React"
            />
          </div>
        </div>
      </div>

      <div className="backEnd d-flex flex-column align-items-end">
        <div className="skillsText d-flex flex-column col-lg-8 col-sm-12 text-center">
          <h4>BackEnd</h4>
        </div>
        <div className="allIcons d-flex col-lg-8 col-sm-12 text-center justify-content-center">
          <div className="icons col-lg-2 col-sm-3">
            <img
              src="https://img.icons8.com/color/130/null/nodejs.png"
              alt="Node.js"
            />
          </div>

          <div className="icons col-lg-2 col-sm-3">
            <img
              src="https://img.icons8.com/nolan/100/express-js.png"
              alt="Express.js"
            />
          </div>

          <div className="icons col-lg-2 col-sm-3">
            <img
              src="https://img.icons8.com/fluency/120/null/mysql-logo.png"
              alt="MySQL"
            />
          </div>

          <div className="icons col-lg-2 col-sm-3">
            <img
              src="https://img.icons8.com/color/130/null/mongodb.png"
              alt="MongoDB"
            />
          </div>

          <div className="icons col-lg-2 col-sm-3">
            <img src={MERN} alt="MERN Stack" width={140} height={140} />
          </div>
          <div className="icons col-lg-2 col-sm-3">
            <img
              src="https://img.icons8.com/color/96/null/data-configuration.png"
              alt="Databse Management"
              width={120}
            />
          </div>
          <div className="icons col-lg-2 col-sm-3">
            <img
              src="https://img.icons8.com/nolan/96/api-settings.png"
              alt="REST API"
              width={120}
            />
          </div>
          <div className="icons col-lg-2 col-sm-3">
            <img
              src="https://img.icons8.com/external-solidglyph-m-oki-orlando/32/null/external-crud-database-solid-solidglyph-m-oki-orlando.png"
              alt="CRUD Methods"
              width={110}
              height={110}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
