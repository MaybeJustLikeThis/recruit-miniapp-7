import './fail.scss'
import { View } from "@tarojs/components";
import ApplyState from '../../Components/ApplyState/ApplyState';

export default function Fail() {
    return (
      <View>
        <ApplyState value="学号/邮箱格式错误" state="fail"></ApplyState>
      </View>
    );
}