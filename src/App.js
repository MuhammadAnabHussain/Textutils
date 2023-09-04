import "./App.css";
import Navbar from "./components/Navbar";
import Mybox from "./components/Mybox";
import AboutUs from "./components/AboutUs";
import React, { useState } from "react";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Switch, Route, link } from "react-router-dom";

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
  // const darkToggleMode = () => {
  //   if (mode === "light") {
  //     setMode("dark");

  //     document.body.style.backgroundColor = "#112c54";
  //     showAlert("Dark mode has been enabled", "success");
  //     document.title = "Textutils - dark mode";
  //     //if you wannna redirect the user into another app or into another
  //     //just for understanding purpose
  //     // setInterval(() => {
  //     //   document.title = "textutils is amazing ";
  //     // }, 2000);
  //     // setInterval(() => {
  //     //   document.title = "install textutils now!";
  //     // }, 1500);
  //   } else {
  //     setMode("light");
  //     document.body.style.backgroundColor = "white";
  //     showAlert("Light mode has been enabled", "success");
  //     document.title = "Textutils - light mode";
  //   }
  // };
  const removebodyclasses = () => {
    document.body.classList.remove("bg-primary");
    document.body.classList.remove("bg-danger");
    document.body.classList.remove("bg-success");
    document.body.classList.remove("bg-warning");
  };
  const toggleMode = (cls) => {
    removebodyclasses();
    document.body.classList.add("bg-" + cls);
    if (mode === "light") {
      setMode("dark");

      // document.body.style.backgroundColor = "#112c54";
      showAlert("Dark mode has been enabled", "success");
      document.title = "Textutils - dark mode";
    } else {
      setMode("light");
      //document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      document.title = "Textutils - light mode";
    }
  };

  return (
    <Router>
      <>
        <Navbar
          title="textutils"
          homeText="Home"
          aboutText="About us"
          mode={mode} //whether mode is dark or not
          toggleMode={toggleMode}
        />
        <Alert alert={alert} mode={mode} />
        <Switch>
          <Route exact path="/aboutus">
            <AboutUs mode={mode} />
          </Route>
          <Route exact path="/home">
            <div className="container my-3">
              <Mybox
                heading="Enter the text to Analyze Below "
                mode={mode}
                showAlert={showAlert}
                btnMode={btnMode}
              />
            </div>
          </Route>
        </Switch>
      </>
    </Router>
  );
}

export default App;
