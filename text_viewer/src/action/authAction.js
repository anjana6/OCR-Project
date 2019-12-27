import {REGISTER_SUCCESS,REGISTER_FAIL,VERIFIED_SUCCESS,LOGIN_SUCCESS, LOGIN_FAIL} from './Type';
import axios from 'axios';

export const register = ({name,email,password}) =>async dispatch => {
// console.log({name,email,password});

const config = {
    headers:{
        'Content-Type' : 'application/json'
    }
}

const body = JSON.stringify({name,email,password});

try{
    const res = await axios.post('http://localhost:8080/signUp',body,config);
    console.log(res.data);

    dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data
    })
}catch(err){

    dispatch({
        type: REGISTER_FAIL
    })
}
}

export const verifyEmail = () => async dispatch =>{
    try {
        const res = await axios.get('http://localhost:8080/verifyResponse');
        console.log(res.data);

        dispatch({
            type:VERIFIED_SUCCESS,
            payload:res.data
        })
    } catch (err) {
        
    }
}

export const login = ({email,password}) =>async dispatch =>{
    // console.log({email,password});
    const config = {
        headers:{
            'Content-Type' : 'application/json'
        }
    };

    const body = JSON.stringify({email,password});

    try {
        const res = await axios.post('http://localhost:8080/login',body,config);
        // console.log(res.data)

        dispatch({
            type:LOGIN_SUCCESS,
            payload: res.data
        })
    } catch (err) {

        dispatch({
            type:LOGIN_FAIL
        })
        
    }

}