import { View, Button, Picker } from "@tarojs/components";
import { useState } from "react";
import Taro from "@tarojs/taro";
import "./interviewOrder.scss";
import request from "../../httpService/request";
import { useReady } from "@tarojs/taro";
import { useSelector } from "react-redux";
export default function interviewOrder() {
  const { user_id } = useSelector((state) => state.userSlice);
  const [time, setTime] = useState("");
  const [range, setRange] = useState([]);
  const [showTime, setShowTime] = useState("");
  const isoTime = (time) => {
    return time.replace(
      /(\d{4})-(\d{2})-(\d{2}) (\d{2}):(\d{2})/,
      "$1-$2-$3T$4:$5"
    );
  };
  useReady(async () => {
    await request("/miniapp/interviewTime/allInterviewTimes")
      .then((res) => {
        console.log(res.data);
        const r = res.data;
        // let startTime = new Date(r.startTime).toLocaleDateString() + '' + new Date(r.startTime).toLocaleTimeString();
        const timeRange = r.map((item) => {
          return [`${item.startTime}~${item.endTime}`];
        });
        setRange(timeRange);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  // const range = ['9.3 8:00~9:00', '9.3 9:00~10:00']
  const selectTime = (e) => {
    setShowTime(range[e.detail.value]);
    console.log(e.detail.value, "@");
    console.log(range[e.detail.value]);
    const parts = range[e.detail.value][0].split("~");
    const timeIso = isoTime(parts[0]);
    setTime(timeIso);
  };

  const submitClick = async () => {
    const toPage = (url) => {
      Taro.navigateTo({
        url,
      });
    };
    await request(
      "/miniapp/interviewTime/reserve-interview",
      {
        interviewTime: time,
        userId: user_id,
      },
      "POST"
    )
      .then((res) => {
        console.log("预约成功", res);
        if (res.data === 0) {
          toPage("/pages/success/success");
        } else if(res.data === 1){
            Taro.showToast({title:'该时间段已满',icon:'error'})
          toPage("/pages/fail/fail");
        } else if (res.data === 2) {
          Taro.showToast({ title: "已经预约过面试时间", icon: "error" });
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
            <View className="text">选择面试时间</View>
            <Picker
              range={range}
              value={showTime}
              onChange={selectTime}
              className="select"
            >
              {showTime ? <View>{showTime}</View> : "点我选择"}
            </Picker>
          </View>
        </View>
      </View>
      <Button className="confirm" onClick={submitClick}>
        确定
      </Button>
    </View>
  );
}
