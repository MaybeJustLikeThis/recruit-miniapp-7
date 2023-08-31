import { View } from "@tarojs/components";
import { useEffect, useState } from "react";
import Taro from "@tarojs/taro";
import "./ticketDetail.scss";
import { QRCode } from "taro-code";

export default function TicketDetail() {
  const [data, setData] = useState({});
  useEffect(() => {
    const eventChannel = Taro.getCurrentInstance().page.getOpenerEventChannel();
    eventChannel.on("acceptDataFromTciket", (data) => {
      setData(data);
    });
  }, []);
  const showQROrButton = (type) => {
    if (type === "null") {
      return <View className="button">抢票</View>;
    } else {
        return (
          <View className="QR">
                <QRCode
                    size={200}
                    text="aaaa"
                ></QRCode>
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
