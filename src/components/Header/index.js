import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBookReader} from "@fortawesome/free-solid-svg-icons";
import {Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";


const Header = () => {
    return (
      <header>
          <Navbar expand="lg" variant="light" bg="primary" fixed="top" className="d-flex justify-content-between p-3 mb-5">
              <div>
                  <Link to="/" className="text-decoration-none" >
                      <FontAwesomeIcon icon={faBookReader} className=" header-icon text-primary fs-1 text-black"/>
                      <span className="text-black fs-5 fw-bold"> USA Today</span>
                  </Link>
              </div>
              <div>
                  <Link to="/" className="me-3 text-decoration-none text-black fs-4"> Homepage</Link>
                  <Link to="/news" className="me-3 text-decoration-none text-black fs-4"> News </Link>
                  <Link to="/auth" className="me-3 text-decoration-none text-black fs-4"> Sign in </Link>
                  <Link to="/register" className="me-3 text-decoration-none text-black fs-4"> Register </Link>
              </div>
          </Navbar>
      </header>
    );
};

export default Header;