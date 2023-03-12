import React from "react";
import "../../styles/Footer.css";

export default function Footer() {
  return (
    <footer>
      <h4 className="checkout">Check Out My Socials!</h4>
      <div className="social d-flex justify-content-center">
        <div className="github">
          <a href="https://github.com/phadeline" target="_blank">
            <img
              className="githubimage"
              alt="github logo"
              src="https://img.icons8.com/3d-fluency/94/null/github.png"
            />
          </a>
        </div>
        <div className="linkedin">
          <a
            href="https://www.linkedin.com/in/phadeline-e-37b9b9107/"
            target="_blank"
          >
            <img
              src="https://img.icons8.com/nolan/100/linkedin-circled.png"
              alt="linkedin logo"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
