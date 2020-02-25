import {wxRequest} from '../utils/wxRequest'
import __CONFIG__ from '../config/index'
//取得url
const apiMall=__CONFIG__ .url
console.log(apiMall)

const getAdList = (params) => wxRequest(params, apiMall + '/emall/api/adverts/list');



export default{
    getAdList,
}