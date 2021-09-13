import React from 'react';
import {Form, Button, Row, Col} from "react-bootstrap";
import Layout from "../Layout";

const SignIn = () => {
    return (
     <Layout>
         <Row className="mt-5">
             <Col md={9}>
                 <Form className="offset-6">
                     <Form.Group className="mb-3 " controlId="formBasicEmail">
                         <Form.Label>Email address</Form.Label>
                         <Form.Control   type="email" placeholder="Enter email" />
                         <Form.Text className="text-muted">
                             We'll never share your email with anyone else.
                         </Form.Text>
                     </Form.Group>

                     <Form.Group className="mb-3" controlId="formBasicPassword">
                         <Form.Label>Password</Form.Label>
                         <Form.Control type="password" placeholder="Password" />
                     </Form.Group>

                     <Button variant="primary" type="submit">
                         Sign in
                     </Button>
                 </Form>
             </Col>
         </Row>
     </Layout>
    );
};

export default SignIn;