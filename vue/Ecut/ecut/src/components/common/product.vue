<template>
  <div>
    <vue-waterfall-easy
      ref="waterfall"
      :product="product"
      :imgsArr="product"
      @scrollReachBottom="getproductinfo"
      srcKey="cover"
      :height="height"
      :mobileGap="10"
      :reachBottomDistance="10"
      :loadingDotCount="0"
      :maxCols="2"
      @click="togoodsDetail"
      :imgWidth="width"
    >
      <div class="img-info" slot-scope="props">
        <div class="title van-multi-ellipsis--l2">{{props.value.detail}}</div>
        <div class="price">¥{{props.value.price}}</div>
        <div class="user">
          <div class="avator">
            <img v-lazy="props.value.userAvatar" />
          </div>
          <div class="name">{{props.value.username}}</div>
        </div>
      </div>
    </vue-waterfall-easy>
  </div>
</template>

<script>
import vueWaterfallEasy from "vue-waterfall-easy";
import { getProduct } from "../../../network";
export default {
  components: {
    vueWaterfallEasy
  },
  props: {
    height: {
      type: Number,
      default: 0
    },
    product: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  methods: {
    togoodsDetail(event, { index, value }) {
      this.$router.push({
        path: "/goodsDetail",
        query: {
          id: value.id,
          userid: value.userId
        }
      });
    },
    getEasyScroll() {
      let item = document.querySelector(".vue-waterfall-easy-scroll");
      return item ? item : window;
    },
    handleScroll() {
      this.scroll = this.getEasyScroll().scrollTop;
    },
    getproductinfo() {
      this.$emit("getproductinfo");
    }
  },
  computed: {
    width() {
      return document.documentElement.clientWidth * 0.45;
    }
  },
  data() {
    return {
      offset: 1,
      scroll: 0
    };
  },
  created() {
    console.log(1234);

    this.getproductinfo();
  },
  activated() {
    this.getEasyScroll().scrollTo(0, this.scroll);
    this.getEasyScroll().addEventListener("scroll", this.handleScroll);
  }
};
</script>

<style lang="stylus" scoped>
.img-info {
  padding: 0 0.6rem;

  .title {
    font-size: 1.4rem;
    font-weight: 700;
  }

  .price {
    color: red;
    font-size: 1.4rem;
    margin-top: 0.5rem;
  }

  .user {
    display: flex;
    padding: 0.4rem 0;

    .avator {
      width: 1.8rem;
      height: 1.8rem;
      border-radius: 50%;
      overflow: hidden;

      img {
        width: 100%;
      }
    }

    .name {
      margin-left: 0.5rem;
      line-height: 1.8rem;
      color: #909399;
    }
  }
}
</style>