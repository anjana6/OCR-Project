import React from 'react';
import {Card,Form,Button} from 'react-bootstrap';

const ImageUpload = () => {
    return (
        <div className='accountcreate'>
            <div>
                <h1>You can select your Image</h1>
            </div>
            <Card style={{ width: '40rem' }}>
                <Card.Body>
                    <Card.Title className='text-center'>File Upload</Card.Title>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Choose file</Form.Label>
                            <Form.Control type="file"  />
                        </Form.Group>
                        <Button variant="secondary" size="lg" block>
                            Submit
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </div>
    )
}

export default ImageUpload;
