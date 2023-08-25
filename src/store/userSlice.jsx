import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'userSlice',
    initialState: {
        profilePhotoUrl: '',
        nickName: 'Handsome',
        name: '',
    },
    reducers: {
        // 操作state的函数 action.payload是调用时传的参数
        setNickName(state, action) {
            state.nickName = action.payload
        }
    }
})

export  const {
    setNickName,
} = userSlice.actions

export default userSlice