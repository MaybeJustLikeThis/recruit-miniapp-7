/*
 * @Author: DoubleLiHao =2998000782@qq.com
 * @Date: 2023-08-29 11:11:31
 * @LastEditors: DoubleLiHao =2998000782@qq.com
 * @LastEditTime: 2023-09-08 17:25:22
 * @FilePath: \yzyy\src\pages\applicationSubmit\applicationSubmit.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { View, Image } from "@tarojs/components";
import "./applicationSubmit.scss";
import ButtonSubmit from "../../Components/ButtonSubmit/ButtonSubmit";
import ColumnBox from "../../Components/ColumnBox/ColumnBox";
import Taro, { useDidShow } from "@tarojs/taro";
import { useDispatch, useSelector } from "react-redux";
import { setApplicationUrl } from "../../store/userSlice";
import request from "../../httpService/request";

export default function ApplicationSubmit() {
  const submitLogo =
    "https://img-doubleli.oss-cn-hangzhou.aliyuncs.com/applicationSubmitBlue.png";
  const { applicationUrl, openid } = useSelector((state) => state.userSlice);
  const dispatch = useDispatch();
  console.log(applicationUrl,'申请书');
  useDidShow(async () => {
    // 进入页面请求提交过的申请书
    const response = await request("/miniapp/register/photo", {
      openId: openid,
    });
    const urlArr = [];
    response.data.map((item) => {
      urlArr.push(item.photoUrl);
    });
    dispatch(setApplicationUrl(urlArr));
  });

  const reSubmit = async () => {
    // 先删除数据库中的申请书
    // const response = await request('',{})
    dispatch(setApplicationUrl([]));
    submitImg()
  }
  const submitImg = () => {
    Taro.chooseImage({
      sizeType: ["original", "compressed"],
      sourceType: ["album", "camera"],
      success: (res) => {
        res.tempFilePaths.map((item) => {
          Taro.showLoading({ title: "上传中..." });
          Taro.uploadFile({
            url: "https://ydsy.61231.cn/miniapp/register/upload",
            filePath: item,
            name: "file",
            formData: {
              cloudId: openid,
            },
            header: {
              "content-type": "multipart/form-data",
            },
            success: (res) => {
              Taro.hideLoading();
              Taro.showToast({ title: "申请书上传成功" });
            },
          });
        });
        dispatch(setApplicationUrl(res.tempFilePaths));
      },
      fail: (err) => {
        console.log("未选择图片", err);
      },
    });
  };
  const previewImg = (applicationUrl) => {
    Taro.previewImage({
      urls: applicationUrl,
    });
  };
  const showImgOrSubmit = (applicationUrl) => {
    if (applicationUrl != "") {
      return (
        <Image
          className="img"
          src={applicationUrl[0]}
          onClick={() => previewImg(applicationUrl)}
        ></Image>
      );
    } else {
      return (
        <View className="inner-content" onClick={submitImg}>
          <View className="icon">
            <Image class="img" src={submitLogo}></Image>
          </View>
          <View className="text">点击提交</View>
        </View>
      );
    }
  };
  return (
    <View className="page">
      <View className="title">申请书提交</View>
      <View className="info-box">
        <ColumnBox>
          <View className="content">
            <View className="text">申请书照片</View>
            <View className="application-box">
              {showImgOrSubmit(applicationUrl)}
            </View>
            <View className="warn">请尽可能保证图片清晰哦</View>
            <View className="warn">(上传后点击可预览)</View>
          </View>
        </ColumnBox>
      </View>
      {applicationUrl === "" ? (
        <View className="button-box" onClick={submitImg}>
          <ButtonSubmit value="提交"></ButtonSubmit>
        </View>
      ) : (
        <View className="button-box" onClick={reSubmit}>
          <ButtonSubmit value="重新提交"></ButtonSubmit>
        </View>
      )}
    </View>
  );
}
