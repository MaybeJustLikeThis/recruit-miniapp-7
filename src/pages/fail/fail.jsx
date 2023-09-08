import './fail.scss'
import { View } from "@tarojs/components";
import ApplyState from '../../Components/ApplyState/ApplyState';

export default function Fail() {
    return (
      <View>
        <ApplyState value="出了点小问题..." state="fail"></ApplyState>
      </View>
    );
}