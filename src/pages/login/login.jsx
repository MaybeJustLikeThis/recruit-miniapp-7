/*
 * @Author: DoubleLiHao =2998000782@qq.com
 * @Date: 2023-08-24 11:10:02
 * @LastEditors: DoubleLiHao =2998000782@qq.com
 * @LastEditTime: 2023-08-29 22:08:24
 * @FilePath: \yzyy\src\pages\login\login.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { View, Button } from "@tarojs/components";
import Taro from "@tarojs/taro";
import "./login.scss";
import { useDispatch } from "react-redux";
import { setUserInfo } from "../../store/userSlice";
export default function Login() {
  const dispatch = useDispatch();
  const toIndex = () => {
    Taro.getUserProfile({
      desc: "展示头像与昵称",
      success: (data) => {
        // 获取用户信息
        dispatch(setUserInfo(data.userInfo));
        Taro.login({
          success: (data) => {
            Taro.request({
              url: "https://api.weixin.qq.com/sns/jscode2session",
              data: {
                js_code: data.code,
                appid: "wx0df8511230c13054",
                secret: "64e882d75203e6c45678c02a37a84ada",
                grant_type: "authorization_code",
              },
              success: (res) => {
                console.log(res);
                // if (res.statusCode == 200) {
                //   console.log("登录成功@@@", res.data);
                //   // Taro.switchTab({
                //   //   url: "/pages/index/index",
                //   // });
                // }
              },
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
