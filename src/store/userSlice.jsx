/*
 * @Author: DoubleLiHao =2998000782@qq.com
 * @Date: 2023-08-25 18:25:58
 * @LastEditors: DoubleLiHao =2998000782@qq.com
 * @LastEditTime: 2023-09-03 10:37:06
 * @FilePath: \yzyy\src\store\userSlice.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "userSlice",
  initialState: {
    // 用户头像和昵称
    avatarUrl: "",
    nickName: "",

    user_id: "",
    isAdmin: 0,
    openid: "",

    QRData: "",
    // 申请书照片地址
    applicationUrl: "",
  },
  reducers: {
    // 操作state的函数 action.payload是调用时传的参数
    setUserInfo(state, action) {
      return { ...state, ...action.payload };
    },
    setMyQRData(state, action) {
      return { ...state, QRData: action.payload };
    },
    setApplicationUrl(state, action) {
      state.applicationUrl = action.payload;
    },
    setLoginData(state, action) {
      const obj = {
        ...state,
        openid: action.payload.openid,
        isAdmin: action.payload.isAdmin,
        user_id: action.payload.id,
      };
      return obj;
    },
  },
});

export const { setUserInfo, setApplicationUrl, setLoginData, setMyQRData, } =
  userSlice.actions;

export default userSlice;
