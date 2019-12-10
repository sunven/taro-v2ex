import Taro, { Component } from "@tarojs/taro";
import { ScrollView } from "@tarojs/components";
import { AtCard } from "taro-ui";
import "taro-ui/dist/style/components/card.scss";
import "./list.scss";

import dayjs from "dayjs";

interface IProp {
  data: Array<any>;
}

class List extends Component<IProp, {}> {
  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */

  atCardOnClick(id) {
    Taro.navigateTo({
      url: "/pages/topicdetail/index?id=" + id
    });
  }

  render() {
    const { data } = this.props;
    const scrollStyle = {
      height: "100%"
    };
    const scrollTop = 0;
    const Threshold = 20;

    return (
      <ScrollView
        className="scrollview"
        scrollY
        scrollWithAnimation
        scrollTop={scrollTop}
        style={scrollStyle}
        lowerThreshold={Threshold}
        upperThreshold={Threshold}
      >
        {data.map(c => {
          let note =
            dayjs.unix(c.last_modified).format("YYYY-MM-DD HH:mm:ss") +
            "　" +
            c.member.username +
            "　" +
            c.node.title;
          return (
            <AtCard
              note={note}
              title={c.title}
              isFull={true}
              onClick={this.atCardOnClick.bind(this, c.id)}
            >
              {c.content}
            </AtCard>
          );
        })}
      </ScrollView>
    );
  }
}

export default List;
