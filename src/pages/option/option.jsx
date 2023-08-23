import { View } from "@tarojs/components";
import "./option.scss";
import Taro from "@tarojs/taro";

export default function Tool() {
  const handlerOptionClick = (url) => {
    Taro.navigateTo({
      url,
    });
  };
  return (
    <View>
      <View>
        <View
          onClick={() => handlerOptionClick("/pages/ticket/ticket")}
        >
          抢票
        </View>
        <View onClick={()=> handlerOptionClick("/pages/interview/interview")}>
          面试
        </View>
        <View onClick={()=> handlerOptionClick("/pages/apply/apply")}>
          报名
        </View>
        <View onClick={()=> handlerOptionClick("/pages/scan/scan")}>
          扫码
        </View>
      </View>
    </View>
  );
}
