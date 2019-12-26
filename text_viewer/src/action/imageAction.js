import {SEND_IMAGE} from './Type';
import axios from 'axios';

export const sendImage = ({file}) => async dispath =>{
    console.log({file});
    const formData = new FormData();

    formData.append(file);

    const config ={
        headers:{
            'Content-type' : 'multipart/form-data'
        }
    }

    try {
        const res = await axios.post('',formData,config);

        dispath({
            type:SEND_IMAGE,
            payload: res.data,
        })
    } catch (err) {
        
    }

}