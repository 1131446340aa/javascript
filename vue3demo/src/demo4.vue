<template>
  <div>
    <h3>组件</h3>
    
  <Hello name="黄力豪" @updateName="updateName"></Hello>
  <Age :age="33"></Age>
  <myInput> 
    <template v-slot:desc>
      <div>
        这是输入框
      </div>
    </template>
  </myInput>
  </div>
</template>

<script lang="ts">
import Hello from './TSX/Hello'
import Age from './components/Age.vue'

export default {
components:{
    Hello,Age
},
setup(){
  const updateName =()=>{
    console.log(1);    
  }
  return {updateName}
}
}
</script>

<style>

</style>