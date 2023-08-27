import { View, Text } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import './index.scss'
// import Swiper JS
import Swiper from 'swiper';
// import Swiper styles
import 'swiper/css';

var mySwiper = new Swiper('.swiper', {
  autoplay: true,//可选选项，自动滑动
  loop: true,
})

export default function Index() {

  useLoad(() => {
    console.log('Page loaded.')
  })

  return (
    <View className="home">
      <View className="prompts">
        <h1>您好，</h1>
        <View className="welcome">欢迎使用<h1>「云昭云曜」</h1></View>
        <View>请选择你所在的</View>
        <h1>「书院」</h1>
      </View>
      <View>
      <div class="swiper">
  <div class="swiper-wrapper">
    <div class="swiper-slide">slider1</div>
    <div class="swiper-slide">slider2</div>
    <div class="swiper-slide">slider3</div>
  </div>
</div>
      </View>

    
    </View>
  )
}
