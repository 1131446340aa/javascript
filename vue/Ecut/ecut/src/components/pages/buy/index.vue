<template>
  <div class="main">
    <van-search shape="round" placeholder="请输入搜索关键词" @click="showsearch" />
    <div class="swipe-item">
      <product :height="height" :product="product" @getproductinfo="getproductinfo"></product>
    </div>
    <div class="add" @click="addproduct">
      <img src="../../../assets/add.jpg" alt />
    </div>
    <van-popup v-model="show" position="bottom" :style="{ height: '100%' }" autofocus="autofocus">
      <van-search
        v-model="value"
        show-action
        placeholder="请输入搜索关键词"
        ref="search"
        @search="onSearch"
        @cancel="onCancel"
      />
      <bg></bg>
    </van-popup>
    <van-popup v-model="visible1" position="bottom" :style="{ height: '100%' }">
      <publish
        @back="back"
        @finshed="finshed"
        :ispicure="true"
        type="发布商品"
        :price="price"
        placeholder="品牌型号,新旧程度,入手渠道,转手原因....."
      >
        <div class="price-list">
          <div class="icon-left">
            <i class="iconfont icon-jiage color"></i>
          </div>
          <div class="text">价格</div>
          <van-field v-model="price" type="number" />
          <div class="price">￥{{price}}</div>
          <div class="icon-right">
            <i class="iconfont icon-gengduocopy color"></i>
          </div>
        </div>
      </publish>
    </van-popup>
    <bg></bg>
  </div>
</template>

<script>
import { getUserinfo, getProduct } from "../../../../network/index";
import scroll from "../../common/scroll";
import mixin from "../../../mixin";
import product from "../../common/product";
import publish from "../../common/publish";
import bg from "../../common/bg";
export default {
  name: "buy",
  components: {
    scroll,
    product,
    publish,
    bg
  },
  data() {
    return {
      index: 0,
      product: [],
      offset: 1,
      active: "0",
      height: 0,
      visible1: false,
      price: "0",
      show: false,
      value: "",
      autofocus: false
    };
  },
  created() {
    if (localStorage.id) {
      this.id = localStorage.id;
      getUserinfo(res => {
        if (res.code == 200) {
          this.userinfo = res.data.records;
          localStorage.userinfo = JSON.stringify(this.userinfo);
        }
      }, this.id);
    }
  },
  mixins: [mixin],
  methods: {
    getproductinfo() {
      getProduct(res => {
        if (res.code === 200) {
          if ((this.offset - 1) * 10 < res.data.total) {
            this.offset += 1;
            this.product = [...this.product, ...res.data.records];
          } else {
            this.$notify({ type: "warning", message: "没有更多了" });
          }
        }
      }, this.offset);
    },
  
    finshed() {
      this.visible1 = false;
      this.$router.go(0);
    },
    onSearch() {
      if (this.value) {
        this.show = false;
        setTimeout(() => {
          this.$router.push({
            path: "/searchDetail",
            query: {
              keywords: this.value
            }
          });
        }, 20);
      }
    },
    onCancel() {
      this.value = "";
      this.show = false;
    },
    showsearch() {
      this.show = true;
      // this.$refs.search.focus()
      this.$nextTick(() => {
        // this.$refs.search.focus()
        this.autofocus = true;
      });
    },

    back() {
      this.visible1 = false;
    },
    addproduct() {
      this.visible1 = true;
    },
    pullmore() {
      this.offset = this.offset + 1;
      this.getproductinfo();
    }
  },
  beforeRouteLeave(to, from, next) {
    if (to.name !== "school" && to.name !== "life" && to.name !== "my") {
      to.meta.keepAlive = false;
    }
    next();
  },
  mounted() {
    this.height =
      document.documentElement.clientHeight -
      (document.documentElement.clientWidth / 37.5) * 11;
  }
};
</script>

<style lang="stylus" scoped>
.van-cell {
  padding: 0;
  line-height: 4rem;
}

.van-field__label {
  width: 4rem;
}

.price-list {
  display: flex;
  margin: 0 1rem;
  height: 4rem;
  line-height: 4rem;
  border-top: 1px solid rgba(222, 222, 222, 0.8);
  border-bottom: 1px solid rgba(222, 222, 222, 0.8);

  .text {
    font-size: 1.4rem;
    width: 9rem;
  }

  .color {
    color: #777;
    margin-right: 1.5rem;
    margin-left: 1.5rem;
  }

  .price {
    flex: 1;
    color: red;
    text-align: right;
  }
}

.item-list {
  flex: 1;
  margin-right: 1rem;
  margin-top: 1rem;
  width: 100%;
}

.product-wrapper {
  margin-left: 1rem;
  display: flex;
}

.add {
  width: 3rem;
  height: 3rem;
  border-radius: 1.5rem;
  overflow: hidden;
  position: fixed;
  bottom: 6rem;
  left: 85%;

  img {
    width: 100%;
    height: 100%;
  }
}
</style>