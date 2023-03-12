import React from "react";
import "../../styles/Resume.css";
import MERN from "../images/MERNStack.png";
import pdf from "../images/Resume.pdf";

export default function Resume() {
  return (
    <div className="everything d-flex flex-lg-column flex-sm-column align-items-center">
      <div className="resume col-lg-4 d-flex justify-content-center">
        <a href={pdf} target="_blank" rel="noreferrer">
          <h4 className="download">Download My Resume</h4>
        </a>
      </div>
      <div className="frontendBackend col-lg-8 col-sm-12 d-flex flex-lg-column flex-sm-column">
        <div className="skillsText text-center">
          <h3 className="skills">SKILLS</h3>
        </div>

        <div className="frontEnd d-flex flex-column col-lg-12">
          <div className="allIcons d-flex d-flex-column justify-content-center text-center">
            <div className="tech col-lg-2 col-sm-3">
              <h4 className=" frontendtext">FrontEnd</h4>
            </div>

            <div className="icons col-lg-2 col-sm-3">
              <img
                className="HTMLimage"
                src="https://img.icons8.com/pulsar-color/96/null/html-filetype.png"
                alt="HTML"
              />
              <p className="HTML">HTML</p>
            </div>

            <div className="icons col-lg-2 col-sm-3">
              <img
                className="CSSimage"
                src="https://img.icons8.com/dusk/100/null/css3.png"
                alt="CSS"
              />
              <p className="CSS">CSS</p>
            </div>

            <div className="icons col-lg-2 col-sm-3">
              <img
                className="javascriptimage"
                src="https://img.icons8.com/dusk/110/null/javascript-logo.png"
                alt="Javascript"
              />
              <p className="javascript">Javascript</p>
            </div>

            <div className="icons col-lg-2 col-sm-3">
              <img
                className="bootstrapimage"
                src="https://img.icons8.com/color/130/null/bootstrap.png"
                alt="Bootstrap"
              />
              <p className="bootstrap">Bootstrap</p>
            </div>

            <div className="icons col-lg-2 col-sm-3">
              <img
                className="reactimage"
                src="https://img.icons8.com/plasticine/120/null/react.png"
                alt="React"
              />
              <p className="react">React</p>
            </div>
          </div>
        </div>

        <div className="backEnd d-flex flex-column col-lg-12">
          <div className="allIcons d-flex d-flex-column justify-content-center text-center ">
            <div className="tech col-lg-2 col-sm-3">
              <h4 className="backendtext">BackEnd</h4>
            </div>

            <div className="icons col-lg-2 col-sm-3">
              <img
                className="nodeimage"
                src="https://img.icons8.com/color/130/null/nodejs.png"
                alt="Node.js"
              />
              <p className="node">Node.js</p>
            </div>

            <div className="icons col-lg-2 col-sm-3">
              <img
                className="expressimage"
                src="https://img.icons8.com/nolan/100/express-js.png"
                alt="Express.js"
              />
              <p className="express">Express.js</p>
            </div>

            <div className="icons col-lg-2 col-sm-3">
              <img
                src="https://img.icons8.com/fluency/120/null/mysql-logo.png"
                alt="MySQL"
                className="mysqlimage"
              />
              <p className="mysql">MySQL</p>
            </div>

            <div className="icons col-lg-2 col-sm-3">
              <img
                src="https://img.icons8.com/color/130/null/mongodb.png"
                alt="MongoDB"
                className="mongodbimage"
              />
              <p className="mongodb">MongoDB</p>
            </div>

            <div className="icons col-lg-2 col-sm-3">
              <img
                src={MERN}
                alt="MERN Stack"
                width={140}
                height={140}
                className="mernimage"
              />
              <p className="mern">MERN Stack</p>
            </div>
            <div className="icons col-lg-2 col-sm-3">
              <img
                src="https://img.icons8.com/color/96/null/data-configuration.png"
                alt="Databse Management"
                width={120}
                className="databaseimage"
              />
              <p className="database">database</p>
            </div>
            <div className="icons col-lg-2 col-sm-3">
              <img
                src="https://img.icons8.com/nolan/96/api-settings.png"
                alt="REST API"
                width={120}
                className="restimage"
              />
              <p className="rest">REST API</p>
            </div>
            <div className="icons col-lg-2 col-sm-3">
              <img
                src="https://img.icons8.com/external-solidglyph-m-oki-orlando/32/null/external-crud-database-solid-solidglyph-m-oki-orlando.png"
                alt="CRUD Methods"
                width={110}
                height={110}
                className="crudimage"
              />
              <p className="crud">CRUD Methods</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
