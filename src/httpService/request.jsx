import Taro from "@tarojs/taro";

const request = async (url, success, data = {}, method = "GET") => {
  const response = await Taro.request({
    url: url,
    data,
    method,
    success,
  });
  if (response.statusCode === 200) {
    return response.data;
  } else {
    throw new Error(`请求失败, ${response.statusCode}`);
  }
};

export default request;
