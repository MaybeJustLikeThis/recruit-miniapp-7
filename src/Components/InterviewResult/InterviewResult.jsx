import { View, Image } from "@tarojs/components";
import styles from "./InterviewResult.module.scss";

export default function InterviewResult(props) {
  const successLogo =
    "https://img-doubleli.oss-cn-hangzhou.aliyuncs.com/resultSuccess.png";
  const failLogo =
    "https://img-doubleli.oss-cn-hangzhou.aliyuncs.com/resultFail.png";
  const nullLogo =
    "https://img-doubleli.oss-cn-hangzhou.aliyuncs.com/resultNull.png";

  const showInfo = (type) => {
    if (type === "success") {
      return (
        <View className={`${styles.container} ${styles.success}`}>
          <View className={styles.result}>恭喜你</View>
          <View className={styles.greet}>欢迎加入云顶书院！</View>
          <View className={styles.text}>振翅云顶之上</View>
          <View className={styles.text}>极目星辰大海</View>
          <View className={styles.icon}>
            <Image className={styles.img} src={successLogo}></Image>
          </View>
        </View>
      );
    } else if (type === 'fail') {
        return (
          <View className={`${styles.container}`}>
            <View className={styles.result}>很遗憾</View>
            <View className={styles.greet}>您并未通过本次面试</View>
            <View className={styles.text}>请不要灰心</View>
            <View className={styles.text}>继续加油吧</View>
            <View className={styles.icon}>
              <Image className={styles.img} src={failLogo}></Image>
            </View>
          </View>
        );
    } else {
        return (
          <View className={`${styles.container}`}>
            <View className={styles.empty}>结果尚未发布</View>
            <View className={styles.empty}>请稍后查询</View>
            <View className={styles.iconNull}>
              <Image className={styles.img} src={nullLogo}></Image>
            </View>
          </View>
        );
    }
  };

  return showInfo(props.type);
}
