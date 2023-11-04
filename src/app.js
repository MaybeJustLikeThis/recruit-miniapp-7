import { useLaunch } from '@tarojs/taro'
import { Provider } from 'react-redux'
import store from './store/index'

import "./app.scss";
function App({ children }) {

  // useLaunch(() => {
  //   console.log('App launched.')
  // }),
  useLaunch(() => {

    // wx.loadFontFace({
    //   family: 'PingFang',
    //   source: 'url("https://cd-mapbed.oss-cn-beijing.aliyuncs.com/PingFang_Regular.ttf")',
    //   success: () => {
    //     console.log('字体加载成功');
    //   },
    //   fail: () => {
    //     console.log('字体加载失败');
    //   },
    // });



  });
  // children 是将要会渲染的页面
  return (
    <Provider store={store}>{children}</Provider>
  )
}

export default App
