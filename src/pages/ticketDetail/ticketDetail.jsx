import { View } from "@tarojs/components";
import { useEffect, useState } from "react";
import Taro, { useDidShow } from "@tarojs/taro";
import "./ticketDetail.scss";
import { QRCode } from "taro-code";
import request from "../../httpService/request";
import { useDispatch, useSelector } from "react-redux";
import { setQRData } from "../../store/ticketSlice";

export default function TicketDetail() {
  const { QRData } = useSelector((state) => state.ticketSlice);
  const { user_id, openid } = useSelector((state) => state.userSlice);
  const dispatch = useDispatch();

  const [data, setData] = useState({});
  useEffect(() => {
    const eventChannel = Taro.getCurrentInstance().page.getOpenerEventChannel();
    eventChannel.on("acceptDataFromTciket", (data) => {
      setData(data);
    });
  }, []);

  useDidShow(async () => {
    const response = await request("/miniapp/checkin/qrcode", {
      openId: openid,
      eventName: "宣讲会",
      expireTime: 60000,
    });
    dispatch(setQRData(response.data));
  });
  // 抢票
  const getTicket = async () => {
    const response = await request(
      "/miniapp/ticket/grab",
      {
        ticketId: data.ticket_id,
        userId:user_id,
      },
      "POST"
    );
    if (response.data) {
      Taro.showToast({ title: "抢票成功", icon: "success", duration: 2000 });
      setTimeout(() => {
        Taro.switchTab({ url: "/pages/option/option" });
      }, 2000);
    } else {
      Taro.showToast({ title: "没有抢到票", icon: "error", duration: 2000 });
    }
  };
  const showQROrButton = (type) => {
    if (type === "null") {
      return (
        <View className="button" onclick={getTicket}>
          抢票
        </View>
      );
    } else {
      return (
        <View className="QR">
          <QRCode size={200} text={QRData}></QRCode>
        </View>
      );
    }
  };

  return (
    <View className="page">
      <View className="container">
        <View className="title">详情</View>
        <View className="title-name">{data.title}</View>
        <View className="text">宣讲人:{data.name}</View>
        <View className="text">时间:{data.time}</View>
        <View className="text">地点:{data.position}</View>
        {data.type === "got" ? (
          false
        ) : (
          <View>
            <View className="text">内容介绍:{data.title}</View>
            <View className="text-box text">{data.content || "Null"}</View>
          </View>
        )}
      </View>
      {showQROrButton(data.type)}
    </View>
  );
}
