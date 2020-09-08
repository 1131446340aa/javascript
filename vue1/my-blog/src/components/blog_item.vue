<template>
  <div class="main-wz">
    <div class="title">最新文章</div>
    <div class="article-item" v-for="(item,index) in article" :key="index" @click="toinfo(item.id)">
      <div class="img">
        <img :src="item.img" alt />
      </div>

      <div class="intro">
        <div class="title1">{{item.title}}</div>
        <div class="detail">{{item.detail}}</div>
        <div class="other">
          <div class="catagry">
            <i class="iconfont icon-biaoqian"></i>
            {{item.catagry}}
          </div>
          <div class="date">
            <i class="iconfont icon-lishi"></i>
            {{
            item.date}}
          </div>
        </div>
        <el-divider></el-divider>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    article: {
      type: Array
    }
  },
  methods: {
    toinfo(key) {
      console.log(1234);
      
      this.$router.push({ path: "/info", query: { key } });
    }
  }
};
</script>

<style lang="less" scoped>
.main-wz {
  .title {
    height: 30px;
    line-height: 30px;
    font-size: 18px;
    border-bottom: 2px solid orange;
    margin-top: 20px;
    width: 60vw;
    min-width: 555px;
  }
  .article-item {
    padding: 30px 0;
    display: flex;

    .img {
      width: 10vw;
      min-width: 75px;
      text-align: center;
      height: 140px;
      line-height: 140px;
      margin-left: 15px;
      margin-right: 30px;
      img {
        width: 100%;
        vertical-align: middle;
        margin-top: 20px;
      }
    }
    .intro {
      width: 100%;
      .other {
        display: flex;
        color: #759b08;
        margin-top: 12px;
        .iconfont {
          margin-right: 12px;
        }
        .icon-biaoqian {
          color: pink;
        }
        .date {
          color: #999;
          margin-left: 14px;
          .icon-lishi {
            color: skyblue;
          }
        }
      }
      .title1 {
        font-weight: bold;
        font-size: 18px;
        line-height: 30px;
        height: 30px;
      }
      .detail {
        width: 50vw;
        min-width: 454px;
        text-overflow: -o-ellipsis-lastline;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        line-height: 24px;
        margin-top: 20px;
        font-size: 14px;
        color: #777;
        &:hover {
          color: hotpink;
        }
      }
    }
  }
}
</style>