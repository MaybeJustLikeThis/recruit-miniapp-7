import { View, Image } from "@tarojs/components";
import "./applicationSubmit.scss";
import ButtonSubmit from "../../Components/ButtonSubmit/ButtonSubmit";
import ColumnBox from "../../Components/ColumnBox/ColumnBox";
import submitLogo from "../../assets/icons/applicationSubmitBlue.png";

export default function ApplicationSubmit() {
  return (
    <View>
      <View className="title">申请书提交</View>
      <View className="info-box">
        <ColumnBox>
          <View className="content">
            <View className="text">申请书照片</View>
            <View className="application-box">
              <View className="inner-content">
                <View className="icon">
                  <Image class="img" src={submitLogo}></Image>
                </View>
                <View className="text">点击提交</View>
              </View>
            </View>
            <View className="warn">(请尽可能保证图片清晰哦)</View>
          </View>
        </ColumnBox>
      </View>
      <View className="button-box">
        <ButtonSubmit value="提交"></ButtonSubmit>
      </View>
    </View>
  );
}
