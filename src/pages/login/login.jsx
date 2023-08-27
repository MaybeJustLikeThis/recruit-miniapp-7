import { View, Button } from "@tarojs/components";
import Taro from "@tarojs/taro";
import "./login.scss";
import { useDispatch } from "react-redux";
import { setUserInfo } from "../../store/userSlice";
export default function Login() {
  const dispatch = useDispatch();
  const toIndex = () => {
    Taro.getUserProfile({
      desc: "是否允许获取用户信息",
      success: (data) => {
        // 获取用户信息
        dispatch(setUserInfo(data.userInfo));
        Taro.login({
          success: (data) => {
            console.log(data, "登录成功");
            Taro.switchTab({
              url: "/pages/index/index",
            });
          },
        });
      },
      fail: () => {
        console.log("获取信息失败");
      },
    });
  };
  return (
    <View>
      <View>我是登录页面</View>
      <Button onClick={toIndex}>登录</Button>
    </View>
  );
}
