import Taro from "@tarojs/taro";

const request = async (url, data = {}, method = "GET") => {
  const response = await Taro.request({
    url: url,
    data,
    method: method,
    header: {
      "Request-Time": new Date().getTime(),
    }
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
  const baseUrl = "http://ubfcw3.natappfree.cc";
  const newUrl = baseUrl + url
  console.log(newUrl,'新的路劲');
  requestParams.url = newUrl
  return chain.proceed(requestParams);
}

Taro.addInterceptor(interceptor);

export default request;
