import { View, Button, Picker } from '@tarojs/components'
import { useState } from 'react'
import Taro from '@tarojs/taro'
import './interviewOrder.scss'
import request from "../../httpService/request";
import {useReady} from "@tarojs/taro";
export default function interviewOrder() {
    const [time, setTime] = useState('')
    const [range, setRange] = useState([]);
    const [showTime, setShowTime] = useState('');
    useReady(async() => {
        await request("http://48awhf.natappfree.cc/interviewTime/allInterviewTimes").then((res) => {
            console.log(res);
            const r = res.data[0]
            // let startTime = new Date(r.startTime).toLocaleDateString() + '' + new Date(r.startTime).toLocaleTimeString();
            // let endTime = new Date(r.endTime).toLocaleDateString() + '' + new Date(r.endTime).toLocaleTimeString();
            const timeRange = [`${r.startTime}~${r.endTime}`];
            setRange(timeRange); 
            const isoTime = r.startTime.replace(/(\d{4})-(\d{2})-(\d{2}) (\d{2}):(\d{2})/, '$1-$2-$3T$4:$5');
            setTime(isoTime);
         }).catch((err) => {
           console.log(err);
         });
       })
    // const range = ['9.3 8:00~9:00', '9.3 9:00~10:00']
    const selectTime = (e) => {
        setShowTime(range[e.detail.value]);
        console.log(e.detail.value);
        console.log(range[e.detail.value]);
        // const parts = range[e.detail.value].split("~");
        // const startTime = parts[0];
        // const endTime = parts[1];
        // const formattedTime = startTime.replace(" ", "T") + ":00";
        // setTime(formattedTime)
        // console.log('time',time);
    }
    // const selectTime = async (e) => {
    //     const res = await request("http://48awhf.natappfree.cc/interviewTime/allInterviewTimes");
    //     console.log(res);
    //     const r = res.data[0];
    //     const timeRange = [`${r.startTime}~${r.endTime}`];
    //     setRange(timeRange);
    //     setTime(res.data[e.detail.value].startTime);
    //     console.log('time',time);
    //   };
   
    const submitClick = async() => {
        const toPage = (url) => {
            Taro.navigateTo({
                url
            })
        }
        await request("http://48awhf.natappfree.cc/interviewTime/reserve-interview", {
            "interviewTime":time,
            "userId": 105,
        },
            'POST').then((res) => {
            console.log('预约成功',res);
            toPage('/pages/success/success')
            }).catch((err) => {
                console.log(err);
                toPage("/pages/fail/fail") 
        })
    }
    return (
        <View className='page'>
            <View className='title'>预约</View>
            <View className='container'>
                <View className='box rotate'></View>
                <View className='box up'>
                    <View className='info'>
                        <View className='text'>选择面试时间</View>
                        <Picker range={range} value={showTime} onChange={selectTime} className='select'>
                            {showTime ? <View>{ showTime }</View>: '点我选择'}
                        </Picker>
                    </View>
                </View>
            </View>
            <Button className='confirm' onClick={submitClick}>确定</Button>
        </View>
    )
    
    }
    