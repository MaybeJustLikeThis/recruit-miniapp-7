import {
  View,
  Text,
  Swiper,
  SwiperItem,
  Image,
  Button,
} from "@tarojs/components";
import Taro,{ useLoad } from "@tarojs/taro";
import "./detail.scss";
// import React, { useState } from 'react';
// import request from "../../httpService/request";
import newsCenter from "../../../assets/icons/newsCenter.png";
import aboutAcademy from "../../../assets/icons/aboutAcademy.png";

export default function Index() {
  const new1 =
    "https://img-doubleli.oss-cn-hangzhou.aliyuncs.com/微信图片_20230909232038.jpg";
  const new2 =
    "https://img-doubleli.oss-cn-hangzhou.aliyuncs.com/微信图片_20230909232039.jpg";
  const new3 =
    "https://img-doubleli.oss-cn-hangzhou.aliyuncs.com/QQ图片20230910003933.jpg";
  const Logo = "https://img-doubleli.oss-cn-hangzhou.aliyuncs.com/logo.png";
  useLoad(() => {
    console.log("Page loaded.");
  });

  const handleConfirmClick = async () => {
    console.log("当前确认书院：", items[currentIndex].name);
    const response = await request(
      "http://fi2f2z.natappfree.cc/college/selectAcademy",
      { academyId: items[currentIndex].name },
      "POST"
    ).catch((err) => {
      console.log(err);
    });
    console.log(response, "请求成功");
  };

  const handleClick = () => {
    Taro.showToast({title:'暂未开发即将跳转',icon:'none',duration: 2000})
    setTimeout(() => {
      Taro.navigateTo({ url: "/pages/yunding/yunding" });
    },2000)
  }

  return (
    <View className="detail">
      <Image className="logo" src={Logo}></Image>
      <View className="news-center">
        <View className="news-center-header">
          <View className="center-header-logo">
            <Image className="center-header-logo-img" src={newsCenter}></Image>
            新闻中心
          </View>
          <View className="more" onClick={handleClick}>
            更多{">"}
          </View>
        </View>
        <View className="news-center-body">
          <Image src={new1}></Image>
          <Image src={new2}></Image>
        </View>
      </View>
      <View className="about-academy">
        <View className="about-academy-header">
          <View className="center-header-logo">
            <Image
              className="center-header-logo-img"
              src={aboutAcademy}
            ></Image>
            关于书院
          </View>
          <View className="more" onClick={handleClick}>
            更多{">"}
          </View>
        </View>
        <View className="about-academy-body">
          <Image src={new3}></Image>
        </View>
      </View>
    </View>
  );
}
