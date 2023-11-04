import { View } from "@tarojs/components";
import "./ticketGot.scss";
import TicketBox from "../../Components/TicketBox/TicketBox";
import { useDidShow } from "@tarojs/taro";
import request from "../../httpService/request";
import { useDispatch, useSelector } from "react-redux";
import { setTicketGot } from "../../store/ticketSlice";

export default function TicketGot() {
  const dispatch = useDispatch();
  // 获取user_id
  const { user_id } = useSelector((state) => state.userSlice);
  const { ticketGot } = useSelector((state) => state.ticketSlice);
  // 进入页面发送请求
  useDidShow(async () => {
    console.log(user_id, "user_id");
    const response = await request("/miniapp/ticket/snatchedTicketByUser", {
      user_id,
    });
    console.log(response.data, "got数据");
    dispatch(setTicketGot(response.data));
  });
  // 根据数据渲染页面
  const showTicketBox = (arr) => {
    if (arr.length === 0) {
      return <View>暂无抢到的票</View>;
    } else {
      return arr.map((item, index) => {
        return (
          <View className="info-box">
            <TicketBox
              title={item.lectureTheme}
              name={item.speaker}
              time={item.lectureTime}
              position="大数据学院九楼 数港报告厅"
              type="got"
              ticket_id={item.lectureId}
            ></TicketBox>
          </View>
        );
      });
    }
  };
  return (
    <View className="page">
      <View className="title">已抢的票</View>

      <View className="info-container">
        {showTicketBox(ticketGot)}
      </View>
    </View>
  );
}
