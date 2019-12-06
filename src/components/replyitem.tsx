import Taro, { Component } from "@tarojs/taro";
import { View, RichText } from "@tarojs/components";
import "taro-ui/dist/style/components/article.scss";
import "./replyitem.scss";
import dayjs from "dayjs";

interface IProps {
  reply: IReply;
}
class ReplyItem extends Component<IProps, {}> {
  render() {
    const { reply } = this.props;
    return (
      <View className="replyitem">
        <RichText
          nodes={reply.content_rendered}
          className="at-article__p"
        ></RichText>
        <View className="at-article__info replyitem__info">
          {dayjs(reply.last_modified).format("YYYY-MM-DD HH:mm:ss")}
          &nbsp;&nbsp;&nbsp;{reply.member.username}
        </View>
      </View>
    );
  }
}

export default ReplyItem;
