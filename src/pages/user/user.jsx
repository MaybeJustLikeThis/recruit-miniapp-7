/*
 * @Author: DoubleLiHao =2998000782@qq.com
 * @Date: 2023-08-21 21:53:21
 * @LastEditors: DoubleLiHao =2998000782@qq.com
 * @LastEditTime: 2023-08-27 18:23:04
 * @FilePath: \yzyy\src\pages\user\user.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { View, Text, Image, Input } from "@tarojs/components";
import ButtonUser from "../../Components/ButtonUser/ButtonUser";
import { useDispatch, useSelector } from "react-redux";
import Taro, { useDidShow } from "@tarojs/taro";
import { useState } from "react";

// icon图标引入
import logo from "../../assets/icons/logo.png";
import infoEdit from "../../assets/icons/infoEdit.png";
import applicationSubmit from "../../assets/icons/ApplicationSubmit.png";
import qr from "../../assets/icons/qr.png";

import "./user.scss";
import request from "../../httpService/request";
import { setUserInfo } from "../../store/userSlice";

export default function User() {
  const dispatch = useDispatch();
  const [info, setInfo] = useState("");
  const { openid } = useSelector((state) => state.userSlice);

  useDidShow(async () => {
    const response = await request("/miniapp/user/show", {
      cloudId: openid,
    });
    const obj = {
      openid: response.data.cloudId || null,
      user_id: response.data.id || null,
    };
    dispatch(setUserInfo(obj));
    setInfo(response.data);
  });

  // 获取用户昵称和头像
  const { nickName, avatarUrl } = useSelector((state) => state.userSlice);

  // 生成对应时间的问候语
  const getGreet = () => {
    const hour = new Date().getHours();
    let greet = "时间未知";
    if (hour > 6 && hour < 12) greet = "早上好，";
    else if (hour >= 12 && hour < 15) greet = "中午好，";
    else if (hour >= 15 && hour < 19) greet = "下午好，";
    else greet = "晚上好，";
    return <View className="greet">{greet}</View>;
  };
  // 按钮跳转
  const toPage = (url) => {
    if (openid === "") {
      Taro.showModal({
        confirmText: "确定",
        showCancel: false,
        title: "请登陆后再进行其他操作",
        success: () => {
          Taro.navigateTo({ url: "/pages/login/login" });
        },
      });
    } else {
      Taro.navigateTo({
        url,
      });
    }
  };
  return (
    <View className="page">
      <View className="top">
        <View className="text-container">
          {getGreet()}
          <Text className="nickname">
            {nickName === "" ? "同学" : nickName}
          </Text>
        </View>
        <View className="profile-photo">
          {avatarUrl === "" ? (
            <Image
              className="photo"
              // src={"默认头像地址"}
              mode="scaleToFill"
            ></Image>
          ) : (
            <Image className="photo" src={avatarUrl} mode="scaleToFill"></Image>
          )}
        </View>
      </View>

      <View className="info-box">
        <View className="info rotate"></View>
        <View className="info info-up">
          <View className="info-box">
            <View className="info-box-top">
              <View className="name">{info.name || "暂未报名"}</View>
              <View className="academy">
                <View className="school">{info.academy}</View>
                <View className="direction">{info.direction}</View>
              </View>
            </View>
            <View className="info-container">
              <View>专业班级：{info.major}</View>
              <View>手机号：{info.phone}</View>
              <View>QQ：{info.qq}</View>
              <View>邮箱：{info.email}</View>
            </View>
          </View>
          <View className="icon">
            <Image src={logo} className="img" mode="scaleToFill"></Image>
          </View>
        </View>
      </View>

      <View className="button-box">
        <View
          className={"button edit-button"}
          onClick={() => {
            toPage("/pages/apply/apply");
          }}
        >
          <ButtonUser icon={infoEdit} name="信息修改"></ButtonUser>
        </View>
        <View
          className="button submit-button"
          onClick={() => {
            toPage("/pages/applicationSubmit/applicationSubmit");
          }}
        >
          <ButtonUser icon={applicationSubmit} name="申请书提交"></ButtonUser>
        </View>
        <View
          className="button qr-button"
          onClick={() => {
            toPage("/pages/myqr/myqr");
          }}
        >
          <ButtonUser icon={qr} name="我的二维码"></ButtonUser>
        </View>
      </View>
    </View>
  );
}
