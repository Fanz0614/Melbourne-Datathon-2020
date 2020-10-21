import { combineReducers } from 'redux';
import echartReducer from '../components/visulization/store/reducer.js'



//header和headerReducer随便起名，只是要把reducer从header文件夹下的reducer里引用出来
//使用combinReducers建一个新的reducer把从各个部分的reducer整合到新的reducer里面
const reducer=combineReducers({
    echart:echartReducer
    
})
   
export default reducer;