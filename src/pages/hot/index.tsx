import { ComponentType } from "react";
import Taro, { Component, Config } from "@tarojs/taro";
import { ScrollView, View } from "@tarojs/components";
import { observer, inject } from "@tarojs/mobx";
import { AtCard } from "taro-ui";
import "taro-ui/dist/style/components/card.scss";
import "./index.scss";

import dayjs from "dayjs";

type PageStateProps = {
  hotStore: {
    hotData: Array<any>;
    setHotData: Function;
  };
};

interface Index {
  props: PageStateProps;
}

@inject("hotStore")
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
    navigationBarTitleText: "最热"
  };

  componentWillMount() {}

  componentWillReact() {
    console.log("componentWillReact");
  }

  componentDidMount() {
    let data = [
      {
        node: {
          avatar_large:
            "//cdn.v2ex.com/navatar/c20a/d4d7/12_large.png?m=1574910433",
          name: "qna",
          avatar_normal:
            "//cdn.v2ex.com/navatar/c20a/d4d7/12_normal.png?m=1574910433",
          title: "问与答",
          url: "https://www.v2ex.com/go/qna",
          topics: 143897,
          footer: "",
          header: "一个更好的世界需要你持续地提出好问题。",
          title_alternative: "Questions and Answers",
          avatar_mini:
            "//cdn.v2ex.com/navatar/c20a/d4d7/12_mini.png?m=1574910433",
          stars: 2722,
          root: false,
          id: 12,
          parent_node_name: "v2ex"
        },
        member: {
          username: "swordart0000",
          website: null,
          github: null,
          psn: null,
          avatar_normal:
            "//cdn.v2ex.com/gravatar/3aad8d66ec40a90cdcb705da7dd34d41?s=24&d=retro",
          bio: null,
          url: "https://www.v2ex.com/u/swordart0000",
          tagline: null,
          twitter: null,
          created: 1500019340,
          avatar_large:
            "//cdn.v2ex.com/gravatar/3aad8d66ec40a90cdcb705da7dd34d41?s=24&d=retro",
          avatar_mini:
            "//cdn.v2ex.com/gravatar/3aad8d66ec40a90cdcb705da7dd34d41?s=24&d=retro",
          location: null,
          btc: null,
          id: 240301
        },
        last_reply_by: "weizhen199",
        last_touched: 1574912871,
        title: "22 岁大学马上毕业，父母突然告诉我他们要有二胎了要怎么应对",
        url: "https://www.v2ex.com/t/623687",
        created: 1574845602,
        content:
          "RT，LZ 现在 22 岁马上就毕业了（提前毕业）。父母今天突然告诉我他们要有二胎，之前完全没有和我讨论过完全是先斩后奏。我不是说我要干涉我父母的生育自由。但是我实在是无法接受，差了 22 岁的年龄差说是我孩子别人都信。将来小孩 20 岁的时候我父母差不多快 70 那是不是还要我带。突然得知这个消息 LZ 比较震惊，不知道应该怎么和父母说了。目前思绪很乱，望大家理解。",
        content_rendered:
          "<p>RT，LZ 现在 22 岁马上就毕业了（提前毕业）。父母今天突然告诉我他们要有二胎，之前完全没有和我讨论过完全是先斩后奏。我不是说我要干涉我父母的生育自由。但是我实在是无法接受，差了 22 岁的年龄差说是我孩子别人都信。将来小孩 20 岁的时候我父母差不多快 70 那是不是还要我带。突然得知这个消息 LZ 比较震惊，不知道应该怎么和父母说了。目前思绪很乱，望大家理解。</p>\n",
        last_modified: 1574845602,
        replies: 195,
        id: 623687
      },
      {
        node: {
          avatar_large:
            "//cdn.v2ex.com/navatar/94f6/d7e0/300_large.png?m=1574910654",
          name: "programmer",
          avatar_normal:
            "//cdn.v2ex.com/navatar/94f6/d7e0/300_normal.png?m=1574910654",
          title: "程序员",
          url: "https://www.v2ex.com/go/programmer",
          topics: 34378,
          footer: "",
          header: "While code monkeys are not eating bananas, they're coding.",
          title_alternative: "Programmer",
          avatar_mini:
            "//cdn.v2ex.com/navatar/94f6/d7e0/300_mini.png?m=1574910654",
          stars: 6305,
          root: false,
          id: 300,
          parent_node_name: "computer"
        },
        member: {
          username: "xiangbudaomingzi",
          website: null,
          github: null,
          psn: null,
          avatar_normal:
            "//cdn.v2ex.com/gravatar/472275451f9d3f44cbf45421d4732589?s=24&d=retro",
          bio: null,
          url: "https://www.v2ex.com/u/xiangbudaomingzi",
          tagline: null,
          twitter: null,
          created: 1504620087,
          avatar_large:
            "//cdn.v2ex.com/gravatar/472275451f9d3f44cbf45421d4732589?s=24&d=retro",
          avatar_mini:
            "//cdn.v2ex.com/gravatar/472275451f9d3f44cbf45421d4732589?s=24&d=retro",
          location: null,
          btc: null,
          id: 252669
        },
        last_reply_by: "momocraft",
        last_touched: 1574912390,
        title: "深感这个行业的门槛真的低...",
        url: "https://www.v2ex.com/t/623591",
        created: 1574836425,
        content:
          "一个认识的之前做行政的妹子去做了前端，一个装了四五年宽带的去做了开发...这就是一片红海。。。",
        content_rendered:
          "<p>一个认识的之前做行政的妹子去做了前端，一个装了四五年宽带的去做了开发...这就是一片红海。。。</p>\n",
        last_modified: 1574836425,
        replies: 158,
        id: 623591
      },
      {
        node: {
          avatar_large:
            "//cdn.v2ex.com/navatar/c20a/d4d7/12_large.png?m=1574910433",
          name: "qna",
          avatar_normal:
            "//cdn.v2ex.com/navatar/c20a/d4d7/12_normal.png?m=1574910433",
          title: "问与答",
          url: "https://www.v2ex.com/go/qna",
          topics: 143897,
          footer: "",
          header: "一个更好的世界需要你持续地提出好问题。",
          title_alternative: "Questions and Answers",
          avatar_mini:
            "//cdn.v2ex.com/navatar/c20a/d4d7/12_mini.png?m=1574910433",
          stars: 2722,
          root: false,
          id: 12,
          parent_node_name: "v2ex"
        },
        member: {
          username: "Coltnagisa",
          website: "",
          github: "",
          psn: "",
          avatar_normal:
            "//cdn.v2ex.com/avatar/3438/76b6/265013_mini.png?m=1574840162",
          bio: "",
          url: "https://www.v2ex.com/u/Coltnagisa",
          tagline: "all is well",
          twitter: "ColtNagisa",
          created: 1509859700,
          avatar_large:
            "//cdn.v2ex.com/avatar/3438/76b6/265013_mini.png?m=1574840162",
          avatar_mini:
            "//cdn.v2ex.com/avatar/3438/76b6/265013_mini.png?m=1574840162",
          location: "长沙",
          btc: "",
          id: 265013
        },
        last_reply_by: "Coltnagisa",
        last_touched: 1574912850,
        title: "不明白为什么自己是人怎么办？",
        url: "https://www.v2ex.com/t/623635",
        created: 1574841029,
        content:
          "想为什么我是人，为什么我是我，这个世界为什么这么设定。我从小时候就因为这个问题而产生恐惧感，初中高中都有。星期天又出现了，现在还在紧张，怕以后都想不明白.... 像是一种精神疾病 “发病”的时候心跳加速 头顶发麻，难受的要死。就突然不知道“我”是什么东西 为什么会有这一切... 会要赶紧做一些事分散注意力。原来过一会儿就没事了，星期天“发病”后就一直紧张，怕以后都会“发病”。星期天好像是今年第一次吧，一年可能来个 2 次？这几天睡觉都很困难，早上起来还一直紧张 现在也不怎么安心。本来还在长沙上学，昨天回到郑州。明天准备去看医生。各位有这样的想法吗？我和朋友们说这件事，他们还笑我，说我中二....😓",
        content_rendered:
          "<p>想为什么我是人，为什么我是我，这个世界为什么这么设定。我从小时候就因为这个问题而产生恐惧感，初中高中都有。星期天又出现了，现在还在紧张，怕以后都想不明白.... 像是一种精神疾病 “发病”的时候心跳加速 头顶发麻，难受的要死。就突然不知道“我”是什么东西 为什么会有这一切... 会要赶紧做一些事分散注意力。原来过一会儿就没事了，星期天“发病”后就一直紧张，怕以后都会“发病”。星期天好像是今年第一次吧，一年可能来个 2 次？这几天睡觉都很困难，早上起来还一直紧张 现在也不怎么安心。本来还在长沙上学，昨天回到郑州。明天准备去看医生。各位有这样的想法吗？我和朋友们说这件事，他们还笑我，说我中二....😓</p>\n",
        last_modified: 1574841029,
        replies: 137,
        id: 623635
      },
      {
        node: {
          avatar_large:
            "//cdn.v2ex.com/navatar/093f/65e0/59_large.png?m=1431019484",
          name: "random",
          avatar_normal:
            "//cdn.v2ex.com/navatar/093f/65e0/59_normal.png?m=1431019484",
          title: "随想",
          url: "https://www.v2ex.com/go/random",
          topics: 2361,
          footer: "",
          header: "有的时候，可以停下来找找灵感，然后再继续。",
          title_alternative: "Random",
          avatar_mini:
            "//cdn.v2ex.com/navatar/093f/65e0/59_mini.png?m=1431019484",
          stars: 726,
          root: false,
          id: 59,
          parent_node_name: "v2ex"
        },
        member: {
          username: "after1990s",
          website: "",
          github: "after1990s",
          psn: "",
          avatar_normal:
            "//cdn.v2ex.com/avatar/a120/cbe8/29126_mini.png?m=1363747047",
          bio: "",
          url: "https://www.v2ex.com/u/after1990s",
          tagline: "",
          twitter: "after1990s",
          created: 1351652257,
          avatar_large:
            "//cdn.v2ex.com/avatar/a120/cbe8/29126_mini.png?m=1363747047",
          avatar_mini:
            "//cdn.v2ex.com/avatar/a120/cbe8/29126_mini.png?m=1363747047",
          location: "",
          btc: "",
          id: 29126
        },
        last_reply_by: "dppd",
        last_touched: 1574912288,
        title: "90 年的即将 30 岁",
        url: "https://www.v2ex.com/t/623562",
        created: 1574831048,
        content: "浑浑噩噩 一事无成 难过",
        content_rendered: "浑浑噩噩 一事无成 难过",
        last_modified: 1574877342,
        replies: 121,
        id: 623562
      },
      {
        node: {
          avatar_large:
            "//cdn.v2ex.com/navatar/c20a/d4d7/12_large.png?m=1574910433",
          name: "qna",
          avatar_normal:
            "//cdn.v2ex.com/navatar/c20a/d4d7/12_normal.png?m=1574910433",
          title: "问与答",
          url: "https://www.v2ex.com/go/qna",
          topics: 143897,
          footer: "",
          header: "一个更好的世界需要你持续地提出好问题。",
          title_alternative: "Questions and Answers",
          avatar_mini:
            "//cdn.v2ex.com/navatar/c20a/d4d7/12_mini.png?m=1574910433",
          stars: 2722,
          root: false,
          id: 12,
          parent_node_name: "v2ex"
        },
        member: {
          username: "hanxiaodi",
          website: null,
          github: null,
          psn: null,
          avatar_normal:
            "//cdn.v2ex.com/gravatar/a85e315916f6c8dba6e3d8a4b5766093?s=24&d=retro",
          bio: null,
          url: "https://www.v2ex.com/u/hanxiaodi",
          tagline: null,
          twitter: null,
          created: 1515215740,
          avatar_large:
            "//cdn.v2ex.com/gravatar/a85e315916f6c8dba6e3d8a4b5766093?s=24&d=retro",
          avatar_mini:
            "//cdn.v2ex.com/gravatar/a85e315916f6c8dba6e3d8a4b5766093?s=24&d=retro",
          location: null,
          btc: null,
          id: 280314
        },
        last_reply_by: "lxk11153",
        last_touched: 1574912573,
        title: "下雨天用什么姿势走路才不会湿鞋？",
        url: "https://www.v2ex.com/t/623585",
        created: 1574835335,
        content:
          "- 背景：\r\n  - 坐标武汉，最近几天有是风又是雨的，秋裤毛裤牛仔裤，长袖毛衣羽绒服都搞起了，袜子穿了两双。\r\n  - 中午出去拿个外卖，鞋头都湿透了，袜子现在还没干，又不敢脱下来放机箱风扇上吹（怕味太大）。\r\n- 问题：\r\n  - 两双袜子抵挡不了鞋子前脚跟湿透，请问下各位，你们雨天湿鞋吗？或者有什么好的不湿鞋的方案？\r\n- 效果图：\r\n    - 效果图大概是这样，随便画了下（幼儿园级别画画技巧），从红色部分开始湿，然后逐渐渗透，最后整个前脚湿凉湿凉的...\r\n![1.png]( https://i.loli.net/2019/11/27/ByQ38VwzOETxuKe.png)\r\n\r\nPS：我开始怀疑我这二十多年是不是根本就不会走路。",
        content_rendered:
          '<ul>\n<li>背景：\n<ul>\n<li>坐标武汉，最近几天有是风又是雨的，秋裤毛裤牛仔裤，长袖毛衣羽绒服都搞起了，袜子穿了两双。</li>\n<li>中午出去拿个外卖，鞋头都湿透了，袜子现在还没干，又不敢脱下来放机箱风扇上吹（怕味太大）。</li>\n</ul>\n</li>\n<li>问题：\n<ul>\n<li>两双袜子抵挡不了鞋子前脚跟湿透，请问下各位，你们雨天湿鞋吗？或者有什么好的不湿鞋的方案？</li>\n</ul>\n</li>\n<li>效果图：\n<ul>\n<li>效果图大概是这样，随便画了下（幼儿园级别画画技巧），从红色部分开始湿，然后逐渐渗透，最后整个前脚湿凉湿凉的...\n<img alt="1.png" src="https://i.loli.net/2019/11/27/ByQ38VwzOETxuKe.png"/></li>\n</ul>\n</li>\n</ul>\n<p>PS：我开始怀疑我这二十多年是不是根本就不会走路。</p>\n',
        last_modified: 1574835335,
        replies: 89,
        id: 623585
      },
      {
        node: {
          avatar_large:
            "//cdn.v2ex.com/navatar/94f6/d7e0/300_large.png?m=1574910654",
          name: "programmer",
          avatar_normal:
            "//cdn.v2ex.com/navatar/94f6/d7e0/300_normal.png?m=1574910654",
          title: "程序员",
          url: "https://www.v2ex.com/go/programmer",
          topics: 34378,
          footer: "",
          header: "While code monkeys are not eating bananas, they're coding.",
          title_alternative: "Programmer",
          avatar_mini:
            "//cdn.v2ex.com/navatar/94f6/d7e0/300_mini.png?m=1574910654",
          stars: 6305,
          root: false,
          id: 300,
          parent_node_name: "computer"
        },
        member: {
          username: "xiangmujia",
          website: "www.xiangmujia.com",
          github: "",
          psn: "",
          avatar_normal:
            "//cdn.v2ex.com/gravatar/46f65371a3dbfebc670089c39442519c?s=24&d=retro",
          bio: "",
          url: "https://www.v2ex.com/u/xiangmujia",
          tagline: "项目加 - 协作实验室",
          twitter: "",
          created: 1561352858,
          avatar_large:
            "//cdn.v2ex.com/gravatar/46f65371a3dbfebc670089c39442519c?s=24&d=retro",
          avatar_mini:
            "//cdn.v2ex.com/gravatar/46f65371a3dbfebc670089c39442519c?s=24&d=retro",
          location: "",
          btc: "",
          id: 424126
        },
        last_reply_by: "wu67",
        last_touched: 1574912824,
        title: "程序员下班了都最爱干什么？",
        url: "https://www.v2ex.com/t/623752",
        created: 1574860038,
        content: "",
        content_rendered: "",
        last_modified: 1574860038,
        replies: 83,
        id: 623752
      },
      {
        node: {
          avatar_large:
            "//cdn.v2ex.com/navatar/94f6/d7e0/300_large.png?m=1574910654",
          name: "programmer",
          avatar_normal:
            "//cdn.v2ex.com/navatar/94f6/d7e0/300_normal.png?m=1574910654",
          title: "程序员",
          url: "https://www.v2ex.com/go/programmer",
          topics: 34378,
          footer: "",
          header: "While code monkeys are not eating bananas, they're coding.",
          title_alternative: "Programmer",
          avatar_mini:
            "//cdn.v2ex.com/navatar/94f6/d7e0/300_mini.png?m=1574910654",
          stars: 6305,
          root: false,
          id: 300,
          parent_node_name: "computer"
        },
        member: {
          username: "dengbt",
          website: "",
          github: "",
          psn: "",
          avatar_normal:
            "//cdn.v2ex.com/gravatar/cd24bf694979d5ba9af76d188c9bc860?s=24&d=retro",
          bio: "Boy.",
          url: "https://www.v2ex.com/u/dengbt",
          tagline: "",
          twitter: "",
          created: 1532152966,
          avatar_large:
            "//cdn.v2ex.com/gravatar/cd24bf694979d5ba9af76d188c9bc860?s=24&d=retro",
          avatar_mini:
            "//cdn.v2ex.com/gravatar/cd24bf694979d5ba9af76d188c9bc860?s=24&d=retro",
          location: "CQ",
          btc: "",
          id: 330562
        },
        last_reply_by: "zhuosheng",
        last_touched: 1574912854,
        title: "求科普：现在手机窃听隐私，智能推荐析这么厉害了？",
        url: "https://www.v2ex.com/t/623713",
        created: 1574851668,
        content:
          "# case 1\r\n用手机 UC 查看了几次汽车信息，微信 就给我推荐各种汽车广告。\r\n\r\n**  微信是怎么知道的？**\r\n\r\n猜测：\r\n+ 分析了 UC 的日志？\r\n+ 分析了输入的内容？\r\n\r\n# case 2\r\n和朋友聊天（面对面）说了几次脱发的问题，UC 浏览器就推荐相关的广告了。\r\n\r\n** 难道连说话都被语音监控？!!**",
        content_rendered:
          "<h1>case 1</h1>\n<p>用手机 UC 查看了几次汽车信息，微信 就给我推荐各种汽车广告。</p>\n<p>**  微信是怎么知道的？**</p>\n<p>猜测：</p>\n<ul>\n<li>分析了 UC 的日志？</li>\n<li>分析了输入的内容？</li>\n</ul>\n<h1>case 2</h1>\n<p>和朋友聊天（面对面）说了几次脱发的问题，UC 浏览器就推荐相关的广告了。</p>\n<p>** 难道连说话都被语音监控？!!**</p>\n",
        last_modified: 1574851668,
        replies: 80,
        id: 623713
      },
      {
        node: {
          avatar_large:
            "//cdn.v2ex.com/navatar/94f6/d7e0/300_large.png?m=1574910654",
          name: "programmer",
          avatar_normal:
            "//cdn.v2ex.com/navatar/94f6/d7e0/300_normal.png?m=1574910654",
          title: "程序员",
          url: "https://www.v2ex.com/go/programmer",
          topics: 34378,
          footer: "",
          header: "While code monkeys are not eating bananas, they're coding.",
          title_alternative: "Programmer",
          avatar_mini:
            "//cdn.v2ex.com/navatar/94f6/d7e0/300_mini.png?m=1574910654",
          stars: 6305,
          root: false,
          id: 300,
          parent_node_name: "computer"
        },
        member: {
          username: "xiaotianhu",
          website: "",
          github: "",
          psn: "",
          avatar_normal:
            "//cdn.v2ex.com/avatar/f4cf/ab79/14067_mini.png?m=1360365643",
          bio: "",
          url: "https://www.v2ex.com/u/xiaotianhu",
          tagline: "",
          twitter: "",
          created: 1322490463,
          avatar_large:
            "//cdn.v2ex.com/avatar/f4cf/ab79/14067_mini.png?m=1360365643",
          avatar_mini:
            "//cdn.v2ex.com/avatar/f4cf/ab79/14067_mini.png?m=1360365643",
          location: "",
          btc: "",
          id: 14067
        },
        last_reply_by: "breezeFP",
        last_touched: 1574912848,
        title: "答:如何写好一篇技术简历?",
        url: "https://www.v2ex.com/t/623704",
        created: 1574848132,
        content:
          '之前发了个吐槽帖子,引起一些争议.详见: https://www.v2ex.com/t/623359?p=1\r\n认真总结了一下,回答部分帖子里面人的疑问,(我认为的)如何写好一篇技术简历?\r\n\r\n### 背景介绍:  \r\n本人后端开发为主(PHP+GO),会点前端(VUE 技术栈),在学 SWIFT(为了招 iOS 开发...),目前在某小公司做技术负责人,所以会负责招聘.  \r\nHR 由于对技术不了解,所以为了效率,经常需要我亲自到 BOSS 直聘和智联等后台直接筛选简历.  \r\n\r\n由于发了一个吐槽简历的帖子,引起了广泛讨论.这里斗胆谈一下我认为的输出一份好的简历的技巧,给各位能够带来一点帮助就很值得了.  \r\n我们从上往下说  \r\n\r\n### 自我介绍\r\n基础信息,不用多说.需要注意的点:  \r\n\r\n尽量不要放照片.做为开发,你不放照片无所谓,放了容易引起心态波动,分散阅读者的注意力,引起不必要的猜测.\r\n\r\n### 个人介绍&技能点\r\n我倾向于先写这一部分,在项目经验之前,让阅读者对求职者有一个直观的感觉.我个人的思路,是希望给别人留下一个印象,这位求职者是一个"喜欢学习新东西,喜欢折腾,有 GEEK 精神"的感觉.这一部分,尽量要有"亮点",就是跟别人不太一样的地方,能够显示出你这个人个性的地方,如果没有 那么你应该反思一下,并且从现在开始积累一个了.    \r\n这个部分很大程度上大家写的会比较像,我就要从中间找亮点,哪怕有一两个,也能够成为影响我决策的点,这样就有了更强的竞争力.  \r\n\r\n先说几个需要注意避免的点:\r\n\r\n- 不要写主观的东西,比如"吃苦耐劳,善于学习,balabala...",因为无法验证,别人没法相信你.直接用事实说话,比如说"掌握多门语言,熟悉 PHP,会用 Golang 和 Python",别人就知道你可能"善于学习"了.\r\n\r\n- 不要写人人都应该会的,毫无技术含量的东西.比如"JSON/XML 数据格式进行解析"  "Composer 安装扩展"  "熟练使用 git"\r\n\r\n- 不要写无法证明,难以证明的东西.还是那句话,摆事实讲道理.栗子:\r\n```\r\n"熟悉 ThinkPHP5 框架"  VS "读过 ThinkPHP5 的部分源码,熟悉包括路由部分,容器部分,日志部分等组件的流程与实现"  \r\n"熟练 Linux 命令"      VS "会用 TcpDump 抓包,用 Strace 和 lsof 等命令排查 I/O 瓶颈"\r\n```\r\n\r\n- 不要写一些使用 xx 的经验,因为大家都懂,就是对着文档撸就好了,除非是 JD 特别提到了,或者有特别的技术含量,我指的包括但不限于"LAMP 环境搭建" "会用阿里云" "会接入微信 /支付宝支付" "接入极光推送 SDK 友盟分享 SDK" 等等.\r\n\r\n- 不要相信,甚至直接照搬 xx 简历模板(比如这种 https://github.com/resumejob/awesome-resume/blob/master/README.md ). 因为你的竞争对手很可能也在干一样的事情,这会让你的技能介绍部分毫无亮点.参考一下就行,不要照搬.如果简历都不肯动脑的话,那么别人很容易认为你是一个不喜欢动脑的人,恰好程序员又是一个需要天天动脑的劳动了.\r\n\r\n- 不要写一些跟技术无关的东西,比如"会 PS" "有驾照" "会用 OFFICE 会重装系统 接网线"等等等等...有爱好特长可以写在末尾的个人介绍里面做为结尾补充.\r\n\r\n### 关于亮点:\r\n鉴于大部分人(包括我) 都没有 GitHub 1w+的 star,没写过什么开源框架没出过书,很多人就觉得没有亮点.我觉得不是这样的.  \r\n比如我认为,"熟练使用 VIM(常用 easymotion CtrlP YCM 等插件),熟练使用 zsh+Tmux 管理服务器" 就算是一个亮点,毕竟只有少部分人喜欢折腾 VIM,就让人觉得可能喜欢折腾比较极客;  \r\n\r\n其他可能的亮点,我认为的有:  \r\n- 参与过开源项目,写过开源组件\r\n- 有个人 Blog(真实有效,原创非搬运,有略为深度的内容比如某个棘手问题的总结,某个爬坑经验),反正我一般会看\r\n- 会多种语言\r\n- 有阅读源码的习惯\r\n- 研究过新的扩展,工具,开源项目\r\n\r\n等等.这个因人而异了.但是还是说,至少能体现自己喜欢写代码.如果没有,那么应该考虑积累几个.\r\n\r\n### 工作&项目经历\r\n我个人倾向于公司与项目混合在一起写,理由后面说.一般人都知道按时间倒序吧.这个技巧不说了  \r\n\r\nHR 一般会关注稳定性,在一家公司干多久.做为技术,主要关心项目,用来排除是不是外包公司.所以公司跟项目一起写会减少阅读的工作量,如果混在一起 ,就需要仔细核对,甚至有的人项目时间根本不写的,所有项目一股脑列出来,这种心情不好的直接不看了.  \r\n\r\n所以我推荐的一般格式为:\r\n\r\n```\r\nXX 公司  职位:高级开发  2017.05-2019.05\r\n    一句话的简单介绍:做为 Leader 负责 xx 开发,带 3 个人,设计了 XX 项目架构,简单介绍就好\r\n    如果有亮点成绩可以单独列,比如 服务器性能优化,单机 QPS 从 xx 增长到 XX,网站响应时间减少 xxms...\r\n    \r\n    项目 A:\r\n        一句话的项目介绍:项目主要为社区信息流+电商部分,我负责其中的 xx 部分\r\n        用到的技术点: XX 扩展,XX 框架,XX 设计模式,等等 相关技术点\r\n        \r\nXXB 公司 ...\r\n```\r\n\r\n\r\n一些需要避免的问题:  \r\n- 技术无关的东西少写,更不要 n 个公司都写一些大家都知道的事儿,比如"负责项目应用软件开发编码工作,编写相关的技术文档,改进优化性能,提供技术支持..." 总结起来就是,我写代码了...这不需要写到简历上.  \r\n\r\n- 项目介绍应该尽量让人判断技术复杂度,不要写项目的广告语...比如很多人为了偷懒会写"x 项目的宗旨是为了宣扬和平与爱,我们通过 xx 平台方便了用户,促进了世界和平,提高了国家 GDP..."让人看了一头雾水,无法判断用到了什么技术.哪怕用户规模不大,也可以写"用到了 Laravel 框架(包括队列 Event Service),用到了开源扩展 Laravels Telescope ..."也会更好一点.  \r\n\r\n- 如果项目很多,就要挑几个重点的写,一些"管理后台",如果不是特别有料就不要写了.  \r\n\r\n- 避免流水账式的介绍,有一小部分人会把这一部分写成日记一样,"我们从 xx 年开始做,先经历了 xx,然后发生了 xx,这其中 xxxx",洋洋洒洒几百字不带换行,让人当场脑子死机.  \r\n\r\n- 项目不要胡写,最好有相关性.一般一家公司的主营业务不会太多,如果你在一家公司做了小说业务,又做了旅游业务,还顺带写了个 P2P 贷款,那么我会认为项目没有延续性,这样做出来的项目更不容易负责,草草收场的概率也比较大.\r\n\r\n### 细节\r\n\r\n大家做产品都知道要"打磨",所谓打磨就是在打磨细节.简历做为你跟其他上百名竞争者最重要的竞争手段,当然需要精心打磨.那么很多细节就都应该注意,尤其是程序员的简历,如果你关注细节 并且处处体现严谨,那么会给人留下更好的印象,毕竟这个岗位的需求就是如此.\r\n\r\n通常要注意的,拼写错误,语句不通顺,就不多说了.简历毕竟是很正式的文档,不像论坛发水帖.这些都做不到的通常是减分项.\r\n\r\n举几个不太容易重视的栗子:\r\n- 大小写.比如"ios VS iOS", "mysql VS MySQL", \r\n- 技术的性质问题.比如"熟悉 Ajax 框架"  "熟悉 ES6 语言" "LNMP 语言" 等等...\r\n- 文档格式问题,有些招聘网站可以上传自定义的格式,尽量用 PDF.毕竟很多开发都是 Mac,如果一个 word 格式的文档,在 Mac 上经常会有各种各样的问题,而且 pdf 的打开速度比 word 要快多了.\r\n\r\n\r\n暂时想起来的就这么多了吧.产品老过来加需求打断我的思路...  \r\nanyway,简历是一个寸土寸金的文档,每一个字都值得我们仔细斟酌.而且针对不同的公司的岗位,也应该相应的略做调整来增加竞争力.\r\n\r\n祝福每个开发同学都能找到心仪的工作,真心的.',
        content_rendered:
          '<p>之前发了个吐槽帖子,引起一些争议.详见: <a href="https://www.v2ex.com/t/623359?p=1" rel="nofollow">https://www.v2ex.com/t/623359?p=1</a>\n认真总结了一下,回答部分帖子里面人的疑问,(我认为的)如何写好一篇技术简历?</p>\n<h3>背景介绍:</h3>\n<p>本人后端开发为主(PHP+GO),会点前端(VUE 技术栈),在学 SWIFT(为了招 iOS 开发...),目前在某小公司做技术负责人,所以会负责招聘.<br/>\nHR 由于对技术不了解,所以为了效率,经常需要我亲自到 BOSS 直聘和智联等后台直接筛选简历.</p>\n<p>由于发了一个吐槽简历的帖子,引起了广泛讨论.这里斗胆谈一下我认为的输出一份好的简历的技巧,给各位能够带来一点帮助就很值得了.<br/>\n我们从上往下说</p>\n<h3>自我介绍</h3>\n<p>基础信息,不用多说.需要注意的点:</p>\n<p>尽量不要放照片.做为开发,你不放照片无所谓,放了容易引起心态波动,分散阅读者的注意力,引起不必要的猜测.</p>\n<h3>个人介绍&amp;技能点</h3>\n<p>我倾向于先写这一部分,在项目经验之前,让阅读者对求职者有一个直观的感觉.我个人的思路,是希望给别人留下一个印象,这位求职者是一个"喜欢学习新东西,喜欢折腾,有 GEEK 精神"的感觉.这一部分,尽量要有"亮点",就是跟别人不太一样的地方,能够显示出你这个人个性的地方,如果没有 那么你应该反思一下,并且从现在开始积累一个了.<br/>\n这个部分很大程度上大家写的会比较像,我就要从中间找亮点,哪怕有一两个,也能够成为影响我决策的点,这样就有了更强的竞争力.</p>\n<p>先说几个需要注意避免的点:</p>\n<ul>\n<li>\n<p>不要写主观的东西,比如"吃苦耐劳,善于学习,balabala...",因为无法验证,别人没法相信你.直接用事实说话,比如说"掌握多门语言,熟悉 PHP,会用 Golang 和 Python",别人就知道你可能"善于学习"了.</p>\n</li>\n<li>\n<p>不要写人人都应该会的,毫无技术含量的东西.比如"JSON/XML 数据格式进行解析"  "Composer 安装扩展"  "熟练使用 git"</p>\n</li>\n<li>\n<p>不要写无法证明,难以证明的东西.还是那句话,摆事实讲道理.栗子:</p>\n</li>\n</ul>\n<pre><code>"熟悉 ThinkPHP5 框架"  VS "读过 ThinkPHP5 的部分源码,熟悉包括路由部分,容器部分,日志部分等组件的流程与实现"  \n"熟练 Linux 命令"      VS "会用 TcpDump 抓包,用 Strace 和 lsof 等命令排查 I/O 瓶颈"\n</code></pre>\n<ul>\n<li>\n<p>不要写一些使用 xx 的经验,因为大家都懂,就是对着文档撸就好了,除非是 JD 特别提到了,或者有特别的技术含量,我指的包括但不限于"LAMP 环境搭建" "会用阿里云" "会接入微信 /支付宝支付" "接入极光推送 SDK 友盟分享 SDK" 等等.</p>\n</li>\n<li>\n<p>不要相信,甚至直接照搬 xx 简历模板(比如这种 <a href="https://github.com/resumejob/awesome-resume/blob/master/README.md" rel="nofollow">https://github.com/resumejob/awesome-resume/blob/master/README.md</a> ). 因为你的竞争对手很可能也在干一样的事情,这会让你的技能介绍部分毫无亮点.参考一下就行,不要照搬.如果简历都不肯动脑的话,那么别人很容易认为你是一个不喜欢动脑的人,恰好程序员又是一个需要天天动脑的劳动了.</p>\n</li>\n<li>\n<p>不要写一些跟技术无关的东西,比如"会 PS" "有驾照" "会用 OFFICE 会重装系统 接网线"等等等等...有爱好特长可以写在末尾的个人介绍里面做为结尾补充.</p>\n</li>\n</ul>\n<h3>关于亮点:</h3>\n<p>鉴于大部分人(包括我) 都没有 GitHub 1w+的 star,没写过什么开源框架没出过书,很多人就觉得没有亮点.我觉得不是这样的.<br/>\n比如我认为,"熟练使用 VIM(常用 easymotion CtrlP YCM 等插件),熟练使用 zsh+Tmux 管理服务器" 就算是一个亮点,毕竟只有少部分人喜欢折腾 VIM,就让人觉得可能喜欢折腾比较极客;</p>\n<p>其他可能的亮点,我认为的有:</p>\n<ul>\n<li>参与过开源项目,写过开源组件</li>\n<li>有个人 Blog(真实有效,原创非搬运,有略为深度的内容比如某个棘手问题的总结,某个爬坑经验),反正我一般会看</li>\n<li>会多种语言</li>\n<li>有阅读源码的习惯</li>\n<li>研究过新的扩展,工具,开源项目</li>\n</ul>\n<p>等等.这个因人而异了.但是还是说,至少能体现自己喜欢写代码.如果没有,那么应该考虑积累几个.</p>\n<h3>工作&amp;项目经历</h3>\n<p>我个人倾向于公司与项目混合在一起写,理由后面说.一般人都知道按时间倒序吧.这个技巧不说了</p>\n<p>HR 一般会关注稳定性,在一家公司干多久.做为技术,主要关心项目,用来排除是不是外包公司.所以公司跟项目一起写会减少阅读的工作量,如果混在一起 ,就需要仔细核对,甚至有的人项目时间根本不写的,所有项目一股脑列出来,这种心情不好的直接不看了.</p>\n<p>所以我推荐的一般格式为:</p>\n<pre><code>XX 公司  职位:高级开发  2017.05-2019.05\n    一句话的简单介绍:做为 Leader 负责 xx 开发,带 3 个人,设计了 XX 项目架构,简单介绍就好\n    如果有亮点成绩可以单独列,比如 服务器性能优化,单机 QPS 从 xx 增长到 XX,网站响应时间减少 xxms...\n    \n    项目 A:\n        一句话的项目介绍:项目主要为社区信息流+电商部分,我负责其中的 xx 部分\n        用到的技术点: XX 扩展,XX 框架,XX 设计模式,等等 相关技术点\n        \nXXB 公司 ...\n</code></pre>\n<p>一些需要避免的问题:</p>\n<ul>\n<li>\n<p>技术无关的东西少写,更不要 n 个公司都写一些大家都知道的事儿,比如"负责项目应用软件开发编码工作,编写相关的技术文档,改进优化性能,提供技术支持..." 总结起来就是,我写代码了...这不需要写到简历上.</p>\n</li>\n<li>\n<p>项目介绍应该尽量让人判断技术复杂度,不要写项目的广告语...比如很多人为了偷懒会写"x 项目的宗旨是为了宣扬和平与爱,我们通过 xx 平台方便了用户,促进了世界和平,提高了国家 GDP..."让人看了一头雾水,无法判断用到了什么技术.哪怕用户规模不大,也可以写"用到了 Laravel 框架(包括队列 Event Service),用到了开源扩展 Laravels Telescope ..."也会更好一点.</p>\n</li>\n<li>\n<p>如果项目很多,就要挑几个重点的写,一些"管理后台",如果不是特别有料就不要写了.</p>\n</li>\n<li>\n<p>避免流水账式的介绍,有一小部分人会把这一部分写成日记一样,"我们从 xx 年开始做,先经历了 xx,然后发生了 xx,这其中 xxxx",洋洋洒洒几百字不带换行,让人当场脑子死机.</p>\n</li>\n<li>\n<p>项目不要胡写,最好有相关性.一般一家公司的主营业务不会太多,如果你在一家公司做了小说业务,又做了旅游业务,还顺带写了个 P2P 贷款,那么我会认为项目没有延续性,这样做出来的项目更不容易负责,草草收场的概率也比较大.</p>\n</li>\n</ul>\n<h3>细节</h3>\n<p>大家做产品都知道要"打磨",所谓打磨就是在打磨细节.简历做为你跟其他上百名竞争者最重要的竞争手段,当然需要精心打磨.那么很多细节就都应该注意,尤其是程序员的简历,如果你关注细节 并且处处体现严谨,那么会给人留下更好的印象,毕竟这个岗位的需求就是如此.</p>\n<p>通常要注意的,拼写错误,语句不通顺,就不多说了.简历毕竟是很正式的文档,不像论坛发水帖.这些都做不到的通常是减分项.</p>\n<p>举几个不太容易重视的栗子:</p>\n<ul>\n<li>大小写.比如"ios VS iOS", "mysql VS MySQL",</li>\n<li>技术的性质问题.比如"熟悉 Ajax 框架"  "熟悉 ES6 语言" "LNMP 语言" 等等...</li>\n<li>文档格式问题,有些招聘网站可以上传自定义的格式,尽量用 PDF.毕竟很多开发都是 Mac,如果一个 word 格式的文档,在 Mac 上经常会有各种各样的问题,而且 pdf 的打开速度比 word 要快多了.</li>\n</ul>\n<p>暂时想起来的就这么多了吧.产品老过来加需求打断我的思路...<br/>\nanyway,简历是一个寸土寸金的文档,每一个字都值得我们仔细斟酌.而且针对不同的公司的岗位,也应该相应的略做调整来增加竞争力.</p>\n<p>祝福每个开发同学都能找到心仪的工作,真心的.</p>\n',
        last_modified: 1574848132,
        replies: 66,
        id: 623704
      },
      {
        node: {
          avatar_large:
            "//cdn.v2ex.com/navatar/6cdd/60ea/184_large.png?m=1562222718",
          name: "apple",
          avatar_normal:
            "//cdn.v2ex.com/navatar/6cdd/60ea/184_normal.png?m=1562222718",
          title: "Apple",
          url: "https://www.v2ex.com/go/apple",
          topics: 9513,
          footer: "",
          header:
            '设计了 <a href="/go/watch">Apple Watch</a>，<a href="/go/ipad">iPad</a>，<a href="/go/iphone">iPhone</a>，<a href="/go/imac">iMac</a> 及 <a href="/go/mbp">MacBook Pro</a> 等电子产品的美国公司。',
          title_alternative: "Apple",
          avatar_mini:
            "//cdn.v2ex.com/navatar/6cdd/60ea/184_mini.png?m=1562222718",
          stars: 1197,
          root: false,
          id: 184,
          parent_node_name: "hardware"
        },
        member: {
          username: "lear7",
          website: null,
          github: null,
          psn: null,
          avatar_normal:
            "//cdn.v2ex.com/gravatar/3baf7cb5ec337338418c6ff1d26bdf18?s=24&d=retro",
          bio: null,
          url: "https://www.v2ex.com/u/lear7",
          tagline: null,
          twitter: null,
          created: 1489480939,
          avatar_large:
            "//cdn.v2ex.com/gravatar/3baf7cb5ec337338418c6ff1d26bdf18?s=24&d=retro",
          avatar_mini:
            "//cdn.v2ex.com/gravatar/3baf7cb5ec337338418c6ff1d26bdf18?s=24&d=retro",
          location: null,
          btc: null,
          id: 220936
        },
        last_reply_by: "Henrybsbhp",
        last_touched: 1574911790,
        title: "Apple Music 真香",
        url: "https://www.v2ex.com/t/623792",
        created: 1574873983,
        content:
          "有感于最近你是什么时候开始讨厌网易云音乐的帖子，用了下 Spotify 感觉好贵，还是不入坑了，于是转到 Apple Music，用完真是觉得相见恨晚。\r\n\r\n#### 关于情怀\r\n听 Eason 的歌居然听出来了高中的感觉？磁带机+Walkman 的时代。那时候即使是磁带也是无损的吧，每个 CD 都是独一无二的，孤立的音乐，并没有那么多歌单把它们强行串起来，也没有那么多评论对它评头论足。你听它的时候，它会向你敞开怀抱，将你拥进那个时代。\r\n\r\n#### 关于音质\r\nAAC 音质真是舒服，感觉能媲美甚至超过国内几大平台的无损，音色还原真是清晰，高中低音分明。\r\n\r\n#### 关于 Radio\r\n那个按年代来分类的真心不错，心情好的周末在家冲咖啡，开着’60s Pop 看书应该会很享受吧。\r\n\r\n#### 其他的后续再探索。",
        content_rendered:
          "<p>有感于最近你是什么时候开始讨厌网易云音乐的帖子，用了下 Spotify 感觉好贵，还是不入坑了，于是转到 Apple Music，用完真是觉得相见恨晚。</p>\n<h4>关于情怀</h4>\n<p>听 Eason 的歌居然听出来了高中的感觉？磁带机+Walkman 的时代。那时候即使是磁带也是无损的吧，每个 CD 都是独一无二的，孤立的音乐，并没有那么多歌单把它们强行串起来，也没有那么多评论对它评头论足。你听它的时候，它会向你敞开怀抱，将你拥进那个时代。</p>\n<h4>关于音质</h4>\n<p>AAC 音质真是舒服，感觉能媲美甚至超过国内几大平台的无损，音色还原真是清晰，高中低音分明。</p>\n<h4>关于 Radio</h4>\n<p>那个按年代来分类的真心不错，心情好的周末在家冲咖啡，开着’60s Pop 看书应该会很享受吧。</p>\n<h4>其他的后续再探索。</h4>\n",
        last_modified: 1574874115,
        replies: 62,
        id: 623792
      }
    ];
    // Taro.request({ url: "https://www.v2ex.com/api/topics/hot.json" }).then(
    //   res => {
    //     this.props.hotStore.setHotData(res.data);
    //   }
    // );
    this.props.hotStore.setHotData(data);
  }

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    const {
      hotStore: { hotData }
    } = this.props;
    const scrollStyle = {
      height: "100%"
    };
    const scrollTop = 0;
    const Threshold = 20;
    const vStyleA = {
      height: "150px",
      "background-color": "rgb(26, 173, 25)"
    };
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
        {hotData.map(c => {
          //return <View style={vStyleA}>{c.title}</View>;
          return (
            <AtCard
              note={dayjs(c.last_modified).format("YYYY-MM-DD HH:mm:ss")}
              title={c.title}
              //thumb='http://www.logoquan.com/upload/list/20180421/logoquan15259400209.PNG'
              isFull={true}
              //extra='额外信息'
            >
              {c.content}
            </AtCard>
          );
        })}
      </ScrollView>
    );
  }
}

export default Index as ComponentType;
