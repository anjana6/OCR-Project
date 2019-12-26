import {SEND_IMAGE} from '../action/Type';

export default (state={},action) => {

    const {type,payload} = action;
    switch (type) {
        case SEND_IMAGE:
            return {
                ...state,payload
            }
    
        default:
            return state
    }
}