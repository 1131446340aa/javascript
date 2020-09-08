<template>
  <div>
    <h3 ref="H3">ref,props 和一些小功能</h3>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'

export default {
  setup () {
    let H3 = ref(null)
    onMounted(() => {
      H3.value.style.color = 'red'
    })

    //还有一些小功能
    //  readonly 数据只读
    //  shallow -( reactive,ref,readonly) 只代理一层
    //  toRaw 将reactive或者readonly 的值还原
    //markRow 永远不会被代理
    //isRef isReactive 等
    //unref 如果参数是ref返回他的value否则返回参数
    return { H3 }
  }
}
</script>

<style></style>
