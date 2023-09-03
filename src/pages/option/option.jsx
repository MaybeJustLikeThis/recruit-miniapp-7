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
import request from "../../httpService/request";
import { useSelector } from "react-redux";

export default function Tool() {
  const {QRData} = useSelector(state=>state.userSlice)
  const { user_id, isAdmin, openid } = useSelector((state) => state.userSlice);
  console.log(user_id === "", isAdmin === "", "进入页面获取结果");

  const logos = {
    ticketLogo:
      "https://img-doubleli.oss-cn-hangzhou.aliyuncs.com/ticket-logo.png",
    interviewLogo:
      "https://img-doubleli.oss-cn-hangzhou.aliyuncs.com/interview-logo.png",
    applyLogo:
      "https://img-doubleli.oss-cn-hangzhou.aliyuncs.com/apply-logo.png",
    scanLogo: "https://img-doubleli.oss-cn-hangzhou.aliyuncs.com/scan-logo.png",
  };
  const handlerOptionClick = (url, type) => {
    if (openid === "") {
      Taro.showModal({
        confirmText: "确定",
        showCancel: false,
        title: "请登陆后再进行其他操作",
        success: () => {
          Taro.navigateTo({ url: "/pages/login/login" });
        },
      });
    }else if (user_id === null && type != "apply") {
      Taro.showToast({ icon: "error", title: "请先报名填写信息" });
    } else {
      Taro.navigateTo({
        url,
      });
    }
  };

  const scanCode = () => {
    if (isAdmin !== 1) {
      Taro.showToast({ icon: "error", title: "您没有该权限" });
      return;
    }
    Taro.scanCode({
      success: async (res) => {
        console.log(res.result === JSON.stringify(QRData),'@@');
        const response = await request(
          "/miniapp/checkin/parse",
          {
            scanInfo: res.result,
          },
          "POST",
          {
            "content-type": "application/x-www-form-urlencoded",
          }
        );
        console.log(response, "发送请求成功");
        if (response.data === true) {
          Taro.showToast({
            title: "扫码成功",
            duration: 2000,
          });
        } else {
          Taro.showToast({
            title: "扫码失败",
            icon: "error",
            duration: 2000,
          });
        }
      },
      fail: (err) => {
        console.log(err);
      },
    });
  };
  return (
    <View className="page">
      <View className="box">
        <View
          className="box-item"
          onClick={() => {
            handlerOptionClick("/pages/ticket/ticket", "ticket");
          }}
        >
          <ButtonOption
            iconPosition="left"
            value="抢票"
            iconUrl={logos.ticketLogo}
          ></ButtonOption>
        </View>
        <View
          className="box-item"
          onClick={() => {
            handlerOptionClick("/pages/interview/interview", "interview");
          }}
        >
          <ButtonOption
            iconPosition="right"
            value="面试"
            iconUrl={logos.interviewLogo}
          ></ButtonOption>
        </View>
        <View
          className="box-item"
          onClick={() => {
            handlerOptionClick("/pages/apply/apply", "apply");
          }}
        >
          <ButtonOption
            iconPosition="left"
            value="报名"
            iconUrl={logos.applyLogo}
          ></ButtonOption>
        </View>
        <View className="box-item" onClick={scanCode}>
          <ButtonOption
            iconPosition="right"
            value="扫码"
            iconUrl={logos.scanLogo}
          ></ButtonOption>
        </View>
      </View>
    </View>
  );
}
