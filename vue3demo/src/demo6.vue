<template> 
  <div>
  <h3>全局通信</h3>
    {{myName}}
    <Age></Age>
    爱好：{{hoppy}}
  </div>
</template>

<script lang="ts">
import {toRefs, provide,ref, inject} from 'vue'
import vuex from './shared/vuex'
import Age from './components/Age.vue'

export default {
components:{
  Age
},
 setup(){
    const {myStore, updateName, updatedAge } = vuex
    updateName('力豪')
    updatedAge(18)
    provide('hoppy',ref('javascript'))
    let hoppy = ref(inject('hoppy') as string)
    return {...toRefs(myStore),hoppy}
}
}
</script>

<style>

</style>