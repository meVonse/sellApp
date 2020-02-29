import axios from 'axios';

let req = axios.create({
    baseURL:'http://192.168.1.19:3000',/* 基本路径 */
    timeout:10000 /*   10s    超时限制     8-12*/
})

/* 商家信息 */
export function getSeller(){
    return req.get('/api/seller');
} 
/* 商品信息 */
export function getGoods(seller){
    return req.get('/api/goods',seller);
} 

// 商品评价
export function getEvaluate(){
    return req.get('/api/ratings');
} 