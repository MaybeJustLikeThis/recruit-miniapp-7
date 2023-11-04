import { View, Image } from '@tarojs/components' 
import styles from './ButtonInterview.module.scss'
export default function ButtonInterview(props) {
    const showOrder = (type) => {
      if (type === "left") {
        return (
          <View class={styles.box}>
            <View className={styles.icon}>
              <Image
                src={props.iconUrl}
                mode="scaleToFill"
                className={styles.img}
              ></Image>
            </View>
            <View className={styles.text}>{props.value}</View>
          </View>
        );
      } else {
        return (
          <View class={styles.box}>
            <View className={styles.text}>{props.value}</View>
            <View className={styles.icon}>
              <Image
                src={props.iconUrl}
                mode="scaleToFill"
                className={styles.img}
              ></Image>
            </View>
          </View>
        );
      }
    };
    return (
      <View className={styles.container}>
        {showOrder(props.iconPosition)}
      </View>
    );
}