/*
 * @Author: DoubleLiHao =2998000782@qq.com
 * @Date: 2023-08-28 11:30:03
 * @LastEditors: DoubleLiHao =2998000782@qq.com
 * @LastEditTime: 2023-08-28 16:08:23
 * @FilePath: \yzyy\src\store\applicationSlice.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createSlice } from "@reduxjs/toolkit";
import Taro from "@tarojs/taro";

const applySlice = createSlice({
  name: "applySlice",
  initialState: {
    name: "",
    gender: "",
    direction: "",
    major: "",
    phone: "",
    qq: "",
    email: "",
    directionCheck: "",
    academy: "云顶书院",
    school: "太原理工大学",
    studentNumber: "",
  },
  reducers: {
    setApplyInfo(state, action) {
      const obj = { ...state, ...action.payload };
      // obj.cloudId = "2022006301";
      // Taro.request({
      //   url: "http://g5vyfd.natappfree.cc/user/save",
      //   method: "POST",
      //   data: obj,
      //   success: (res) => {
      //     console.log(res);
      //   },
      // });
      return { ...state, ...action.payload };
    },
    setDirectionCheck(state, action) {
      // console.log(action.payload);
      return { ...state, directionCheck: action.payload };
    },
  },
});

export default applySlice;

export const { setApplyInfo, setDirectionCheck } = applySlice.actions;
