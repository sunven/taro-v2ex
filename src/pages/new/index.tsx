import { ComponentType } from "react";
import Taro, { Component, Config } from "@tarojs/taro";
import { observer, inject } from "@tarojs/mobx";
import List from "../../components/list";
import "taro-ui/dist/style/components/card.scss";
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
    navigationBarTitleText: "最新"
  };

  componentDidMount() {
    Taro.request({ url: "https://www.v2ex.com/api/topics/latest.json" }).then(
      res => {
        this.props.hotStore.setHotData(res.data);
      }
    );
  }

  render() {
    const {
      hotStore: { hotData }
    } = this.props;
    return <List data={hotData}></List>;
  }
}

export default Index as ComponentType;
