import { View } from "@tarojs/components";
import "./ticketGot.scss";
import TicketBox from "../../Components/TicketBox/TicketBox";

export default function TicketGot() {
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
