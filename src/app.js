import { useLaunch } from '@tarojs/taro'
import './app.scss'
document.documentElement.style.fontSize= 100 / 375 +'vw'
function App({ children }) {

  useLaunch(() => {
    console.log('App launched.')
  })

  // children 是将要会渲染的页面
  return children
}

export default App
