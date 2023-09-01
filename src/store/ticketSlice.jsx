import { createSlice } from "@reduxjs/toolkit";

const ticketSlice = createSlice({
  name: "ticketSlice",
    initialState: {
    //   加密数据
        QRData: '',
        lectures:[]
    },
    reducers: {
        setQRData: (state,action) => {
            const obj = { ...state, QRData: action.payload }
            console.log('设置的state的值',obj);
            return obj
        },
        setLectures: (state, action) => {
            const obj = { ...state, lectures: action.payload }
            return obj
        }
    }
});

export default ticketSlice;
export const { setQRData, setLectures } = ticketSlice.actions;