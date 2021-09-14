import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBookReader} from "@fortawesome/free-solid-svg-icons";
import {Navbar} from "react-bootstrap";
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

                  <NavLink to="/" exact  activeClassName="active" className=" header-link    me-3 text-decoration-none text-black fs-4 "> Homepage</NavLink>
                  <NavLink to="/news"  activeClassName="active"   className=" header-link     me-3 text-decoration-none text-black fs-4"> News </NavLink>
                  <NavLink to="/auth"    activeClassName="active" className=" header-link     me-3 text-decoration-none text-black fs-4"> Sign in </NavLink>
                  <NavLink to="/register" activeClassName="active"    className=" header-link      me-3 text-decoration-none text-black fs-4"> Register </NavLink>
              </div>
          </div>
      </header>
    );
};

export default Header;