import React, { useState } from "react";
import "../../styles/Contact.css";

function Form() {
  // Create state variables for the fields in the form
  // We are also setting their initial values to an empty string
  const [email, setEmail] = useState("");

  const [emailbody, setemailbody] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, username, and password
    if (inputType === "email") {
      setEmail(inputValue);
    } else if (inputType === "message") {
      setemailbody(inputValue);
      console.log(inputValue);
    }
  };

  //
  const notification = () => {
    let emailblank = document.querySelector(".email").value;

    if (emailblank === "") {
      setErrorMessage(`Must enter a valid email address!`);

      return;
    }
    setErrorMessage("");
  };

  const alert = () => {
    let messageblank = document.querySelector(".emailbody").value;

    if (messageblank === "") {
      setErrorMessage(`Message cannot be left empty!`);

      return;
    }
    setErrorMessage("");
  };

  return (
    <div className="d-flex flex-lg-row flex-sm-column allContainer">
      <div className="col-lg-6">
        <h2 className="portfolio">Thank You For Viewing my portfolio!</h2>
        <h3 className="inquire">
          If you have any questions or inquiries please contact me using this
          form.
        </h3>
      </div>

      <div className="formContainer col-lg-6 col-sm-12">
        <form
          className="form d-flex flex-column col-sm-12"
          action={`mailto:phadelinee@gmail.com?subject=Inquiry&body=${emailbody}`}
          method="POST"
          encType="text/plain"
          name="EmailForm"
        >
          <div className="text-center">
            <input
              className="email col-lg-6 col-sm-12 col-md-6"
              value={email}
              name="email"
              onChange={handleInputChange}
              type="email"
              placeholder="Email"
              onBlur={notification}
            />
            {errorMessage && (
              <div>
                <p className="error-text">{errorMessage}</p>
              </div>
            )}
          </div>
          <div className="textarea text-center">
            <textarea
              className="emailbody col-lg-6 col-sm-12 col-md-6"
              value={emailbody}
              name="message"
              onChange={handleInputChange}
              type="emailbody"
              placeholder="Enter message here"
              onBlur={alert}
            />
          </div>

          <div className="submit d-flex justify-content-center text-center">
            <button type="submit" value="Submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form;
