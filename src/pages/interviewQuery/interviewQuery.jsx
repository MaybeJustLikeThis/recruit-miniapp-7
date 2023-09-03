import { View } from "@tarojs/components";
import "./interviewQuery.scss";
import InterviewResult from "../../Components/InterviewResult/InterviewResult";
import React, { useState } from "react";
import Taro, { useReady } from "@tarojs/taro";
import request from "../../httpService/request";
import { useSelector } from "react-redux";

export default function interviewQuery() {
  const [type, setType] = useState("");
  const { user_id } = useSelector((state) => state.userSlice);
  useReady(async () => {
    await request(`/miniapp/interview/${user_id}/result`)
      .then((res) => {
          console.log(res);
          switch (res.data) {
            case 0:
                setType("fail");
                break;
              case 1:
                  setType("success");
                  break;
              case 2:
                  setType('null')
                  break;
            default:
                break;
          }
      })
      .catch((err) => {
        console.log(err);
      });
  });
  return (
    <View className="page">
      <View className="title">结果查询</View>
      <View className="container">
        <InterviewResult type={type}></InterviewResult>
      </View>
    </View>
  );
}
