<template>
  <div class="main">
    <van-nav-bar title="物品收藏" left-text="返回" @click-left="back" />
    <list :collect="collect" type="product"></list>
  </div>
</template>

<script>
import list from "../common/list";
import back from '../../mixin/back'
import { collectAll } from "../../../network";
export default {
  mounted() {
    this.userinfo = JSON.parse(localStorage.userinfo);
    this.getcollect();
  },
  mixins:[back],
  components:{
    list
  },
  data() {
    return {
      userinfo: "",
      collect: []
    };
  },
  methods: {
    getcollect() {
      collectAll(res => {        
        if (res.code == 200) {
          console.log(res);
          
          this.collect = res.data.records;
        } 
      }, this.userinfo.id);
    }
  },
  beforeRouteLeave(to, from, next) {
    if (to.name ==='goodsDetail') {
      to.meta.keepAlive = false;
    }
    next();
  },
};
</script>

<style lang="stylus" scoped></style>