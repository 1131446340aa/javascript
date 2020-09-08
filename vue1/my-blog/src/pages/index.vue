<template>
  <div class="main">
    <div class="left">
      <div class="swipper">
        <div class="bold">
          <el-carousel height="300px" direction="vertical" :interval="2000">
            <el-carousel-item v-for="item in ImgArr" :key="item">
              <div class="medium">
                <img :src="item" alt />
              </div>
            </el-carousel-item>
          </el-carousel>
        </div>
        <div class="about" >
          <div class="blog_owner bg1">
            <div class="title">关于博主</div>
            <div class="connect">个人资料:男,九五后,IT男,水瓶座,爱好: 中国象棋,编程,阅读</div>
          </div>
          <div class="blog_owner bg2">
            <div class="title">关于博客</div>
            <div class="connect">黄力豪的私人小博客啊</div>
          </div>
        </div>
      </div>
      <blogItem :article="article"></blogItem>
      <!-- <div class="main-wz">
        <div class="title">最新文章</div>
        <div
          class="article-item"
          v-for="(item,index) in article"
          :key="index"
          @click="toinfo(item.id)"
        >
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
      </div> -->
    </div>
    <div class="right">
      <rightBar :article="article"></rightBar>
    </div>
  </div>
</template>

<script>
import { getIndex } from "../network/http";
import rightBar from "../components/right_bar";
import blogItem from '../components/blog_item'
export default {
  data() {
    return {
      ImgArr: [
        "http://pic.sc.chinaz.com/files/pic/pic9/202001/zzpic22564.jpg",
        "http://pic.sc.chinaz.com/files/pic/pic9/201910/bpic14045.jpg",
        "http://pic.sc.chinaz.com/files/pic/pic9/201910/zzpic20759.jpg"
      ],
      article: []
    };
  },
 
  mounted() {
    this.$http.get("http://localhost:8080/data/article.json").then(res => {
      this.article = res.data.data;
    });
  },
  components: { rightBar ,blogItem}
};
</script>
<style lang="less" scoped>
.main {
  display: flex;
  max-width: 1200px;
  margin: 0 auto;

  .left {
    .swipper {
      display: flex;
      .bold {
        width: 50vw;
        min-width: 455px;
        text-align: center;
        .medium {
          img {
            width: 100%;
          }
        }
      }
      .about {
        width: 10vw;
        height: 300px;
        min-width: 100px;
        .blog_owner {
          height: 150px;

          padding: 15px;
          box-sizing: border-box;
          .connect {
            color: #b3b3b3;
            line-height: 18px;
            font-size: 12px;
          }
        }
        .bg1 {
          background-color: #fffff7;
          border: 1px solid #ffcc00;
        }
        .bg2 {
          border: 1px solid #cceff5;
          background-color: #fafcfd;
        }
      }
    }
  }
 
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}
.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>