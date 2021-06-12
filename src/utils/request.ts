import axios, { AxiosResponse } from 'axios';
import qs from 'query-string';

axios.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.resolve(error.response);
  },
);

function checkStatus(res: AxiosResponse) {
  // loading
  // 如果http状态码正常，则直接返回数据
  if (res && (res.status === 200 || res.status === 304 || res.status === 400)) {
    return res;
    // 如果不需要除了data之外的数据，可以直接 return response.data
  }
  // 异常状态下，把错误信息返回去
  return {
    status: -404,
    msg: '网络异常',
  };
}

function checkCode(res: AxiosResponse) {
  // 如果code异常(这里已经包括网络错误，服务器错误，后端抛出的错误)，可以弹出一个错误提示，告诉用户
  if (res.status === -404) {
    console.warn('404');
  }
  if (res.data && !res.data.success) {
    console.warn(res.data?.error_msg);
  }
}

export default {
  post(url: string, data: any) {
    return axios({
      method: 'post',
      url,
      data: qs.stringify(data),
      timeout: 10000,
      headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
      },
    }).then((res) => {
      checkCode(res);
      return checkStatus(res);
    });
  },
  get(url: string, params?: any): any {
    return axios({
      method: 'get',
      url,
      params, // get 请求时带的参数
      timeout: 10000,
      headers: {
        'X-Requested-With': 'XMLHttpRequest',
      },
    }).then((response) => {
      checkCode(response);
      return checkStatus(response);
    });
  },
};
