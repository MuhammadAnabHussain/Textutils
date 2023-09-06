import React, { useState } from "react";

export default function (props) {
  const [text, settext] = useState("");
  const handleUpperCase = () => {
    // console.log("upper case was clicked");
    let newText = text.toUpperCase();
    settext(newText);
    props.showAlert("converted to Upper Case!", "success");
  };
  const handleLowerCase = () => {
    // console.log("Lower case was clicked");
    let newText = text.toLowerCase();
    settext(newText);
    props.showAlert("converted to Lower Case!", "success");
  };
  const handlefirstletter = () => {
    const words = text.split(" ");
    const capitalizedWords = words.map((word) => {
      if (word.length > 0) {
        return word.charAt(0).toUpperCase() + word.slice(1);
      } else {
        return word; // Handle empty words
      }
    });
    const capitalizedText = capitalizedWords.join(" ");
    settext(capitalizedText);
    props.showAlert("first character of every word is capital!", "success");
  };
  const handleClearCase = () => {
    // console.log("Clear case was clicked");
    let newText = "";
    settext(newText);
    props.showAlert("all text is clear!", "success");
  };
  const handleOnChanged = (event) => {
    // console.log("on change");
    settext(event.target.value);
  };

  return (
    <>
      <div
        className="container "
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChanged}
            id="myBox"
            rows="10"
            style={{
              color: props.mode === "dark" ? "white" : "dark",
              backgroundColor: props.mode === "dark" ? "#c7d4e0d4" : "white",
            }}
          ></textarea>
        </div>

        <button
          className={`btn btn-${props.btnMode} mx-2 my-2`}
          onClick={handleUpperCase}
          disabled={text.length === 0}
        >
          Convert to uppercase
        </button>
        <button
          className={`btn btn-${props.btnMode} mx-2 my-2`}
          onClick={handleLowerCase}
          disabled={text.length === 0}
        >
          Convert to lowercase
        </button>
        <button
          className={`btn btn-${props.btnMode} mx-2 my-2`}
          onClick={handleClearCase}
          disabled={text.length === 0}
        >
          Clear Text
        </button>
        <button
          className={`btn btn-${props.btnMode} mx-2 my-2`}
          onClick={handlefirstletter}
          disabled={text.length === 0}
        >
          Capitalize
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h2>your summary</h2>
        <p>
          <big>
            {
              text.split(/\s+/).filter((element) => {
                return element.length !== 0;
              }).length
            }
            words
          </big>
        </p>
        <p>
          <big>{text.length} characters</big>
        </p>
        <p>
          <big>
            {text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length * 0.008}{" "}
            minutes read
          </big>
        </p>
        <h2>Preview</h2>
        <p>{text.length === 0 ? "Nothing to preview !" : text}</p>
      </div>
    </>
  );
}
