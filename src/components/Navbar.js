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
          <Link className="navbar-brand" to="/mybox">
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
                  to="/mybox"
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
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
        <div
          className={`form-check form-switch text-${
            props.mode === "light" ? "dark" : "light"
          }`}
        >
          {/* this switch is for Dark mode */}
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
            onClick={props.darkToggleMode}
          />
          <label className="form-check-label " htmlFor="flexSwitchCheckDefault">
            dark
          </label>
        </div>
        <div
          className={`form-check form-switch text-${
            props.mode === "light" ? "green" : "light"
          }`}
        >
          {/* this switch is for green mode */}
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
            onClick={props.greenToggleMode}
          />
          <label className="form-check-label " htmlFor="flexSwitchCheckDefault">
            Green
          </label>
        </div>
        <div
          className={`form-check form-switch text-${
            props.mode === "light" ? "red" : "light"
          }`}
        >
          {/* this switch is for red mode */}
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
            onClick={props.redToggleMode}
          />
          <label className="form-check-label " htmlFor="flexSwitchCheckDefault">
            Red
          </label>
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
