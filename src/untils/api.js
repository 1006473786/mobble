import { get, post } from "./http" //引入封装好的get和post方法
// 封装请求的方式
export function apiimglists() {//轮播
    return get('/json/one.json')
}

export function loadShops(){//首页数据
    return get('./json/three.json')
}