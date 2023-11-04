import { View, Image } from "@tarojs/components";
import styles from "./ButtonOption.module.scss";
export default function ButtonOption(props) {
  // 判断图片在左还是在右
  const showOrder = (type) => {
    if (type === "left") {
      return (
        <View class={`${styles.box} ${styles.up}`}>
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
        <View class={`${styles.box} ${styles.up}`}>
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
      <View class={`${styles.box} ${styles.rotate}`}></View>
      {showOrder(props.iconPosition)}
    </View>
  );
}
