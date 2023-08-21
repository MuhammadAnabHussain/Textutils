import "./App.css";
import Navbar from "./components/Navbar";
import Mybox from "./components/Mybox";
//import AboutUs from "./components/AboutUs";
import React, { useState } from "react";
import Alert from "./components/Alert";

function App() {
  const [mode, setmode] = useState("light"); //whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#112c54";
      showAlert("dark mode has been enabled", "success");
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showAlert("light mode has been enabled", "success");
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
      <Alert alert={alert} />
      <div className="container my-3">
        <Mybox
          heading="Enter the text to Analyze Below "
          mode={mode}
          showAlert={showAlert}
        />
        {/* <AboutUs /> */}
      </div>
    </>
  );
}

export default App;
