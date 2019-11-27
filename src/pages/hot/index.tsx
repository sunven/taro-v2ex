import { ComponentType } from "react";
import Taro, { Component, Config } from "@tarojs/taro";
import { ScrollView, View } from "@tarojs/components";
import { observer, inject } from "@tarojs/mobx";

import "./index.scss";

type PageStateProps = {
  hotStore: {
    hotData: Array<any>;
    setHotData: Function;
  };
};

interface Index {
  props: PageStateProps;
}

@inject("hotStore")
@observer
class Index extends Component {
  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    navigationBarTitleText: "最热"
  };

  componentWillMount() {}

  componentWillReact() {
    console.log("componentWillReact");
  }

  componentDidMount() {
    Taro.request({ url: "https://www.v2ex.com/api/topics/hot.json" }).then(
      res => {
        this.props.hotStore.setHotData(res.data);
      }
    );
  }

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    const {
      hotStore: { hotData }
    } = this.props;
    const scrollStyle = {
      height: "100%"
    };
    const scrollTop = 0;
    const Threshold = 20;
    const vStyleA = {
      height: "150px",
      "background-color": "rgb(26, 173, 25)"
    };
    return (
      <ScrollView
        className="scrollview"
        scrollY
        scrollWithAnimation
        scrollTop={scrollTop}
        style={scrollStyle}
        lowerThreshold={Threshold}
        upperThreshold={Threshold}
      >
        {hotData.map(c => {
          return <View style={vStyleA}>{c.title}</View>;
        })}
      </ScrollView>
    );
  }
}

export default Index as ComponentType;
