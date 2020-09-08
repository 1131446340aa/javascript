<template>
  <div>
    <Vote :title="title"></Vote>
  </div>
</template>

<script>
import Vote from "./components/Vote.vue";
import { watch ,reactive } from "vue";
export default {
  name: "App",
  components: {
    Vote
  },
  data() {
    return {
      title: "vue3好玩吗?"
    };
  },
  mounted() {
    setTimeout(() => {
      this.title = "react?";
    }, 1000);
  },
  setup(props) {
    watch(() => {});
    const data = reactive({});
  }
};
</script>
