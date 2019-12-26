import React,{useState} from 'react';
import {Redirect} from 'react-router-dom';
import {Card,Button,Form} from 'react-bootstrap';
import { connect } from 'react-redux';
import {login} from '../../action/authAction';


 const Login = ({login,isAuthenticated}) => {
     const [formData,setFormData] = useState({email:'',password:''})

    const onChange = (e) =>{
       setFormData({...formData,[e.target.name]:e.target.value})
    }

    const {email,password} = formData;

    const onSubmit = (e) =>{
        e.preventDefault();
        // console.log(formData);
        login({email,password})

    }

    if(isAuthenticated){
        return <Redirect to='/imageuploader'/>
    }

    return (
        
        <div className='accountcreate'>
            <Card style={{ width: '40rem' }}>
                <Card.Body>
                    <Card.Title className='text-center'>Login</Card.Title>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" name='email' value={email} onChange={onChange} />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" name='password' value={password} onChange={onChange} />
                        </Form.Group>
                        <Button variant="secondary" size="lg" block onClick={onSubmit}>
                            Login
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </div>
            
    )
}
const mapStateToProps = (state) =>({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps,{login})(Login);
