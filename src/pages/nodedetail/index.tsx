import { ComponentType } from "react";
import Taro, { Component, Config } from "@tarojs/taro";
import { View, Image } from "@tarojs/components";
import { observer, inject } from "@tarojs/mobx";
import "taro-ui/dist/style/components/avatar.scss";

import "./index.scss";

type PageStateProps = {
  nodeDetailStore: {
    nodeDetailData: any;
    setNodeDetailData: Function;
  };
};

interface Index {
  props: PageStateProps;
}

@inject("nodeDetailStore")
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
    navigationBarTitleText: "节点详情"
  };

  componentDidMount() {
    Taro.request({
      url: "https://www.v2ex.com/api/nodes/show.json",
      data: { name: this.$router.params.name }
    }).then(res => {
      this.config.navigationBarTitleText = res.data.title;
      this.props.nodeDetailStore.setNodeDetailData(res.data);
    });
  }

  render() {
    const {
      nodeDetailStore: { nodeDetailData }
    } = this.props;
    return (
      <View className="index">
        <Image className="img" src={nodeDetailData.avatar_large}></Image>
        <View className="header">{nodeDetailData.header}</View>
        <View className="stars">stars：{nodeDetailData.stars}</View>
        <View className="stars">主题：{nodeDetailData.topics}</View>
      </View>
    );
  }
}

export default Index as ComponentType;
