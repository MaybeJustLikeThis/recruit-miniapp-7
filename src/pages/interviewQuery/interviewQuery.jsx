import { View } from '@tarojs/components'
import './interviewQuery.scss'
import InterviewResult from '../../Components/InterviewResult/InterviewResult'
import React, { useState } from 'react';
import Taro, { useReady } from "@tarojs/taro";
import request from "../../httpService/request";

export default function interviewQuery() {
    const [type, setType] = useState('');
     useReady(async() => {
     await request("http://8xsxi9.natappfree.cc/interview/101/result").then((res) => {
          console.log(res);
          setType(res);
      }).catch((err) => {
        console.log(err);
      });
      console.log(res, "请求成功");
    })
    return (
        <View className='page'>
            <View className='title'>结果查询</View>
            <View className='container'>
                <InterviewResult type={type }></InterviewResult>
            </View>
        </View>
    )
}