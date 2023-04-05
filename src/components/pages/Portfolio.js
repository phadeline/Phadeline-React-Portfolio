import React from "react";
import "../../styles/Portfolio.css";
import musicplaylist from "../images/musicplaylist.png";
import gamereview from "../images/gamereview.png";
import weather from "../images/weather.png";
import speeddater from "../images/speeddater.png"

export default function Portfolio() {
  return (
    <div className="allProjects">
      <div>
        <h3 className="title">MY PROJECTS</h3>
      </div>

      <div className="Projects row">
      <div className="project col-lg-5 col-sm-12">
          <img
            src={speeddater}
            className="projectImage"
            alt="Dating App"
          ></img>
          <div className="middle">
            <a
              href="https://github.com/phadeline/video-game-review-app"
              target="_blank"
            >
              <img
                className="icon"
                src="https://img.icons8.com/3d-fluency/94/null/github.png"
              />
            </a>

            <a
              href="https://video-game-reviewer-test.herokuapp.com/login"
              target="_blank"
            >
              <h4 className="text">WEBSITE</h4>
            </a>
          </div>
          <div className="projectcontainer">
            <h3>Game Review App</h3>
            <h4>MongoDB/Mongoose, GraphQL, NodeJS, ApolloServer</h4>
          </div>
        </div>
        <div className="project col-lg-5 col-sm-12">
          <img
            src={gamereview}
            className="projectImage"
            alt="Game Review App"
          ></img>
          <div className="middle">
            <a
              href="https://github.com/phadeline/Speed-Dater"
              target="_blank"
            >
              <img
                className="icon"
                src="https://img.icons8.com/3d-fluency/94/null/github.png"
              />
            </a>

            <a
              href="https://speeddater.herokuapp.com/"
              target="_blank"
            >
              <h4 className="text">WEBSITE</h4>
            </a>
          </div>
          <div className="projectcontainer">
            <h3>Game Review App</h3>
            <h4>CRUD, REST API, Nodejs, Expressjs, Mysql</h4>
          </div>
        </div>
        <div className="project col-lg-5 col-sm-12">
          <img
            src={musicplaylist}
            className="projectImage"
            alt="Music Playlist App"
          ></img>
          <div className="middle">
            <a
              href="https://github.com/phadeline/music-playlist"
              target="_blank"
            >
              <img
                className="icon"
                src="https://img.icons8.com/3d-fluency/94/null/github.png"
              />
            </a>

            <a
              href="https://phadeline.github.io/music-playlist/"
              target="_blank"
            >
              <h4 className="text">WEBSITE</h4>
            </a>
          </div>
          <div className="projectcontainer">
            <h3>Music Playlist App</h3>
            <h4>Third Party API, Javascript, Jquery, DOM Manipulation</h4>
          </div>
        </div>
        <div className="project col-lg-5 col-sm-12">
          <img
            src={weather}
            className="projectImage"
            alt="Weather Forecast App"
          ></img>
          <div className="middle">
            <a
              href="https://github.com/phadeline/Weather-Forecast"
              target="_blank"
            >
              <img
                className="icon"
                src="https://img.icons8.com/3d-fluency/94/null/github.png"
              />
            </a>

            <a
              href=" https://phadeline.github.io/Weather-Forecast/"
              target="_blank"
            >
              <h4 className="text">WEBSITE</h4>
            </a>
          </div>
          <div className="projectcontainer">
            <h3>Weather Forecast App</h3>
            <h4>HTML, CSS, Javascript, 3rd Party API, Responsive Design</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
