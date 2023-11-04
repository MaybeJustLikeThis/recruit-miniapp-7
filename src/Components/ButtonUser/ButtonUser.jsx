import { Button, View,Image,Text } from '@tarojs/components'
import styles from './ButtonUser.module.scss'
export default function ButtonUser(props) {
    return (
      <Button className={styles.button}>
        <View className={styles.content}>
          <Image className={styles.img} src={props.icon}></Image>
          <View className={styles.text}>
            <Text>{props.name}</Text>
          </View>
        </View>
      </Button>
    );
}