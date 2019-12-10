import { ComponentType } from "react";
import Taro, { Component, Config } from "@tarojs/taro";
import { View, RichText, ScrollView } from "@tarojs/components";
import "taro-ui/dist/style/components/article.scss";
import "./index.scss";
import ReplyList from "../../components/replylist";

import dayjs from "dayjs";

interface IState {
  article: ITopic;
  replys: IReply[];
}

class Index extends Component<{}, IState> {
  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    navigationBarTitleText: "详情"
  };

  componentDidMount() {
    Taro.request({
      url: "https://www.v2ex.com/api/topics/show.json",
      data: { id: this.$router.params.id }
    }).then(res => {
      this.setState({ article: res.data[0] });
    });
    Taro.request({
      url: "https://www.v2ex.com/api/replies/show.json",
      data: { topic_id: this.$router.params.id }
    }).then(res => {
      this.setState({ replys: res.data });
    });
  }

  render() {
    const { article, replys } = this.state;
    const scrollStyle = {
      height: "100%"
    };
    const scrollTop = 0;
    const Threshold = 20;
    return article === undefined ? (
      ""
    ) : (
      <ScrollView
        className="scrollview"
        scrollY
        scrollWithAnimation
        scrollTop={scrollTop}
        style={scrollStyle}
        lowerThreshold={Threshold}
        upperThreshold={Threshold}
      >
        <View className="at-article">
          <View className="at-article__h1">{article.title}</View>
          <View className="at-article__info">
            {dayjs.unix(article.last_modified).format("YYYY-MM-DD HH:mm:ss")}
            &nbsp;&nbsp;&nbsp;{article.member.username}
          </View>
          <View className="at-article__content">
            <View className="at-article__section">
              <RichText
                nodes={article.content_rendered}
                className="at-article__p"
              ></RichText>
            </View>
          </View>
          <ReplyList replys={replys}></ReplyList>
        </View>
      </ScrollView>
    );
  }
}

export default Index as ComponentType;
