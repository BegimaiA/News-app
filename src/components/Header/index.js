import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBookReader} from "@fortawesome/free-solid-svg-icons";
import {Link, NavLink} from "react-router-dom";
import "./header.css"


const Header = () => {
    return (
      <header className="header">
          <div className=" d-flex justify-content-between p-3 mb-5">
              <div>
                  <Link to="/" className="header-link    text-decoration-none" >
                      <FontAwesomeIcon icon={faBookReader} className=" header-icon text-primary fs-1 text-black"/>
                      <span className="text-black fs-5 fw-bold"> USA Today</span>
                  </Link>
              </div>
              <div>
                  <NavLink to="/" exact  className=" header-link  me-3 text-decoration-none  fs-4 "> Homepage</NavLink>
                  <NavLink to="/news"    className=" header-link     me-3 text-decoration-none  fs-4"> News </NavLink>
                  <NavLink to="/auth"    className=" header-link     me-3 text-decoration-none  fs-4"> Sign in </NavLink>
                  <NavLink to="/register" className=" header-link      me-3 text-decoration-none  fs-4"> Register </NavLink>
              </div>
          </div>
      </header>
    );
};

export default Header;