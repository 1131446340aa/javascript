<template>
  <div class="main">
    <div class="tabbar">
      <div class="icon" @click="back">
        <i class="iconfont icon-fanhui-copy-copy-copy-copy"></i>
      </div>
      <div class="search">
        <van-search v-model="value" placeholder="请输入搜索关键词" @search="tosearch" />
      </div>
    </div>
    <product :height="height" :product="product" @getproductinfo="tosearch"></product>
    <bg></bg>
  </div>
</template>

<script>
import { searchproduct } from "../../../network";
import bg from "../common/bg";
import scroll from "../common/scroll";
import product from "../common/product";
import mixin from "../../mixin";
import back from "../../mixin/back";
export default {
  mounted() {
    this.height =
      document.documentElement.clientHeight -
      (document.documentElement.clientWidth / 37.5) * 6;
   
  },
  created(){
    this.value = this.$route.query.keywords;   
  },
  data() {
    return {
      value: "",
      product: [],
      height: 0,
      offset: 0
    };
  },
  components: {
    scroll,
    bg,
    product
  },
  methods: {
    tosearch() {   
      if (this.value) {    
        searchproduct(res => {
          // this.duration = 1;
          // this.loading();
          if (res.code === 200) {
            if (!this.offset) {
              this.offset += 1;
              this.product = [...this.product, ...res.data.records];
            } else {
              this.$notify({ type: "warning", message: "没有更多了" });
            }
          }
        }, this.value);
      }
    }
  },
  mixins: [back]
};
</script>

<style lang="stylus" scoped>
.no-search {
  height: 10rem;
  line-height: 10rem;
  text-align: center;
}

.tabbar {
  display: flex;
  height: 5.4rem;
  line-height: 5.4rem;

  .search {
    flex: 1;
  }

  .icon {
    padding-left: 1.5rem;
    padding-right: 1rem;
    background-color: #fff;
  }
}

.product-wrapper {
  margin-left: 1rem;
  display: flex;
}

.item-list {
  flex: 1;
  margin-right: 1rem;
  margin-top: 1rem;
  width: 100%;
}
</style>