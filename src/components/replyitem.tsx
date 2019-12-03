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

import "./replyitem.scss";

interface IProps {
  reply: IReply;
}

class ReplyItem extends Component<IProps, {}> {
  render() {
    return <View>{this.props.reply.content}</View>;
  }
}

export default ReplyItem;
