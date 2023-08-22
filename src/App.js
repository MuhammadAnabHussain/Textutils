import "./App.css";
import Navbar from "./components/Navbar";
import Mybox from "./components/Mybox";
//import AboutUs from "./components/AboutUs";
import React, { useState } from "react";
import Alert from "./components/Alert";

function App() {
  const [mode, setMode] = useState("light"); //whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);
  const [btnMode, setBtnMode] = useState("primary");
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  };

  const darkToggleMode = () => {
    if (mode === "light") {
      setMode("dark");

      document.body.style.backgroundColor = "#112c54";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    }
  };

  const greenToggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      setBtnMode("success");
      document.body.style.backgroundColor = "#347a5a";
      showAlert("green mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    }
  };

  const redToggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      setBtnMode("danger");
      document.body.style.backgroundColor = "#762028";
      showAlert("red mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    }
  };
  return (
    <>
      <Navbar
        title="textutils"
        homeText="Home"
        aboutText="About us"
        mode={mode} //whether mode is dark or not
        darkToggleMode={darkToggleMode}
        greenToggleMode={greenToggleMode}
        redToggleMode={redToggleMode}
      />
      <Alert alert={alert} />
      <div className="container my-3">
        <Mybox
          heading="Enter the text to Analyze Below "
          mode={mode}
          showAlert={showAlert}
          btnMode={btnMode}
        />
        {/* <AboutUs /> */}
      </div>
    </>
  );
}

export default App;
