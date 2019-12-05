import { ComponentType } from "react";
import Taro, { Component, Config } from "@tarojs/taro";
import { View } from "@tarojs/components";
import "taro-ui/dist/style/components/article.scss";
import "./index.scss";

import dayjs from "dayjs";

interface IState {
  article: ITopic;
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
    navigationBarTitleText: "最热"
  };

  componentDidMount() {
    Taro.request({
      url: "https://www.v2ex.com/api/topics/show.json",
      data: { id: this.$router.params.id }
    }).then(res => {
      this.setState({ article: res.data[0] });
    });
  }

  render() {
    const { article } = this.state;
    return (
      <View className="at-article">
        <View className="at-article__h1">{article.title}</View>
        <View className="at-article__info">
          {dayjs(article.last_modified).format("YYYY-MM-DD HH:mm:ss")}
          &nbsp;&nbsp;&nbsp;{article.member.username}
        </View>
        <View className="at-article__content">
          <View className="at-article__section">
            <View className="at-article__p">{article.content_rendered}</View>
          </View>
        </View>
      </View>
    );
  }
}

export default Index as ComponentType;
