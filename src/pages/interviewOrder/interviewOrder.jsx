import { View, Button, Picker } from '@tarojs/components'
import { useState } from 'react'
import Taro from '@tarojs/taro'
import './interviewOrder.scss'
export default function interviewOrder() {
    const [time, setTime] = useState('')
    const range = ['9.3 8:00~9:00', '9.3 9:00~10:00']
    const selectTime = (e) => {
        setTime(range[e.detail.value])
    }
    const toPage = (url) => {
        Taro.navigateTo({
            url
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
                        <Picker range={range} value={time} onChange={selectTime} className='select'>
                            {time ? <View>{ time }</View>: '点我选择'}
                        </Picker>
                    </View>
                </View>
            </View>
            <Button className='confirm' onClick={()=>{toPage("/pages/fail/fail");}}>确定</Button>
        </View>
    )
}