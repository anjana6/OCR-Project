import React from 'react'
import {Card,Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Home = () => {
    return (
        // <Card className="text-center">
        //     <Card.Body>
        //         <Card.Title>Special title treatment</Card.Title>
        //         <Card.Text>
        //         With supporting text below as a natural lead-in to additional content.
        //         </Card.Text>
                
        //     </Card.Body>
        // </Card>
        <Card className="text-center accountcreate" style={{ width: '40rem' }}>
        <Card.Body>
            <Card.Title className='text-center'>Image Text Viewer</Card.Title>
            <Link><Button className='home-btn' variant="primary">Login</Button></Link>
            <Link><Button className='home-btn' variant="primary">SingUp</Button></Link>
        </Card.Body>
    </Card>
    )
}

export default Home;
