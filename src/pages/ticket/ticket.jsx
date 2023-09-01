import { View } from "@tarojs/components";
import "./ticket.scss";
import TicketBox from "../../Components/TicketBox/TicketBox";
import Taro,{useReady} from "@tarojs/taro";
import { useEffect } from "react";
import request from "../../httpService/request";
import { useDispatch, useSelector } from "react-redux";
import { setLectures } from "../../store/ticketSlice";
export default function Ticket() {
  const dispatch = useDispatch();
  const { lectures } = useSelector((state) => state.ticketSlice);
  // useEffect有问题
  // useEffect(() => {
  //   const response = request("http://3xadec.natappfree.cc/ticket/allLecture");
  //   dispatch(setLectures(response.data));
  //   console.log(response.data, "请求成功");
  // });
  useReady(async() => {
    const response = await request("http://3xadec.natappfree.cc/ticket/allLecture");
    dispatch(setLectures(response.data));
    console.log(response.data, "请求成功");
  })

  const showTicketBox = (arr) => {
    if (arr.length === 0) {
      return 1
    }
  };
  const toTicketGot = () => {
    Taro.navigateTo({
      url: "/pages/ticketGot/ticketGot",
    });
  };
  return (
    <View className="page">
      <View className="top">
        <View className="title">场次</View>
        <View className="ticket-got" onClick={toTicketGot}>
          已抢的票
        </View>
      </View>
      <View className="info-container">
        <View className="info-box">
          <TicketBox
            title="第一次宣讲大会"
            name="李林涛"
            time='2213d'
            position="大数据学院九楼 数港报告厅"
            type="null"
          ></TicketBox>
        </View>
      </View>
    </View>
  );
}
