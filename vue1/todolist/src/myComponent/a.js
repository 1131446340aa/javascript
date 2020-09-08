
// import hello from '../components/hello'

// import '../assets/css.css'
// import { Div } from '../assets/css'
const install = _vue => {
    let Vue = _vue
    Vue.component('ab', {
        methods: {
            handleClick() {
                console.log(123);

            }
        },
        data() {
            return {
                a: 3
            }
        },
        props: {
            to: String
        },

        render() {
            return (
                <div onClick={this.handleClick} class="name" style={{ height: "90px" }}>
                    {this.a}
                    <div>
                        {this.to}
                        {this.$slots.default}
                    </div>
                </div>
            )
        }
    })
}

export default {
    install
}