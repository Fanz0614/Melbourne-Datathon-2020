import axios from "axios";
import { fromJS } from "immutable";


const changeData=(result)=>({
    type:'get_data',
    result:fromJS(result),
    list:result.list
})

const get_temp_Data=(result)=>({
    type:'get_temp_data',
    result:fromJS(result),
    list:result.list
})

export const get_Data=()=>{
    return(dispatch)=>{
        axios.get('/API/NSW.json').then((res)=>{
            const result=res.data;
            const action=changeData(result.data)
            dispatch(action);
        })
    }
}


export const get_tempdata=()=>{
    return(dispatch)=>{
        axios.get('/API/temp.json').then((res)=>{
            const result=res.data;
            const action=get_temp_Data(result.data)
            dispatch(action);
        })
    }
}

