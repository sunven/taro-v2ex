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
import ReplyItem from "./replyitem";

import "./replylist.scss";

interface IProps {
  replys: IReply[];
}

class ReplyList extends Component<IProps, {}> {
  render() {
    return (
      <View>
        {this.props.replys.map(c => (
          <ReplyItem reply={c}></ReplyItem>
        ))}
      </View>
    );
  }
}

export default ReplyList;
