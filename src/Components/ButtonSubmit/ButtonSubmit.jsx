import styles from './ButtonSubmit.module.scss'
import { View } from "@tarojs/components"
export default function ButtonSubmit(props) {
    return (
        <View className={styles.box}>
            <View className={styles.text}>{ props.value }</View>
        </View>
    )
}