import React, {useState, useEffect} from 'react';
import Layout from "../../components/Layout";
import axios from "axios";
import { Container} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEdit, faTrash} from "@fortawesome/free-solid-svg-icons";

const Students = () => {
    const [students, setStudents] = useState([])

    useEffect(() => {
        axios("https://6115f1038f38520017a3863c.mockapi.io/students")
            .then(({data}) => setStudents(data))
    })

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
        <button className="btn btn-success my-3 d-block ms-auto"  onClick={}>Add contact</button>
    </table>
            </Container>
        </Layout>
    );
};

export default Students;