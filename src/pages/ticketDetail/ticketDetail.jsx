import { View } from "@tarojs/components";
import { useEffect, useState } from "react";
import Taro from "@tarojs/taro";
import "./ticketDetail.scss";
import { QRCode } from "taro-code";
import request from "../../httpService/request";
import { useDispatch, useSelector } from "react-redux";
import { setQRData } from "../../store/ticketSlice";

export default function TicketDetail() {
  const { QRData } = useSelector((state) => state.ticketSlice);
  const dispatch = useDispatch();

  const [data, setData] = useState({});
  useEffect(() => {
    const eventChannel = Taro.getCurrentInstance().page.getOpenerEventChannel();
    eventChannel.on("acceptDataFromTciket", (data) => {
      setData(data);
    });
  }, []);
  // 抢票
  const getTicket = async () => {
    const response = await request('http://3xadec.natappfree.cc/ticket/grab', {
      ticket_id: 2,
      user_id: 11203,
    }, "POST")
    console.log(response.data,'请求成功');
  }
  // useEffect(async () => {
  //   const response = await request("http://101.7.160.182:9091/checkin/qrcode", {
  //     openId: "openid",
  //     eventName: "宣讲会",
  //     expireTime: 60000,
  //   });
  //   dispatch(setQRData(response.data));
  //   console.log(response, "发送请求成功");
  // });
  const showQROrButton = (type) => {
    if (type === "null") {
      return <View className="button" onclick={getTicket}>抢票</View>;
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
            <View className="text">内容介绍:</View>
            <View className="text-box text">{data.content || "Null"}</View>
          </View>
        )}
      </View>
      {showQROrButton(data.type)}
    </View>
  );
}
