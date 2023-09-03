import { createSlice } from "@reduxjs/toolkit";

const ticketSlice = createSlice({
  name: "ticketSlice",
  initialState: {
    //   加密数据
    QRData: "",
    // 宣讲会
    lectures: [],
    // 抢到的票
    ticketGot: [],
  },
  reducers: {
    setQRData: (state, action) => {
      const obj = {
        ...state,
        QRData: action.payload,
      };
      console.log("设置的state的值", obj);
      return obj;
    },
    setLectures: (state, action) => {
      const obj = { ...state, lectures: action.payload };
      return obj;
    },
    setTicketGot: (state, action) => {
      const obj = { ...state, ticketGot: action.payload };
      return obj;
    },
  },
});

export default ticketSlice;
export const { setQRData, setLectures, setTicketGot } = ticketSlice.actions;
