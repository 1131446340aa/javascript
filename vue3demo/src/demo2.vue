<template>
  <div>
    <h3>vue3响应式系统和methods</h3>
    <div>年龄:{{ myAge }}</div>
    <div>明年的年龄:{{ mylastAge }}</div>
    <button @click="AgeAdd">年龄+1</button>
    <div>姓名:{{ myName }}</div>
    <div>
      爱好:
      <div v-for="(hoppy, index) in hoppys" :key="index">{{ hoppy }}</div>
    </div>
    <div>来自 {{ state1.from }}</div>
  </div>
</template>

<script lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import {
  ref,
  toRefs,
  reactive,
  watchEffect,
  watch,
  computed,
  onMounted
} from 'vue'
export default {
  name: 'App',
  setup () {
    let myAge = ref(23) //响应式数据
    let myName = '黄力豪' //非响应式数据
    const state = reactive({
      //复杂数据响应式  类似data 基于proxy 操作数组也会触发响应式
      hoppys: ['中国象棋', 'javaScript']
    })
    
    const state1 = reactive({
      // 可以定义多个数据源
      from: '江西抚州'
    })
    watchEffect(() => {
      // watch 副作用函数 首次加载会触发,当值发生变化也会触发
      console.log('年龄:' + myAge.value)
      console.log('爱好:' + state.hoppys)
    })
    let mylastAge = computed(() => {
      return myAge.value + 1
    })
    setTimeout(() => {
      state.hoppys[1] = 'typeScript'
      myAge.value += 1
      myName = '力豪'
    }, 1000)
    watch([state.hoppys, myAge], newVal => {
      //可以监听多个值
      console.log('watch:' + newVal)
    })
    const methods = {
      AgeAdd () {
        myAge.value += 1
      }
    }
    return {
      myName,
      myAge,
      ...toRefs(state), //将reactive转化为ref
      state1,
      mylastAge,
      ...methods
    }
  }
}
</script>
