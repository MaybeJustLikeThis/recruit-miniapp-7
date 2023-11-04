import { View, Text } from "@tarojs/components";
import styles from "./ApplyState.module.scss";
export default function ApplyState(props) {
  if (props.state == "success") {
    return (
      <View className={`${styles.page} ${styles.success}`}>
        <View className={styles.text}>{props.value}</View>
      </View>
    );
  } else {
      return (
        <View className={`${styles.page} ${styles.fail}`}>
          <View className={styles.text}>{props.value}</View>
        </View>
      );
  }
}
