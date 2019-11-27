import Taro, { Component, Config } from "@tarojs/taro";
import { Provider } from "@tarojs/mobx";
import Hot from "./pages/hot";

import counterStore from "./store/counter";
import hotStore from "./store/hotStore";

import "./app.scss";

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

const store = {
  counterStore,
  hotStore
};

class App extends Component {
  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    pages: ["pages/hot/index", "pages/new/index", "pages/node/index"],
    tabBar: {
      list: [
        {
          pagePath: "pages/hot/index",
          text: "最热"
          //iconPath: "./assets/tab_home.png",
          //selectedIconPath: "./assets/tab_home_f.png"
        },
        {
          pagePath: "pages/new/index",
          text: "最新"
          //iconPath: "./assets/tab_me.png",
          //selectedIconPath: "./assets/tab_me_f.png"
        },
        {
          pagePath: "pages/node/index",
          text: "节点"
          //iconPath: "./assets/tab_me.png",
          //selectedIconPath: "./assets/tab_me_f.png"
        }
      ],
      color: "#a6a6a6",
      selectedColor: "#78a4fa",
      backgroundColor: "#ffffff",
      borderStyle: "black"
    },
    window: {
      backgroundTextStyle: "light",
      navigationBarBackgroundColor: "#fff",
      navigationBarTitleText: "WeChat",
      navigationBarTextStyle: "black"
    }
  };

  componentDidMount() {}

  componentDidShow() {}

  componentDidHide() {}

  componentDidCatchError() {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render() {
    return (
      <Provider store={store}>
        <Hot />
      </Provider>
    );
  }
}

Taro.render(<App />, document.getElementById("app"));
