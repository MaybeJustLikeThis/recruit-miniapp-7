import {
  View,
  Text,
  Swiper,
  SwiperItem,
  Image,
  Button,
} from "@tarojs/components";
import { useLoad } from "@tarojs/taro";
import "./detail.scss";
// import React, { useState } from 'react';
// import request from "../../httpService/request";
import newsCenter from "../../../assets/icons/newsCenter.png";
import aboutAcademy from "../../../assets/icons/aboutAcademy.png";

export default function Index() {
  const new1 =
    "https://img-doubleli.oss-cn-hangzhou.aliyuncs.com/new1.png";
  const new2 =
    "https://img-doubleli.oss-cn-hangzhou.aliyuncs.com/new2.png";
  const new3 =
    "https://img-doubleli.oss-cn-hangzhou.aliyuncs.com/new3.png";
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

  return (
    <View className="detail">
      <Image className="logo" src={Logo}></Image>
      <View className="news-center">
        <View className="news-center-header">
          <View className="center-header-logo">
            <Image className="center-header-logo-img" src={newsCenter}></Image>
            新闻中心
          </View>
          <View className="more">更多{">"}</View>
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
          <View className="more">更多{">"}</View>
        </View>
        <View className="about-academy-body">
          <Image src={new3}></Image>
        </View>
      </View>
    </View>
  );
}
