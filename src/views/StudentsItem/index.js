import React, {useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEdit, faTrash, faWindowClose} from "@fortawesome/free-solid-svg-icons";
import {useForm} from "react-hook-form";
import Modal from "react-modal";
import {Col, Form, Row} from "react-bootstrap";

const StudentsItem = ({el, idx, deleteStudent, updateStudent}) => {
    const [modalIsOpen, setIsOpen] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm();
    function closeModal() {
        setIsOpen(false);
    }
    const handleUpdate = (data) => {
            updateStudent(el.id, data)
        setIsOpen(false)

    }
    return (
        <tr>
            <td>{idx+1}</td>
            <td>{el.name}</td>
            <td>{el.phone}</td>
            <td>{el.contract}</td>
            <td>{el.paid}</td>
            <td>{el.laptop}</td>
            <td>{el.group}</td>
            <td>{el.comment}</td>
            <td>{el.status}</td>
            <td>
                <button type="button" className="btn btn-sm btn-outline-warning me-2" onClick={()=> setIsOpen(true)} >
                    <FontAwesomeIcon icon={faEdit}/>

                </button>
                <button type="button" className="btn btn-sm btn-outline-danger" onClick={()=>deleteStudent(el.id)}>
                    <FontAwesomeIcon icon={faTrash}/>
                </button>

                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    contentLabel="Example Modal"
                >
                    <button onClick={closeModal} className=" close-btn  btn"><FontAwesomeIcon icon={faWindowClose}/></button>
                    <h3>Fill the form</h3>
                    <Form onSubmit={handleSubmit(handleUpdate)}>

                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridName">
                                <Form.Label htmlFor="name">Name</Form.Label>
                                <Form.Control  id="name"   type="text" placeholder="Enter name"
                                               defaultValue={el.name}
                                               {...register("name", { required: true, minLength:3 })}/>
                                {errors.name && <span className="text-danger">This field is required</span>}
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridPhone">
                                <Form.Label htmlFor="phone">Phone</Form.Label>
                                <Form.Control  id="phone"  type="text" placeholder="Phone"
                                               defaultValue={el.phone}
                                               {...register("phone", { required: true })}/>
                                {errors.phone && <span className="text-danger">This field is required</span>}
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridContract">
                                <Form.Label htmlFor="contract">Contract</Form.Label>
                                <Form.Control id="contract"   type="text" placeholder="Sum"
                                              defaultValue={el.contract}
                                              {...register("contract", { required: true })}/>
                                {errors.contract && <span className="text-danger">This field is required</span>}
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridPaid">
                                <Form.Label htmlFor="paid">Paid</Form.Label>
                                <Form.Control  id="paid"  type="text" placeholder="Amount"
                                               defaultValue={el.paid}
                                               {...register("paid", { required: true })}/>
                                {errors.paid && <span className="text-danger">This field is required</span>}
                            </Form.Group>
                        </Row>

                        <Form.Group className="mb-3" controlId="formGridLaptop">
                            <Form.Label htmlFor="laptop">Laptop</Form.Label>
                            <Form.Control  id="laptop"  placeholder="Need or not"
                                           defaultValue={el.laptop}
                                           {...register("laptop", { required: true })}/>
                            {errors.laptop && <span className="text-danger">This field is required</span>}
                        </Form.Group>

                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridGroup">
                                <Form.Label>Group</Form.Label>
                                <Form.Select   defaultValue={el.group} {...register("group", { required: true })}>
                                    <option>Morning</option>
                                    <option>Evening</option>
                                </Form.Select>
                                {errors.group && <span className="text-danger">This field is required</span>}
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridStatus">
                                <Form.Label>Status</Form.Label>
                                <Form.Select   defaultValue={el.status} {...register("status", { required: true })}>
                                    <option>Active</option>
                                    <option>Finished</option>
                                </Form.Select>
                                {errors.status && <span className="text-danger">This field is required</span>}
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridGender">
                                <Form.Label>Gender</Form.Label>
                                <Form.Select   defaultValue={el.gender} {...register("gender", { required: true })}>
                                    <option>Male</option>
                                    <option>Female</option>
                                </Form.Select>
                                {errors.gender && <span className="text-danger">This field is required</span>}
                            </Form.Group>
                        </Row>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Comment</Form.Label>
                            <Form.Control as="textarea" rows={3}
                                          defaultValue={el.comment}
                                          {...register("comment", { required: true })}
                            />
                            {errors.comment && <span className="text-danger">This field is required</span>}
                        </Form.Group>
                        <button  className="btn btn-outline-success">Add </button>
                    </Form>
                </Modal>
            </td>
        </tr>
    );
};

export default StudentsItem;