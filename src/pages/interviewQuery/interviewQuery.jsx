import { View } from '@tarojs/components'
import './interviewQuery.scss'
import InterviewResult from '../../Components/InterviewResult/InterviewResult'
export default function interviewQuery() {
    return (
        <View className='page'>
            <View className='title'>结果查询</View>
            <View className='container'>
                <InterviewResult type='null'></InterviewResult>
            </View>
        </View>
    )
}