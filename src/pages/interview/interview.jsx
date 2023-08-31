/*
 * @Author: DoubleLiHao =2998000782@qq.com
 * @Date: 2023-08-23 17:14:07
 * @LastEditors: DoubleLiHao =2998000782@qq.com
 * @LastEditTime: 2023-08-23 17:35:23
 * @FilePath: \yzyy\src\pages\option\interview\interview.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { View } from "@tarojs/components";

import './interview.scss'
import ButtonInterview from "../../Components/ButtonInterview/ButtonInterview";
import Taro from '@tarojs/taro'

export default function Interview() {
  const queryLogo =
    "https://img-doubleli.oss-cn-hangzhou.aliyuncs.com/query-logo.png";
  const orderLogo =
    "https://img-doubleli.oss-cn-hangzhou.aliyuncs.com/order-logo.png";

  const toOtherPage = (url) => {
    Taro.navigateTo({
      url
    })
  }
  return (
    <View className="page">
      <View className="title">面试</View>
      <View className="box">
        <View
          className="box-item"
          onClick={() => {
            toOtherPage("/pages/interviewOrder/interviewOrder");
          }}
        >
          <ButtonInterview
            iconPosition="left"
            value="预约"
            iconUrl={orderLogo}
          ></ButtonInterview>
        </View>
        <View
          className="box-item"
          onClick={() => {
            toOtherPage("/pages/interviewQuery/interviewQuery");
          }}
        >
          <ButtonInterview
            iconPosition="right"
            value="查询"
            iconUrl={queryLogo}
          ></ButtonInterview>
        </View>
      </View>
    </View>
  );
}
