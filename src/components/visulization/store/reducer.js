import { fromJS} from 'immutable';

//immutable 库
//把state变成immutable对象
//list数组为immutable，需要在action中把data变成immutable(fromJS(data))
const defaultState=fromJS({
    //此数组应为空，API以固定形式传数据并由ajax读取，
    NSW:[],
    temp:[]
   
   
});
//使用immutable中set方法改变state值
//if 判定也可以用switch，case语句来写   
export default (state=defaultState, action)=>{
    
    if(action.type==='get_data'){
        return state.set('NSW',action.list)
    }

    if(action.type==='get_temp_data'){
        return state.set('temp',action.list)
    }
   

    
    return state;
}
