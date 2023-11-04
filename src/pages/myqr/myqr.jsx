import "./myqr.scss";

import { View, Image, Canvas } from "@tarojs/components";
import iconLeft from "../../assets/icons/avatarLeft.png";
import iconRight from "../../assets/icons/avatarRight.png";
import { useDispatch, useSelector } from "react-redux";
import { QRCode } from "taro-code";
import { useDidShow } from "@tarojs/taro";
import { setMyQRData } from "../../store/userSlice";
import request from "../../httpService/request";

export default function Myqr() {
  const dispatch = useDispatch();
  useDidShow(async () => {
    const response = await request("/miniapp/checkin/qrcode", {
      openId: openid,
      eventName: "面试",
      expireTime: 60000,
    });
    dispatch(setMyQRData(response.data));
  });
  const { nickName, avatarUrl, openid, QRData } = useSelector(
    (state) => state.userSlice
  );
  return (
    <View className="page">
      <View className="title">我的二维码</View>
      <View className="info-box">
        <View className="box rotate"></View>
        <View className="box up">
          <View className="qr-box">
            <View className="qr">
              <QRCode text={QRData} size={160} scale={1}></QRCode>
            </View>
          </View>
          <View className="avatar-box">
            <View className="avatar">
              <Image className="img" src={avatarUrl} mode="scaleToFill"></Image>
            </View>
            <View className="icon left">
              <Image src={iconLeft} className="img"></Image>
            </View>
            <View className="icon right">
              <Image src={iconRight} className="img"></Image>
            </View>
          </View>
          <View className="nickname">{nickName}</View>
        </View>
      </View>
    </View>
  );
}
