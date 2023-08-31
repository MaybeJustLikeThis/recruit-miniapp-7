import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "userSlice",
  initialState: {
    avatarUrl: "",
    nickName: "",
    // 二维码存放的数据
    qrData: {
      name: 'llh',
      age: 19,
    },
    // 申请书照片地址
    applicationUrl: '',
    openid: '',
  },
  reducers: {
    // 操作state的函数 action.payload是调用时传的参数
    setUserInfo(state, action) {
      const { nickName, avatarUrl } = action.payload;
      state.nickName = nickName;
      state.avatarUrl = avatarUrl;
    },
    setApplicationUrl(state, action) {
      state.applicationUrl = action.payload
    },
    setOpenId(state, action) {
      const obj = { ...state, openid: action.payload }
      return obj;
    }
  },
});

export  const { setUserInfo, setApplicationUrl, setOpenId } = userSlice.actions;

export default userSlice