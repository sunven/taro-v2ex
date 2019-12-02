import { ComponentType } from "react";
import Taro, { Component, Config } from "@tarojs/taro";
import { View, Button, Text } from "@tarojs/components";
import { observer, inject } from "@tarojs/mobx";
import { AtTag } from "taro-ui";
import "taro-ui/dist/style/components/tag.scss";

import "./index.scss";

type PageStateProps = {
  nodeDetailStore: {
    nodeDetailData: {}
    setNodeData: Function;
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

  componentWillMount() {}

  componentWillReact() {
    console.log("componentWillReact");
  }

  componentDidMount() {
    Taro.request({
      url: "https://www.v2ex.com/api/nodes/show.json",
      data: this.$router.params.name
    }).then(res => {
      this.props.nodeStore.setNodeData(res.data);
    });
  }

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    const {
      nodeStore: { nodeData }
    } = this.props;
    return (
      <View className="index">
        {nodeData.map(c => {
          return (
            <AtTag className="tagml" type="primary">
              {c.title}
            </AtTag>
          );
        })}
      </View>
    );
  }
}

export default Index as ComponentType;
