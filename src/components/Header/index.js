import React, {useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBookReader} from "@fortawesome/free-solid-svg-icons";
import {Link, NavLink} from "react-router-dom";
import "./header.css"
import {Button, Form} from "react-bootstrap";
import axios from "axios";


const Header = () => {
    const initial = {name: "", email: "", phone: ""}
    const [isOpen, setIsOpen] = useState(false)
    const [callback, setCallback] =useState(initial)
    const [sentSuccess, setSentSuccess] = useState(false)

    const handleInput = (e) => {
       setCallback({...callback, [e.target.name]: e.target.value})
    }
    const handleSubmit =(e) => {
        e.preventDefault()
        axios.post("https://6115f1038f38520017a3863c.mockapi.io/callback", callback)
            .then(()=>{
                setSentSuccess(true)
                setTimeout(()=>{
                    setIsOpen(false)
                    setSentSuccess(false)
                    setCallback(initial)
                }, 2000)
            })
    }


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

                            {
                                sentSuccess ? <h4>"Successfully sent"</h4> : <Form className="" onSubmit={handleSubmit}>
                                    <Form.Group className="mb-3 " controlId="formBasicName">
                                        <Form.Label htmlFor="name">Name</Form.Label>
                                        <Form.Control id="name"  type="text" placeholder="Enter name" name="name" required  value={callback.name} onChange={handleInput}/>
                                    </Form.Group>

                                    <Form.Group className="mb-3 " controlId="formBasicEmail">
                                        <Form.Label htmlFor="email">Email address</Form.Label>
                                        <Form.Control  id="email" name="email" type="email" placeholder="Enter email"  required value={callback.email} onChange={handleInput} />
                                        <Form.Text className="text-muted">
                                            We'll never share your email with anyone else.
                                        </Form.Text>
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicPhone">
                                        <Form.Label htmlFor="phone">Phone number</Form.Label>
                                        <Form.Control id="phone" name="phone"  type="text" placeholder="phone number"   required value={callback.phone} onChange={handleInput} />
                                    </Form.Group>
                                    <Button variant="primary" type="submit" className="mb-4">
                                        Submit
                                    </Button>
                                </Form>
                            }


                        <button className="close-modal mt-2" onClick={()=> {
                            setIsOpen(false)
                            setSentSuccess((false))}
                        }>✖</button>
                    </div>
                </div>
            }
            </>
    );
};

export default Header;