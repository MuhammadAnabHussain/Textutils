import "./App.css";
import Navbar from "./components/Navbar";
import Mybox from "./components/Mybox";
//import AboutUs from "./components/AboutUs";
import React, { useState } from "react";

function App() {
  const [mode, setmode] = useState("light"); //whether dark mode is enabled or not

  const toggleMode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#112c54";
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
    }
  };
  return (
    <>
      <Navbar
        title="textutils"
        homeText="Home"
        aboutText="About us"
        mode={mode} //whether dark mode or light mode
        toggleMode={toggleMode}
      />
      <div className="container my-3">
        <Mybox heading="Enter the text to Analyze Below " mode={mode} />
        {/* <AboutUs /> */}
      </div>
    </>
  );
}

export default App;
