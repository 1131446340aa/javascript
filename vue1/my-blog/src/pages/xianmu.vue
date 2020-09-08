<template>
  <div class="main">
    <blogItem :article="article"></blogItem>
    <rightBar :article="article"></rightBar>
  </div>
</template>

<script>
import rightBar from "../components/right_bar";
import blogItem from "../components/blog_item";
import { getIndex } from "../network/http";
export default {
  components: {
    rightBar,
    blogItem
  },
  data() {
    return {
      article: []
    };
  },
  mounted() {
    this.$http.get("http://localhost:8080/data/article.json").then(res => {
      res.data.data.forEach(element => {
        if (element.catagry == "个人项目") {
          this.article.push(element);
        }
      });
    });
  }
};
</script>

<style lang="less" scoped>
.main {
  display: flex;
  max-width: 1200px;
  margin: 0 auto;
}
</style>