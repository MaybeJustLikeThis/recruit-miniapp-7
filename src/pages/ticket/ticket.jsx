import { View } from "@tarojs/components";
import "./ticket.scss";
import TicketBox from "../../Components/TicketBox/TicketBox";
import Taro, { useReady } from "@tarojs/taro";
import { useEffect } from "react";
import request from "../../httpService/request";
import { useDispatch, useSelector } from "react-redux";
import { setLectures } from "../../store/ticketSlice";
export default function Ticket() {
  const dispatch = useDispatch();
  const { lectures } = useSelector((state) => state.ticketSlice);
  useReady(async () => {
    const response = await request(`/miniapp/ticket/allLecture`);
    dispatch(setLectures(response.data));
  });
  // 根据信息展示票的多少
  const showTicketBox = (arr) => {
    if (arr.length === 0) {
      return <View>暂无宣讲会发布</View>;
    } else {
      return arr.map((item, index) => {
        return (
          <View className="info-box">
            <TicketBox
              title={item.lectureTheme}
              name={item.speaker}
              time={item.lectureTime}
              position="大数据学院九楼 数港报告厅"
              type="null"
              ticket_id={item.lectureId}
            ></TicketBox>
          </View>
        );
      });
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
      <View className="info-container">{showTicketBox(lectures)}</View>
    </View>
  );
}
