import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
export default function Navbar(props) {
  return (
    <>
      <nav
        className={`navbar navbar-expand-lg  navbar-${props.mode} bg-${props.mode}`}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            {props.title}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/home"
                >
                  {props.homeText}
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/aboutus">
                  {props.aboutText}
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="d-flex">
          <div
            className="bg-primary rounded mx-2"
            onClick={() => {
              props.toggleMode("primary");
            }} //on click does not need function call it only need function
            style={{
              height: "30px",
              width: "40px",
              cursor: "pointer",
            }}
          ></div>
          <div
            className="bg-danger rounded mx-2"
            onClick={() => {
              props.toggleMode("danger");
            }} //on click does not need function call it only need function
            style={{ height: "30px", width: "40px", cursor: "pointer" }}
          ></div>
          <div
            className="bg-success rounded mx-2"
            onClick={() => {
              props.toggleMode("success");
            }} //on click does not need function call it only need function
            style={{ height: "30px", width: "40px", cursor: "pointer" }}
          ></div>
          <div
            className="bg-warning rounded mx-2"
            onClick={() => {
              props.toggleMode("warning");
            }} //on click does not need function call it only need function
            style={{ height: "30px", width: "40px", cursor: "pointer" }}
          ></div>
          <div
            className="bg-light rounded mx-2"
            onClick={() => {
              props.toggleMode("light");
            }} //on click does not need function call it only need function
            style={{
              height: "30px",
              width: "40px",
              cursor: "pointer",
            }}
          ></div>
          <div
            className="bg-dark rounded mx-2"
            onClick={() => {
              props.toggleMode("dark");
            }} //on click does not need function call it only need function
            style={{ height: "30px", width: "40px", cursor: "pointer" }}
          ></div>
        </div>
      </nav>
    </>
  );
}
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  homeText: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired,
};
// Navbar.defaultprops = {
//   title: "hello",
//   homeText: "hello",
//   aboutText: "hello",
// };
