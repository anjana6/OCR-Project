import React from 'react';
import {Card,Button,Form} from 'react-bootstrap';

 const Login = () => {
    return (
        
        <div className='accountcreate'>
            <Card style={{ width: '40rem' }}>
                <Card.Body>
                    <Card.Title className='text-center'>Login</Card.Title>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Button variant="secondary" size="lg" block>
                            Login
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </div>
            
    )
}

export default Login;
