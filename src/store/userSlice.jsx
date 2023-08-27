import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "userSlice",
  initialState: {
    avatarUrl: "",
    nickName: "Handsome",
    name: "",
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

export  const { setUserInfo } = userSlice.actions;

export default userSlice