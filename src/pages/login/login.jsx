/*
 * @Author: DoubleLiHao =2998000782@qq.com
 * @Date: 2023-08-24 11:10:02
 * @LastEditors: DoubleLiHao =2998000782@qq.com
 * @LastEditTime: 2023-08-29 22:08:24
 * @FilePath: \yzyy\src\pages\login\login.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { View, Image } from "@tarojs/components";
import Taro from "@tarojs/taro";
import "./login.scss";
import { useDispatch, useSelector } from "react-redux";
import { setOpenId, setUserInfo } from "../../store/userSlice";
export default function Login() {
  const logoUrl =
    "https://img-doubleli.oss-cn-hangzhou.aliyuncs.com/yundingLogo.png";
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.userSlice);
  const toIndex = () => {
    Taro.getUserProfile({
      desc: "展示头像与昵称",
      success: (data) => {
        // 获取用户信息
        dispatch(setUserInfo(data.userInfo));
        Taro.login({
          success: (data) => {
            // Taro.request({
            //   url: "https://img-doubleli.oss-cn-hangzhou.aliyuncs.com/yundingLogo.png",
            //   data: {
            //     code: data.code,
            //   },
            //   method: "POST",
            //   success: (res) => {
            //     if (res.statusCode == 200) {
            //       console.log(res);
            //       dispatch(setOpenId(res.data.msg));
                  // Taro.switchTab({
                  //   url: "/pages/index/index",
                  // });
            //     }
            //   },
            // });
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
      <View className="page">
        <View className="icon">
          <Image className="img" src={logoUrl}></Image>
        </View>
        <View className="name">「云昭云曜」</View>
        <View onClick={toIndex} className="button">
          进入
        </View>
      </View>
    </View>
  );
}
