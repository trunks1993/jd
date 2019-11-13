import axios from 'axios';
import { getToken, removeToken } from './auth';
// const token = getToken() || '';

// 创建axios实例
const service = axios.create({
  // baseURL: process.env.BASE_API+'/api', // api的base_url
  baseURL: 'http://180.167.172.122:5050/bpmApi',
  timeout: 5000 // 请求超时时间
});

// request拦截器
service.interceptors.request.use(config => {
  config.headers.token = getToken() || '';
  return config;
}, error => {
  // Do something with request error
  // console.log(error) // for debug
  Promise.reject(error);
});

// respone拦截器
service.interceptors.response.use(
  ({ data }) => {
    if (data.code === '2') {
      removeToken();
      return window.location.reload();
    }
    return data;
  },
  error => {
    // console.log('err' + error) // for debug
    // Message.error(error.message)
    return Promise.reject(error);
  }
);

export default service;
