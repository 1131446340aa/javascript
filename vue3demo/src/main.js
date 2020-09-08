import { createApp } from 'vue'
import Demo from './demo4.vue'

import './index.css'
import Input from './install/Input.tsx'
import { Button, message } from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
const app = createApp(Demo)
app.directive('highlight', {
    beforeMount(el, binding, vnode) {
        el.style.color = binding.value;
    },
    updated() {},
    mounted() {},
    created() {}
});

app.config.productionTip = false;
// app.mount('#app')
app.use(Input).mount('#app')
    // app.use(Button).mount('#app')