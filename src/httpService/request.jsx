import Taro from "@tarojs/taro";

const request = async (url, data = {}, method = "GET",header={"Request-Time": new Date().getTime(),}) => {
  const response = await Taro.request({
    url: url,
    data,
    method: method,
    header
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
  const newUrl = baseUrl + url
  requestParams.url = newUrl
  return chain.proceed(requestParams);
}

Taro.addInterceptor(interceptor);

export default request;
