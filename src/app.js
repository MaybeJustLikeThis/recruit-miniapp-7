import { useLaunch } from '@tarojs/taro'
import { Provider } from 'react-redux'
import store from './store/index'

import "./app.scss";
function App({ children }) {

  useLaunch(() => {
    console.log('App launched.')
  })

  // children 是将要会渲染的页面
  return (
    <Provider store={store}>{ children }</Provider>
  )
}

export default App
