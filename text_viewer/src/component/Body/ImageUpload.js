import React,{useState} from 'react';
import {Card,Form,Button} from 'react-bootstrap';
import {sendImage} from '../../action/imageAction';
import {connect} from 'react-redux';

const ImageUpload = ({sendImage,images}) => {
    const [image,setImage] = useState({file:null});

    const onChange = (e) =>{
        setImage({...image,file:e.target.files[0]})
    }

    const {file} = image;

    const onSubmit = (e) =>{
        e.preventDefault();
        // console.log({file})
        sendImage({file});

    }

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
                            <Form.Control type="file" onChange={onChange} />
                        </Form.Group>
                        <Button variant="secondary" size="lg" block onClick={onSubmit}>
                            Submit
                        </Button>
                    </Form>
                </Card.Body>
            </Card>

            <div>
                {/* {image} */}
            </div>
        </div>
    )
}

const mapStateToPorp = (state) =>({
    images: state.image
});

export default connect(mapStateToPorp,{sendImage})(ImageUpload);
