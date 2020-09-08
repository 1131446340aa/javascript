<template>
  <div>
    css 属性响应式与指令
<h1 v-highlight="红色">这是一串被高亮为红色的字</h1>
  </div>
</template>

<script>
export default {
    setup(){
      return {
          "红色": 'red',
          "字体大小": '40px',
      }  
    }
}
</script>

<style vars='{红色, 字体大小}'>
  div{
      color: var(--红色);
      font-size: var(--字体大小);
  }
</style>