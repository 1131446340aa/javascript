<template>
  <div id='app'>
    <div>{{this.$store.state.name}}</div>
    <div>{{this.$store.getters.myage}}</div>
    <div>{{this.$store.getters.y}}</div>
    <div>{{this.$store.state.a.x}}</div>
    <button @click='add'>+10</button>
    <button @click='sub'>-10</button>

    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted() {
    console.log(this.$store);
    setTimeout(() => {
      this.$store.state.name = 100;
    }, 1000);
  },
  methods: {
    add() {
      this.$store.commit('syncAdd', 10);
    },
    sub() {
      this.$store.dispatch('asyncSub', 10);
    }
  }
};
</script>
