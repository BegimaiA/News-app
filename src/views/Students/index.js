import React, {useState, useEffect} from 'react';
import Layout from "../../components/Layout";
import axios from "axios";
import { Container} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEdit, faTrash} from "@fortawesome/free-solid-svg-icons";
import Modal from 'react-modal';

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
    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        },
    };


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
                    style={customStyles}
                    contentLabel="Example Modal"
                >
                    <button onClick={closeModal}>close</button>
                    <div>I am a modal</div>
                    <form>
                        <input />
                        <button>tab navigation</button>
                        <button>stays</button>
                        <button>inside</button>
                        <button>the modal</button>
                    </form>
                </Modal>

            </Container>
        </Layout>
    );
};

export default Students;