import React, {useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBookReader} from "@fortawesome/free-solid-svg-icons";
import {Link, NavLink} from "react-router-dom";
import "./header.css"


const Header = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <>
        <header className="header">
            <div className=" d-flex justify-content-between p-3 mb-5">
                <div>
                    <Link to="/" className="header-link    text-decoration-none">
                        <FontAwesomeIcon icon={faBookReader} className=" header-icon text-primary fs-1 text-black"/>
                        <span className="text-black fs-5 fw-bold"> USA Today</span>
                    </Link>
                </div>
                <div>
                    <NavLink to="/" exact className=" header-link  me-3 text-decoration-none  fs-4 "> Homepage</NavLink>
                    <NavLink to="/news" className=" header-link     me-3 text-decoration-none  fs-4"> News </NavLink>
                    <NavLink to="/auth" className=" header-link     me-3 text-decoration-none  fs-4"> Sign in </NavLink>
                    <NavLink to="/register" className=" header-link      me-3 text-decoration-none  fs-4"> Register </NavLink>
                    <button type="button" onClick={()=> setIsOpen(true)} className="btn btn-success"> Submit an application</button>
                </div>
            </div>
        </header>

            {
                isOpen &&  <div className="modal-window">
                        <div className="modal-cont">
                        <h2 className="mt-3">Modal content</h2>
                        <p>Lorem ipsum dolor sit amet.</p>
                        <button className="close-modal mt-2" onClick={()=> setIsOpen(false)}>✖</button>
                    </div>
                </div>
            }
            </>
    );
};

export default Header;