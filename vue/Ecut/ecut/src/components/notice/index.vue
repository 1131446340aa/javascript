<template>
  <div class="main">
    <van-nav-bar left-text="通告" left-arrow @click-left="back"></van-nav-bar>
    <scroll top="50px">
      <div class="notice-wrapper">
        <div class="notice-item" v-for="(item,index) in notify.reverse()" :key="index">
          <van-cell-group>
            <van-cell :title="item.title" :value="item.date" />
          </van-cell-group>
          <div class="content">{{item.content}}</div>
        </div>
      </div>
    </scroll>
    <bg></bg>
  </div>
</template>

<script>
import bg from "../common/bg";
import scroll from "../common/scroll";
import mixin from "../../mixin/back";
export default {
  components: {
    bg,
    scroll
  },
  data() {
    return {
      notify: [
        {
          title: "ECUT微校园平台开始内测了",
          date: "2020-03-15",
          content:
            "这款软件是为东华理工大学打造的一款软件,其中包含了一些和学校方面的功能,目前正在开始内测中"
        },
        {
          title: "静态页面完成",
          date: "2020-03-17",
          content: "二手淘,校园,生活,我的和一些其他相关布局的页面完成"
        },
         {
          title: "二手淘及详情页面完成",
          date: "2020-03-19",
          content: "完成二手淘布局和详情页面的点赞收藏等功能"
        },
        {
          title: "课表功能完成",
          date: "2020-03-20",
          content: "完成课表功能,支持添加和查询课表"
        },
        {
          title: "图书馆功能完成",
          date: "2020-03-21",
          content: "支持查阅图书馆书籍和书籍借出详情"
        },
        {
          title: "成绩及生活页面及生活页面详情完成",
          date: "2020-03-24",
          content: "完成成绩查询,生活展示及生活详情页面开发"
        },
        {
          title: "我的页面完成",
          date: "2020-03-26",
          content: "完成我的页面多个布局"
        },
        {
          title: "修复少量bug和美化界面",
          date: "2020-03-29",
          content: "修复了一些已知bug和美化了界面布局"
        },
        {
          title: "基本完成所有功能",
          date: "2020-4-05",
          content: "基本完成功能"
        },
         {
          title: "优化:将首页布局改为瀑布流",
          date: "2020-4-22",
          content: "首页改为瀑布流,并添加动画效果"
        },
        {
          title: "解决bug",
          date: "2020-4-24",
          content: "修复二手套主界面瀑布流布局跳转其他页面再回到二手套界面滚动条滚动到顶部"
        },
        
      ]
    };
  },

  mixins: [mixin]
};
</script>

<style lang="stylus" scoped>
.notice-item {
  margin: 1.5rem;
 
}
.content {
  line-height: 3rem;
  font-size: 1.6rem;
  background-color: #fff;
  padding: 1.5rem;
  margin-bottom: 2rem;
}
</style>