import "./apply.scss";

import {
  View,
  Image,
  Form,
  Text,
  Input,
  Picker,
  Button,
} from "@tarojs/components";
import ColumnBox from "../../Components/ColumnBox/ColumnBox";
import { useDispatch, useSelector } from "react-redux";
import { setApplyInfo, setDirectionCheck } from "../../store/applySlice";
import Taro from "@tarojs/taro";
import { useEffect, useState } from "react";
import request from "../../httpService/request";

function Apply() {
  const logo =
    "https://img-doubleli.oss-cn-hangzhou.aliyuncs.com/yundingLogo.png";

  // 选择的方向
  const direction = ["开发", "设计", "秘书处"];
  const data = useSelector((state) => state.applySlice);

  // 判断是否是初次进入页面
  const [isFirstEnter, setisFirstEnter] = useState(true);
  useEffect(() => {
    if (!isFirstEnter) {
      request("/miniapp/user/save", data, "POST");
    }
  }, [data, isFirstEnter]);

  const dispatch = useDispatch();
  // 获取选择的方向并进行展示
  const { directionCheck } = data;
  const directionChoose = (e) => {
    const index = e.target.value;
    dispatch(setDirectionCheck(direction[index]));
  };

  // 提交表单
  const formSubmit = (e) => {
    e.detail.value.direction = directionCheck;
    dispatch(setApplyInfo(e.detail.value));
    setisFirstEnter(false);
    Taro.switchTab({url:"/pages/user/user"})
  };

  return (
    <View className="page">
      <View className="info-box">
        <ColumnBox>
          <View className="box-title">填写你的信息</View>
          <View className="box-icon">
            <Image className="img" src={logo}></Image>
          </View>
          <View className="info-form">
            <Form onSubmit={formSubmit}>
              <View className="top">
                <Text>姓名</Text>
                <Input name="name" className="top-input"></Input>
                <Text>性别</Text>
                <Input name="gender" className="top-input"></Input>
              </View>
              <View className="flex-box">
                <Text>学号</Text>
                <Input
                  name="studentNumber"
                  className="long-input"
                  placeholder="请填写"
                ></Input>
              </View>
              <View className="flex-box">
                <Text>方向</Text>
                <Picker
                  range={direction}
                  className="select"
                  onChange={directionChoose}
                >
                  {directionCheck || "请选择"}
                </Picker>
              </View>
              <View className="flex-box">
                <Text>专业班级</Text>
                <Input
                  name="major"
                  className="long-input"
                  placeholder="例：软件2139"
                ></Input>
              </View>
              <View className="flex-box">
                <Text>手机号</Text>
                <Input
                  name="phone"
                  className="long-input"
                  placeholder="请填写"
                ></Input>
              </View>
              <View className="flex-box">
                <Text>QQ</Text>
                <Input
                  name="qq"
                  className="long-input"
                  placeholder="请填写"
                ></Input>
              </View>
              <View className="flex-box">
                <Text>邮箱</Text>
                <Input
                  name="email"
                  className="long-input"
                  placeholder="请填写"
                ></Input>
              </View>
              <Button formType="submit" className="submit">
                提交
              </Button>
            </Form>
          </View>
        </ColumnBox>
      </View>
    </View>
  );
}

export default Apply;
