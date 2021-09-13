import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBookReader} from "@fortawesome/free-solid-svg-icons";
import {Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";


const Header = () => {
    return (
        <Navbar expand="lg" variant="light" bg="primary" fixed="top" className="d-flex justify-content-between p-3 mb-5">
            <div>
                <Link to="/">
                    <FontAwesomeIcon icon={faBookReader} className="text-primary fs-1 text-black"/>
                </Link>
            </div>
            <div>
                <Link to="/news" className="me-3 text-decoration-none text-black fs-4"> News </Link>
                <Link to="/auth" className="me-3 text-decoration-none text-black fs-4"> Sign in </Link>
                <Link to="/register" className="me-3 text-decoration-none text-black fs-4"> Register </Link>
            </div>
        </Navbar>
    );
};

export default Header;