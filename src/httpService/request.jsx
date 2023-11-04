/*
 * @Author: DoubleLiHao =2998000782@qq.com
 * @Date: 2023-08-31 19:24:54
 * @LastEditors: DoubleLiHao =2998000782@qq.com
 * @LastEditTime: 2023-09-09 23:46:58
 * @FilePath: \yzyy\src\httpService\request.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Taro from "@tarojs/taro";

const request = async (
  url,
  data = {},
  method = "GET",
  header = { "Request-Time": new Date().getTime() }
) => {
  const response = await Taro.request({
    url: url,
    data,
    method: method,
    header,
  });
  if (response.statusCode === 200) {
    return response.data;
  } else {
    throw new Error(`请求失败, ${response.statusCode}`);
  }
};

const interceptor = function (chain) {
  const requestParams = chain.requestParams;
  const { url } = requestParams;
  const baseUrl = "https://ydsy.61231.cn";
  const newUrl = baseUrl + url;
  requestParams.url = newUrl;
  return chain.proceed(requestParams);
};

Taro.addInterceptor(interceptor);

export default request;
