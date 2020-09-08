<template>
  <div class="main">
    <el-timeline :reverse="true">
      <el-timeline-item
        :timestamp="item.date"
        placement="top"
        v-for="(item,index) in info"
        :key="index"
      >
        <el-card>
          <h4>{{item.title}}</h4>
          <p>黄力豪 提交于 {{item.date}}</p>
        </el-card>
      </el-timeline-item>
    </el-timeline>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$http.get("http://localhost:8080/data/article.json").then(res => {
      res.data.data.forEach(element => {
        this.info = res.data.data;
      });
    });
  },
  data() {
    return {
      info: []
    };
  }
};
</script>

<style lang="less" scoped>
.main {
  max-width: 1200px;
  margin: 0 auto;
}
</style>