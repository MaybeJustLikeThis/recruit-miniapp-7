/*
 * @Author: DoubleLiHao =2998000782@qq.com
 * @Date: 2023-08-29 11:11:31
 * @LastEditors: DoubleLiHao =2998000782@qq.com
 * @LastEditTime: 2023-09-07 09:19:31
 * @FilePath: \yzyy\src\pages\apply\apply.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import "./apply.scss";

import { WebView } from "@tarojs/components";
import { useDispatch, useSelector } from "react-redux";
import Taro from "@tarojs/taro";

function Apply() {
  const { openid } = useSelector((state) => state.userSlice);

  const getResult = (e) => {
    const { data } = e.detail;
    Taro.showToast({ title: `报名成功` });
  };
  const url = `https://ydsy.61231.cn/apply.html?openid=${openid}`;
  return <WebView src={url} onMessage={getResult}></WebView>;
}

export default Apply;
