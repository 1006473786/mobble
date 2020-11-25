import axios from 'axios';//引入axios

//环境的切换 开发环境(development)使用的是测试接口  和   生产环境(production)使用的是上线接口
// if(process.env.NODE_ENV=='development'){
//     //设置默认路径
//     axios.defaults.baseURL='http://120.53.31.103:84/'
// }
// if(process.env.NODE_ENV=='production'){
//     axios.defaults.baseURL='https://wap.365msmk.com/'
// }
axios.defaults.timeout=5000;//加载不出来5秒之后就是加载失败
axios.interceptors.request.use(
    config=>{
        config.headers={DeviceType:'H5'}//可每次发送请求之前的逻辑处理 比如判断token
        return config;
    }
)
// axios.interceptors.response.use(
//     response=>{
//       return response;
//     },
//     error=>{
//         if(error.response.status){

//         }
//     }
// )

// 使用promise返回axios请求的结果
export function get(url, params) {
        return new Promise((resolve, reject) => {
            axios.get(url, {
                params:params
            }).then(res => {
                resolve(res)
            }).catch(err => {
                reject(err)
            })
        })
    }

    export function post(url,params){
        return new Promise((resolve,reject)=>{
            axios.post(url,params).then(res=>{
                resolve(res.data)
            }).catch(err=>{
                reject(err.data)
            })

        })
    }