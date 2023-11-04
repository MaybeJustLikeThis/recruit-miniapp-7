import styles from './TicketBox.module.scss'
import { View, Image, Button } from '@tarojs/components'
import Taro from '@tarojs/taro'

export default function TicketBox(props) {
    const iconSrc = 'https://img-doubleli.oss-cn-hangzhou.aliyuncs.com/yundingLogo.png'
    // 携带参数跳转页面
    const toDetail = () => {
        Taro.navigateTo({
            url: '/pages/ticketDetail/ticketDetail',
            success: (res) => {
                res.eventChannel.emit('acceptDataFromTciket',props)
            }
        })
    }
    return (
        <View className={styles.container}>
            <View className={`${styles.box} ${styles.rotate}`}></View>
            <View className={`${styles.box} ${styles.up}`}>
                <View className={styles.top}>
                    <View className={styles.title}>{props.title}</View>
                    <View className={styles.icon}>
                        <Image className={styles.img} src={iconSrc}></Image>
                    </View>
                </View>
                <View className={styles.infoBox}>
                    <View>宣讲人：{ props.name }</View>
                    <View>抢票时间：{ props.time }</View>
                    <View>地点：{ props.position }</View>
                </View>
                <View className={styles.button} onClick={()=>toDetail()}>查看详情</View>
            </View>
        </View>
    )
}