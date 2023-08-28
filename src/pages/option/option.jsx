/*
 * @Author: DoubleLiHao =2998000782@qq.com
 * @Date: 2023-08-21 21:21:30
 * @LastEditors: DoubleLiHao =2998000782@qq.com
 * @LastEditTime: 2023-08-28 18:03:47
 * @FilePath: \yzyy\src\pages\option\option.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { View } from "@tarojs/components";
import "./option.scss";
import Taro from "@tarojs/taro";
import ButtonOption from "../../Components/ButtonOption/ButtonOption";
import ticketLogo from '../../assets/options/ticket-logo.png'
import interviewLogo from "../../assets/options/interview-logo.png";
import applyLogo from "../../assets/options/apply-logo.png";
import scanLogo from "../../assets/options/scan-logo.png";

export default function Tool() {
  const handlerOptionClick = (url) => {
    Taro.navigateTo({
      url,
    });
  };
  return (
    <View className="page">
      <View className="box">
        <View
          className="box-item"
          onClick={() => {
            handlerOptionClick("/pages/ticket/ticket");
          }}
        >
          <ButtonOption
            iconPosition="left"
            value="抢票"
            iconUrl={ticketLogo}
          ></ButtonOption>
        </View>
        <View
          className="box-item"
          onClick={() => {
            handlerOptionClick("/pages/interview/interview");
          }}
        >
          <ButtonOption
            iconPosition="right"
            value="面试"
            iconUrl={interviewLogo}
          ></ButtonOption>
        </View>
        <View
          className="box-item"
          onClick={() => {
            handlerOptionClick("/pages/apply/apply");
          }}
        >
          <ButtonOption
            iconPosition="left"
            value="报名"
            iconUrl={applyLogo}
          ></ButtonOption>
        </View>
        <View
          className="box-item"
          onClick={() => {
            handlerOptionClick("/pages/scan/scan");
          }}
        >
          <ButtonOption
            iconPosition="right"
            value="扫码"
            iconUrl={scanLogo}
          ></ButtonOption>
        </View>
      </View>
    </View>
  );
}
