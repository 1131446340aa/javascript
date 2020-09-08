<template>
  <div id="app">
    <keep-alive>
     
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "APP",
  data() {
    return {
      a: ""
    };
  },

};
</script>

<style lang="stylus" scoped></style>
