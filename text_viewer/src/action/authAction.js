import {REGISTER_SUCCESS,REGISTER_FAIL, LOGIN_SUCCESS, LOGIN_FAIL} from './Type';
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
    const res = await axios.post('',body,config);

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

export const login = ({email,password}) =>async dispatch =>{
    console.log({email,password});
    const config = {
        headers:{
            'Content-Type' : 'application/json'
        }
    };

    const body = JSON.stringify({email,password});

    try {
        const res = await axios.post('',body,config);

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