<template>
  <div class="main">
    <h3>{{title}}</h3>
    <p>支持人数 {{subNum}}</p>
    <p>反对人数 {{oppNum}}</p>
    <p>支持率:{{ratio}}</p>
    <p>{{x}}</p>
    <button @click="change(0)">支持</button>
    <button @click="change(1)">反对</button>
    <button @click="test">test</button>
  </div>
</template>

<script>
import {
  watchEffect,
  ref,
  reactive,
  toRefs,
  readonly,
  computed,
  onMounted,
  watch
} from "vue";
import { useMousePosition } from "../utils/mouse";
export default {
  /**
@author 黄力豪
@desc vue3-learn
@date 2020-06-23 20:51:26
@Email 1131446340@qq.com
*/
  props: {
    title: String
  },
  setup(props) {
    // console.log(props.title);
    // watchEffect(() => {
    //   console.log(props.title);
    // });
    // let state = ref({
    //   subNum: 0,
    //   oppNum: 0
    // });

    const { x2, y2 } = useMousePosition();
    onMounted(() => {
      console.log(1);
    });
    let { y1 } = useCurrentFolderData();
    console.log(y1);
    // let subNum = ref(0);
    // let oppNum = ref(0);
    let state = reactive({
      subNum: 0,
      oppNum: 0
    });
    watch(()=>state.subNum, () => {
      console.log(123)
    });
    watchEffect(() => {
      //   renderTemplate(
      //     `<button @click="increment">{{ count }}</button>`,
      //     renderContext
      //   );
    });

    let x4 = ref(9)

    watch(x4,(newval,oldval)=>{
      console.log(123545)
    })// 支持多个,
    function change(lx) {
      lx === 0 ? state.subNum++ : state.oppNum++;
      x4.value+=1
    }
    function test(x) {
      watchEffect(() => {
        console.log(3);
      });
    }
  
    // 构建响应式组件
    let xxx = reactive({
      x: 10,
      y: {
        z: 20
      }
    });
    watchEffect(() => {
      //   document.body.innerHTML = `count is ${subNum}`;
    });
    let y = reactive({
      x: computed(() => xxx.x * 2)
    });
    
    let xxx2 = readonly(xxx); //只读
    // console.log(xxx.x);
    let ratio = computed(() => {
      let total = state.subNum + state.oppNum;
      return total === 0
        ? "--"
        : ((state.subNum / total) * 100).toFixed(2) + "%";
    });

    // console.log(ratio);
    return {
      //   subNum,
      //   oppNum,
      //   state,
      ...toRefs(state),
      ...toRefs(y),
      test,
      ratio,
      change,
      x2,
      y2,
      x4
    };
  }
};

function useCurrentFolderData() {
  return { y1: 101 };
}
</script>

<style>

</style>