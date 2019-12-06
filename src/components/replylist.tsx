import Taro, { Component } from "@tarojs/taro";
import "taro-ui/dist/style/components/list.scss";
import ReplyItem from "./replyitem";
import "./replylist.scss";

interface IProps {
  replys: IReply[];
}

class ReplyList extends Component<IProps, {}> {
  render() {
    const { replys } = this.props;
    return replys === undefined
      ? ""
      : replys.map(c => <ReplyItem reply={c}></ReplyItem>);
  }
}

export default ReplyList;
