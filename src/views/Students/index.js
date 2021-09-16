import React, {useState, useEffect} from 'react';
import Layout from "../../components/Layout";
import axios from "axios";
import {Col, Container, Form, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEdit, faTrash, faWindowClose} from "@fortawesome/free-solid-svg-icons";
import Modal from 'react-modal';
import { useForm } from 'react-hook-form';

const Students = () => {
    const [students, setStudents] = useState([])
    const [modalIsOpen, setIsOpen] = useState(false);

    useEffect(() => {
        axios("https://6115f1038f38520017a3863c.mockapi.io/students")
            .then(({data}) => setStudents(data))
    })
    function openModal() {
        setIsOpen(true);
    }
    function closeModal() {
        setIsOpen(false);
    }


    return (
        <Layout>
            <Container>
    <table  border="1"  className="table  table-bordered table-striped my-3" cellPadding="15"  width="600px" height="50px" cellSpacing="0">
        <thead>
        <tr valign="center">
            <th>Name</th>
            <th>Phone</th>
            <th>Contract</th>
            <th>Paid</th>
            <th>Laptop</th>
            <th>Group</th>
            <th>Comment</th>
            <th>Status</th>
            <th>Actions</th>
        </tr>
        </thead>
<tbody>
{
    students.map(el=>
    <tr>
        <td>{el.name}</td>
        <td>{el.phone}</td>
        <td>{el.contract}</td>
        <td>{el.paid}</td>
        <td>{el.laptop}</td>
        <td>{el.group}</td>
        <td>{el.comment}</td>
        <td>{el.status}</td>
        <td>
            <button type="button" className="btn btn-sm btn-outline-warning me-2" >
                <FontAwesomeIcon icon={faEdit}/>
            </button>
            <button type="button" className="btn btn-sm btn-outline-danger">
                <FontAwesomeIcon icon={faTrash}/>
            </button>
        </td>
    </tr>
    )}
</tbody>
        <button className="btn btn-success my-3 d-block ms-auto" onClick={()=>setIsOpen(true)} >Add contact</button>
    </table>
                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    contentLabel="Example Modal"
                >
                    <h3>Fill the form</h3>
                        <Form>
                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridName">
                                    <Form.Label htmlFor="name">Name</Form.Label>
                                    <Form.Control  id="name" name="name"   type="text" placeholder="Enter name" />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridPhone">
                                    <Form.Label htmlFor="phone">Phone</Form.Label>
                                    <Form.Control  id="phone" name="phone" type="text" placeholder="Phone" />
                                </Form.Group>
                            </Row>
                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridContract">
                                    <Form.Label htmlFor="contract">Contract</Form.Label>
                                    <Form.Control id="contract" name="contract"  type="text" placeholder="Sum" />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridPaid">
                                    <Form.Label htmlFor="paid">Paid</Form.Label>
                                    <Form.Control  id="paid"  name="paid"  type="text" placeholder="Amount" />
                                </Form.Group>
                            </Row>

                            <Form.Group className="mb-3" controlId="formGridLaptop">
                                <Form.Label htmlFor="laptop">Laptop</Form.Label>
                                <Form.Control  id="laptop" name="laptop" placeholder="Need or not" />
                            </Form.Group>

                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridGroup">
                                    <Form.Label>Group</Form.Label>
                                    <Form.Select defaultValue="Choose...">
                                        <option>Choose...</option>
                                        <option>Morning</option>
                                        <option>Evening</option>
                                    </Form.Select>
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridStatus">
                                    <Form.Label>Status</Form.Label>
                                    <Form.Select defaultValue="Choose...">
                                        <option>Choose...</option>
                                        <option>Active</option>
                                        <option>Finished</option>
                                    </Form.Select>
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridGender">
                                    <Form.Label>Gender</Form.Label>
                                    <Form.Select defaultValue="Choose...">
                                        <option>Choose...</option>
                                        <option>Male</option>
                                        <option>Female</option>
                                    </Form.Select>
                                </Form.Group>
                            </Row>

                            <button onClick={closeModal} className="btn btn-sm"><FontAwesomeIcon icon={faWindowClose}/></button>
                            <button className="btn btn-outline-success">Add </button>
                        </Form>
                </Modal>
            </Container>
        </Layout>
    );
};

export default Students;