<template>
  <div>
    <div>{{ props.age }}</div>
    <!-- <div >{{ myStore.myAge }}</div> -->
    <!--  <div>爱好 ：{{hoppy}}</div> -->
  </div>
</template>

<script lang="ts">
import { reactive, isReadonly, toRaw, inject, ref, readonly } from 'vue'
interface Props {
  age: number
}
import vuex from '../shared/vuex'
export default {
  props: {
    age: {
      type: Number,
      default: 0
    }
  },
  setup (props: Props) {
    //   props 是readonly
    //不要尝试去解构props，因为这样会让props失去响应式
    // props.age = 23
    // console.log(isReadonly(props))

    props = reactive(toRaw(props))
    // let {myStore} = vuex
    // props.age = 23
    let hoppy = ref(inject('hoppy') as string)
    // console.log(hoppy);

    // setTimeout(() => {
    //     hoppy.value = '象棋'
    // }, 3000)
    return {
      props
      // hoppy
      // myStore
    }
  }
}
</script>

<style></style>
