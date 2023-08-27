import styles from './ColumnBox.module.scss'
import { View } from '@tarojs/components'

export default function ColumnBox(props) {
    return (
        <View className={styles.container}>
            <View className={`${styles.box} ${styles.rotate}`}></View>
            <View className={`${styles.box} ${styles.up}`}>
                {props.children}
            </View>
        </View>
    )
}