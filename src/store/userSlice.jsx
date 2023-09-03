import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "userSlice",
  initialState: {
    // 用户头像和昵称
    avatarUrl: "",
    nickName: "",

    user_id: "1",
    isAdmin: 1,
    openid: "",

    // 二维码存放的数据
    qrData: {
      name: "llh",
      age: 19,
    },
    // 申请书照片地址
    applicationUrl: "",
  },
  reducers: {
    // 操作state的函数 action.payload是调用时传的参数
    setUserInfo(state, action) {
      return {...state, ...action.payload}
    },
    setAvatar(state, action) {
      const obj = { ...state, avatarUrl: action.payload }
      return obj
    },
    setNickName(state, action) {
      const obj = { ...state, nickName: action.payload }
      return obj
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

export const { setUserInfo, setApplicationUrl, setLoginData, setAvatar,setNickName } =
  userSlice.actions;

export default userSlice;
