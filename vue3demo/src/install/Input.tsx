import {
  reactive,
  vShow,
  vModelText,
  withDirectives,
  App,
  isReadonly
} from 'vue'
interface Props {
  number: number
  $slots: {
    desc: () => any[]
  }
  desc: () => {}
  input: any
  isShow: boolean
}
import { toRefs } from 'vue'
const install = (app: App) => {
  app.component('myInput', {
    props: {
      number: {
        type: String
      }
    },
    setup (props: Props, { slots }) {
      const state = reactive({ input: 0, isShow: false })
      return { ...toRefs(slots), ...toRefs(state) }
    },
    data () {
      return {
        number: 0
      }
    },
    render (props: Props) {
      console.log(isReadonly(props))
      return (
        <div>
          <div v-show={props.isShow}>你看不见我</div>
          {props.desc()}
          {props.$slots.desc()[0]}
          {/* {withDirectives(<input type='text' />, [[vModelText, this.number]])} */}
          <div>{this.number}</div>
          {withDirectives(<h1>Count: 2</h1>, [[vShow, true]])}
        </div>
      )
    }
  })
}

export default {
  install
}
