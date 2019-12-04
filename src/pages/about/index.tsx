import { ComponentType } from "react";
import Taro, { Component, Config } from "@tarojs/taro";
import { View, Button, Image } from "@tarojs/components";
import {
  AtList,
  AtListItem,
  AtModal,
  AtModalHeader,
  AtModalContent,
  AtModalAction
} from "taro-ui";
import "taro-ui/dist/style/components/list.scss";
import "taro-ui/dist/style/components/icon.scss";
import "taro-ui/dist/style/components/modal.scss";
import v2eximg from "../../assets/v2ex@2x.png";
import githubimg from "../../assets/github.png";
import "./index.scss";

class Index extends Component {
  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    navigationBarTitleText: "关于"
  };

  state = {
    isOpened: false
  };

  componentWillMount() {}

  componentWillReact() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  tarov2ex() {
    this.setState({
      isOpened: !this.state.isOpened
    });
  }

  render() {
    return (
      <View className="index">
        <View className="imgview">
          <Image className="img" src={v2eximg}></Image>
        </View>
        <AtList>
          <AtListItem
            title="关于V2EX（way to explore）"
            note="一个关于分享和探索的地方"
          />
          <AtListItem
            title="关于taro-v2ex"
            arrow="right"
            onClick={this.tarov2ex.bind(this)}
          />
          <AtListItem
            thumb={githubimg}
            title="github"
            note="https://github.com/sunven/taro-v2ex"
          />
        </AtList>
        <AtModal isOpened={this.state.isOpened} closeOnClickOverlay={false}>
          <AtModalHeader>关于taro-v2ex</AtModalHeader>
          <AtModalContent>
            <View>v2ex小程序版</View>
            <View>技术栈：taro,mbox,taro-ui,</View>
          </AtModalContent>
          <AtModalAction>
            <Button onClick={this.tarov2ex.bind(this)}>确定</Button>
          </AtModalAction>
        </AtModal>
      </View>
    );
  }
}

export default Index as ComponentType;
