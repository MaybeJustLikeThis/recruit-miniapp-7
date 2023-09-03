import { View } from "@tarojs/components";
import "./ticketGot.scss";
import TicketBox from "../../Components/TicketBox/TicketBox";
import {useReady} from '@tarojs/taro'
import request from "../../httpService/request";
import { useSelector } from "react-redux";

export default function TicketGot() {
  // 获取user_id
  const { user_id } = useSelector(state => state.userSlice) 
  // 进入页面发送请求
  useReady(async () => {
    const response = await request(
      "http://3xadec.natappfree.cc/ticket/snatchedTicketByUser",
      {user_id}
    );
    console.log(response,'请求成功');
  })
  // 根据数据渲染页面
  //   const showTicketBox = (arr) => {
  //   if (arr.length === 0) {
  //     return (<View>暂无宣讲会发布</View>)
  //   } else {
  //     arr.map((item, index) => {
  //       return (
  //         <TicketBox
  //           title={item.}
  //           name={item.}
  //           time={item.}
  //           position="大数据学院九楼 数港报告厅"
  //           type="null"
  //         ></TicketBox>
  //       );
  //     })
  //   }
  // };
  return (
    <View className="page">
      <View className="title">已抢的票</View>

      <View className="info-container">
        <View className="info-box">
          <TicketBox
            title="第一次宣讲大会"
            name="李林涛"
            time="2023.9.1"
            position="大数据学院九楼 数港报告厅"
            type="got"
          ></TicketBox>
        </View>
      </View>
    </View>
  );
}
