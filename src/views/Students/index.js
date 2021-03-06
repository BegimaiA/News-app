import React, {useState, useEffect} from 'react';
import Layout from "../../components/Layout";
import axios from "axios";
import {Col, Container, Form, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEdit, faTrash, faWindowClose} from "@fortawesome/free-solid-svg-icons";
import Modal from 'react-modal';
import { useForm } from 'react-hook-form';
import "./students.css";
import StudentsItem from "../StudentsItem";

const Students = () => {
    Modal.setAppElement('#root');
    const [students, setStudents] = useState([])
    const [modalIsOpen, setIsOpen] = useState(false);
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [img, setImg] = useState({})

    const onSubmit = data => {
        data.image = img.url
        delete data.file
        axios.post("https://6115f1038f38520017a3863c.mockapi.io/students", data)
        .then(({data:student})=>{
            setStudents([...students, student])
            setIsOpen(false)
                reset()
        })
    }
    const handleFile =(e) => {
        const formData = new FormData()
        formData.append("file", e.target.files[0] )
        formData.append("upload_preset", "bishkek" )
        axios.post("https://api.cloudinary.com/v1_1/begimai/image/upload", formData)
            .then(({data})=>setImg(data))
    }

    useEffect(() => {
        axios("https://6115f1038f38520017a3863c.mockapi.io/students")
            .then(({data}) => setStudents(data))
    },[])
    function openModal() {
        setIsOpen(true);
    }
    function closeModal() {
        setIsOpen(false);
    }

    const deleteStudent = (id) => {
        axios.delete(`https://6115f1038f38520017a3863c.mockapi.io/students/${id}`)
            .then(({data})=>setStudents(students.filter(item => item.id !== id)))
    }
    const updateStudent = (id, data) => {
        axios.put(`https://6115f1038f38520017a3863c.mockapi.io/students/${id}`, data)
            .then(({data})=>setStudents(students.map(item => item.id === id? {...item, ...data} : item)))
    }

    return (
        <Layout>
            <Container>
    <table  border="1"  className="table  table-bordered table-striped my-3" cellPadding="15"  width="600px" height="50px" cellSpacing="0">
        <thead>
        <tr valign="center">
            <th>#</th>
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
    students.map((el, idx)=>
  <StudentsItem el={el} idx={idx} deleteStudent={deleteStudent} updateStudent={updateStudent}/>
    )}
</tbody>
    </table>
                <button className="btn btn-success  d-block ms-auto" onClick={openModal} >Add contact</button>
                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    contentLabel="Example Modal"
                >
                    <button onClick={closeModal} className=" close-btn  btn"><FontAwesomeIcon icon={faWindowClose}/></button>
                    <h3>Fill the form</h3>
                        <Form onSubmit={handleSubmit(onSubmit)}>
                            <Row className="mb-3">
                                <input type="file"
                                       {...register("file", { required: true })}
                                       onChange={handleFile}/>
                                {errors.file && <span className="text-danger">This field is required</span>}
                                <Form.Group as={Col} controlId="formGridName">
                                    <Form.Label htmlFor="name">Name</Form.Label>
                                    <Form.Control  id="name"   type="text" placeholder="Enter name"
                                                   {...register("name", { required: true, minLength:3 })}/>
                                    {errors.name && <span className="text-danger">This field is required</span>}
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridPhone">
                                    <Form.Label htmlFor="phone">Phone</Form.Label>
                                    <Form.Control  id="phone"  type="text" placeholder="Phone"
                                                   {...register("phone", { required: true })}/>
                                    {errors.phone && <span className="text-danger">This field is required</span>}
                                </Form.Group>
                            </Row>
                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridContract">
                                    <Form.Label htmlFor="contract">Contract</Form.Label>
                                    <Form.Control id="contract"   type="text" placeholder="Sum"
                                                  {...register("contract", { required: true })}/>
                                    {errors.contract && <span className="text-danger">This field is required</span>}
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridPaid">
                                    <Form.Label htmlFor="paid">Paid</Form.Label>
                                    <Form.Control  id="paid"  type="text" placeholder="Amount"
                                                   {...register("paid", { required: true })}/>
                                    {errors.paid && <span className="text-danger">This field is required</span>}
                                </Form.Group>
                            </Row>

                            <Form.Group className="mb-3" controlId="formGridLaptop">
                                <Form.Label htmlFor="laptop">Laptop</Form.Label>
                                <Form.Control  id="laptop"  placeholder="Need or not"
                                               {...register("laptop", { required: true })}/>
                                {errors.laptop && <span className="text-danger">This field is required</span>}
                            </Form.Group>

                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridGroup">
                                    <Form.Label>Group</Form.Label>
                                    <Form.Select  {...register("group", { required: true })}>
                                        <option>Morning</option>
                                        <option>Evening</option>
                                    </Form.Select>
                                    {errors.group && <span className="text-danger">This field is required</span>}
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridStatus">
                                    <Form.Label>Status</Form.Label>
                                    <Form.Select  {...register("status", { required: true })}>
                                        <option>Active</option>
                                        <option>Finished</option>
                                    </Form.Select>
                                    {errors.status && <span className="text-danger">This field is required</span>}
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridGender">
                                    <Form.Label>Gender</Form.Label>
                                    <Form.Select  {...register("gender", { required: true })}>
                                        <option>Male</option>
                                        <option>Female</option>
                                    </Form.Select>
                                    {errors.gender && <span className="text-danger">This field is required</span>}
                                </Form.Group>
                            </Row>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Comment</Form.Label>
                                <Form.Control as="textarea" rows={3}
                                              {...register("comment", { required: true })}
                                />
                                {errors.comment && <span className="text-danger">This field is required</span>}
                            </Form.Group>
                            <button  className="btn btn-outline-success">Add </button>
                        </Form>
                </Modal>
            </Container>
        </Layout>
    );
};

export default Students;