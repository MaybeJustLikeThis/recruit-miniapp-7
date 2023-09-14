import { View, Button, Picker } from "@tarojs/components";
import { useState } from "react";
import Taro, { useDidShow } from "@tarojs/taro";
import "./interviewOrder.scss";
import request from "../../httpService/request";
import { useSelector } from "react-redux";
export default function interviewOrder() {
  const { user_id } = useSelector((state) => state.userSlice);
  const [time, setTime] = useState("");
  const [range, setRange] = useState([]);
  const [isOrder, setIsOrder] = useState(false);
  const [showTime, setShowTime] = useState("");
  const isoTime = (time) => {
    return time.replace(
      /(\d{4})-(\d{2})-(\d{2}) (\d{2}):(\d{2})/,
      "$1-$2-$3T$4:$5"
    );
  };
  useDidShow(async () => {
    // 是否已经预约面试
    await request("/miniapp/interviewTime/reservations", {
      userId: user_id,
    }).then((res) => {
      if (res.data.length !== 0) {
        setIsOrder(true);
        const time = new Date(res.data.data[0].interviewTime);
        setShowTime(time.toLocaleString());
      }
    });
    // 展示预约时间
    await request("/miniapp/interviewTime/allInterviewTimes")
      .then((res) => {
        const r = res.data;
        const timeRange = r.map((item) => {
          const endtime = item.endTime.split(" ")[1];
          return [`${item.startTime}~${endtime}`];
        });
        setRange(timeRange);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  // 选择面试时间
  const selectTime = (e) => {
    setShowTime(range[e.detail.value]);
    console.log(e.detail.value, "@");
    console.log(range[e.detail.value]);
    const parts = range[e.detail.value][0].split("~");
    const timeIso = isoTime(parts[0]);
    setTime(timeIso);
  };

  // 提交面试预约
  const submitClick = async () => {
    const toPage = (url) => {
      Taro.navigateTo({
        url,
      });
    };
    // 发送面试预约请求
    await request(
      "/miniapp/interviewTime/reserve-interview",
      {
        interviewTime: time,
        userId: user_id,
      },
      "POST"
    )
      .then((res) => {
        if (res.data === 0) {
          toPage("/pages/success/success");
        } else if (res.data === 1) {
          Taro.showToast({
            title: "该时间段已满",
            icon: "error",
            duration: 1500,
          });
        } else if (res.data === 2) {
          Taro.showToast({
            title: "已经预约过面试时间",
            icon: "error",
            duration: 1500,
          });
        } else if (res.data === 3) {
          Taro.showToast({
            title: "请先提交申请书",
            icon: "error",
            duration: 1500,
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <View className="page">
      <View className="title">预约</View>
      <View className="container">
        <View className="box rotate"></View>
        <View className="box up">
          <View className="info">
            {isOrder ? (
              <View className="text">已预约的面试时间</View>
            ) : (
              <View className="text">选择面试时间</View>
            )}
            {showTime !== "" ? (
              <View className="select">{showTime}</View>
            ) : (
              <Picker
                range={range}
                value={showTime}
                onChange={selectTime}
                className="select"
              >
                点我选择
              </Picker>
            )}
          </View>
        </View>
      </View>
      {isOrder ? (
        <Button className="confirm">已预约</Button>
      ) : (
        <Button className="confirm" onClick={submitClick}>
          确定
        </Button>
      )}
    </View>
  );
}
