<template>
  <div class="right">
    <div class="title">最新文章</div>
    <el-divider></el-divider>
    <ul class="wrapper">
      <li
        class="item"
        v-for="(item,index) in article.slice(0,5)"
        :key="index"
        @click="toinfo(item.id)"
      >{{item.title}}</li>
    </ul>
    <el-divider></el-divider>
  </div>
</template>

<script>
export default {
  methods: {
    toinfo(key) {
      console.log(1);
      this.$router.push({ path: "/info", query: { key } });
    }
  },
  props: {
    article: {
      type: Array
    }
  }
};
</script>

<style lang="less" scoped>
.right {
  flex: 1;
  background-color: rgba(0, 0, 0, 0);
  padding-left: 50px;
  .title {
    font-size: 20px;
  }
  .wrapper {
    margin-left: 30px;
    .item {
      line-height: 30px;
      font-size: 14px;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      &:hover {
        color: coral;
      }
    }
  }
}
</style>