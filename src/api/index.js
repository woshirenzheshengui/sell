import axios from 'axios'
import qs from 'qs'
const baseURL='http://9.9.20.6:8080/sample_admin_war/'
axios.defaults.baseURL=baseURL
import { message } from 'element-ui'

// // 添加请求拦截器
// axios.interceptors.request.use(function (config) {
//   console.log(config)
//   // 将token给到一个前后台约定好的key中，作为请求发送
// //   let s = localStorage.getItem('id')   
// //   if (myid) {
// //     config.headers['Authorization'] = myid
// //   }
//   return config
// }, function (error) {
//   // Do something with request error
//   return Promise.reject(error)
// })
axios.interceptors.response.use(
    response => {
      /*console.log('current',router.currentRoute.fullPath)
      console.log('errcode',response.data.errcode)*/
      if (response.data.errcode ==-9) {
       
          Vue.prototype.$message({
            type: 'warning',
            message:res.msg
          })
          window.sessionStorage.removeItem('myid');
          router.replace({
            path: '/login',
            query: {redirect: router.currentRoute.fullPath}
          });
  
        return;
      }
      return response;
    },
    error => {
      if (error.response) {
        console.log('errorerror=====', error.response);
      }
    });

export const checkUser = params => {
  return axios.post('organize/login', cP(params)).then(res => res.data)
}
function cP(obj){
    return qs.stringify(obj);
}