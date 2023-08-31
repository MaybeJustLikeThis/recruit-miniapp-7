import { View, Text, Swiper, SwiperItem,Image,Button} from "@tarojs/components";
import { useLoad } from "@tarojs/taro";
import "./index.scss";
import React, { useState } from 'react';

export default function Index() {
  const Logo =
    "https://img-doubleli.oss-cn-hangzhou.aliyuncs.com/logo.png";
  useLoad(() => {
    console.log("Page loaded.");
  });
  const [currentIndex, setCurrentIndex] = useState(1);
  const items = [
    { id: 1, name: "红芯书院",src:null},
    { id: 2, name: "云顶书院",src:Logo },
    { id: 3, name: "天脊书院" ,src:null},
    { id: 4, name: "bb书院" ,src:null},
    { id: 5, name: "cc书院" ,src:null},
    { id: 6, name: "dd书院" ,src:null},
  ];
  const handleChange = (e) => {
    // console.log("当前滑块的索引", e.detail.current);
    // currentIndex = e.detail.current;
    if (e.detail.current === 5) {
      setCurrentIndex(0);
    } else {
    setCurrentIndex(e.detail.current+1);
    }
    // let index = e.detail.current+1
  };
  console.log("当前书院：",items[currentIndex].name );

  const handleItemClick = (item) => {
    console.log("点击书院：", item.name);
    // 这里可以根据需要进行其他处理
    // setCurrentIndex(item.id-1);

  };

  return (
    <View className="home">
      <View className="prompts">
        <h1>您好，</h1>
        <View className="welcome">
          欢迎使用<h1>「云昭云曜」</h1>
        </View>
        <View>请选择你所在的</View>
        <h1>「书院」</h1>
      </View>
      <Swiper
        className="swiper"
        indicatorColor="#999"
        indicatorActiveColor="red"
        vertical={false}
        circular
        indicatorDots={false}
        displayMultipleItems={3}
        current={0}
        onChange={handleChange}
        
      >
        {items.map((item, index) => {
          let className = "swiper-slide";
          if (index === currentIndex) {
            className += " active";
          }
          return (
            <SwiperItem key={item.id}>
              <View className={className}  onClick={() => handleItemClick(item)}>
              {item.src !== null ? <Image class="image" src={item.src} />:item.name}
              </View>
            </SwiperItem>
          );
        })}
      </Swiper>
      <View>
        <Button 
          plain={false}
          className="submitButton"
        >
          确认</Button>
      </View>
    </View>
  );
}
