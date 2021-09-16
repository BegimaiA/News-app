import React, {useState, useEffect} from 'react';
import axios from "axios";
import Layout from "../../components/Layout";
import {Container} from "react-bootstrap";

const Applications = () => {
    const [applications, setApplications] = useState([])
    useEffect(()=> {
        axios("https://6115f1038f38520017a3863c.mockapi.io/callback")
            .then(({data})=>setApplications(data))
    })
    return (
        <Layout>
           <Container>
               <h3 className="text-center mt-2">Applications</h3>
               <table border="1"  className="table  table-bordered table-striped my-3" cellPadding="15"  width="600px" height="50px" cellSpacing="0">
                   <thead>
                   <tr valign="center">
                       <th>#</th>
                       <th>First Name</th>
                       <th>Email</th>
                       <th>Phone</th>
                   </tr>
                   </thead>
                  <tbody>
                  {
                      applications.map(el=>
                          <tr>
                              <td>{el.id}</td>
                              <td>{el.name}</td>
                              <td>{el.email}</td>
                              <td>{el.phone}</td>
                          </tr>

                      )}
                  </tbody>
               </table>
           </Container>
        </Layout>
    );
};

export default Applications;