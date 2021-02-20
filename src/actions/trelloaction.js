import { ADD_NUMBER,ADD_INC} from './type'




export const addNumber =(data)=>dispatch=>{
    dispatch({
        type:ADD_NUMBER,
        payload:data
    }
    )
}
export const addCounter =(data)=>dispatch=>{
    dispatch({
        type:ADD_INC,
        payload:data
    }
    )
}