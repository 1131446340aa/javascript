<template>
    <h3>vue3生命周期和nextTick的使用</h3>
</template>

<script lang="ts">
import { onMounted, onBeforeMount, nextTick} from 'vue'
export default {
    name: 'App',
    setup() {
        nextTick(() => {
            console.log('nextTick');
        })
        onMounted(() => {
            console.log('mounted');
        })
        
        onBeforeMount(() => {
            console.log('beforeMounted');
        })
        console.log('hello vite Vue3')
    }
}
</script>
