<template>
  <div class="main">
    <div class="left">
      <div class="title">关于博主</div>
      <div class="author">
        <i class="iconfont icon-yonghu"></i>
        黄力豪
        <i class="iconfont icon-riqi"></i>
        2020-5-27 20:15
      </div>
      <div class="info">
        <span>个人资料:</span>
        男,九五后,IT男,水瓶座
      </div>
      <div class="info">
        <span>爱好:</span>
        中国象棋,编程,阅读
      </div>
      <div class="info">
        <span>个人简介:</span>
        <div class="intro">
          九五后,IT boy,目前就读于东华理工,软件学院,大三党,热爱前端并自学了部分前端技术栈,对前端有很高的激情和热情.
          学习过vue全家桶,webpack,es6,typescript等一系列前端技术栈.积极乐观,自信向上,合作能力强,有奉献精神.
        </div>
      </div>
      <div class="info">
        <span>联系方式</span>
        <div class="deta">邮箱:1131446340@qq.com</div>
        <div class="deta">qq:1131446340</div>
        <div class="deta">微信:15079482413</div>
      </div>
    </div>
    <rightBar :article="article"></rightBar>
  </div>
</template>

<script>
import rightBar from "../components/right_bar";
export default {
  components: {
    rightBar
  },
  data() {
    return {
      article: []
    };
  },
  mounted() {
    this.$http.get("http://localhost:8080/data/article.json").then(res => {
      this.article = res.data.data;
    });
  }
};
</script>

<style lang="less" scoped>
.main {
  display: flex;
  max-width: 1200px;
  margin: 0 auto;
  .left {
    width: 60vw;
    min-width: 555px;
    .title {
      height: 40px;
      font-size: 20px;
      line-height: 40px;
    }
    .author {
      font-size: 12px;
      color: #999999;
      .icon-riqi {
        margin-left: 15px;
      }
    }
    .info {
      line-height: 60px;
      font-size: 16px;
      margin-left: 30px;
      span {
        font-weight: 700;
        margin-right: 3px;
      }
      .intro {
        line-height: 24px;
        font-size: 14px;
        height: 70px;
      }
      .deta{
          line-height: 50px;
          font-size: 14px;
          margin-left: 20px;
      }
    }
    .img1 {
      width: 80%;
      margin: 10px auto;
      img {
        width: 100%;
      }
    }
  }
}
</style>