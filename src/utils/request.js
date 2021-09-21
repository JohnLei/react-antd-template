import axios from "axios";
import { message} from 'antd';

//创建一个axios实例
const service =  axios.create({
  timeout: 5000,
  baseURL: process.env.REACT_APP_BASE_API //base api
})

//请求连拦截器
service.interceptors.request.use(
  config => {
    const toten = sessionStorage.getItem('token')
    if (toten) {
      config.headers.Authorization = toten
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

//相应拦截器
service.interceptors.response.use(
  response => {
    if(response.status === 200) {
      return Promise.resolve(response)
    } else {
      return Promise.reject(response)
    }
  },
  error => {
    if (error.response.status) {
      //Todo something
      switch (error.response.status) {
        // 401: 未登录
        // 未登录则跳转登录页面，并携带当前页面的路径
        // 在登录成功后返回当前页面，这一步需要在登录页操作。
        case 401:
          message.error("身份验证失败，请关闭重新进入。");
          break;

        // 403 token过期
        // 登录过期对用户进行提示
        // 清除本地token和清空vuex中token对象
        // 跳转登录页面
        case 403:
          message.error("登录过期，请关闭重新进入。");
          // 清除token
          break;

        // 404请求不存在
        case 404:
          message.error("您访问的网页不存在。");
          break;
        // 其他错误，直接抛出错误提示
        default:
          message.error('您访问的网页不存在');
      }
    }
     return Promise.reject(error.response)
  }
)
export default service