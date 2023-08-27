import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "userSlice",
  initialState: {
    avatarUrl: "",
    nickName: "Handsome",
    qrData: {
      name: JSON.stringify({
        name: 'aaaa'
      }),
    },
  },
  reducers: {
    // 操作state的函数 action.payload是调用时传的参数
    setUserInfo(state, action) {
      const { nickName, avatarUrl } = action.payload;
      state.nickName = nickName;
      state.avatarUrl = avatarUrl;
    },
  },
});

export  const { setUserInfo, } = userSlice.actions;

export default userSlice