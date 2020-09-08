export default {
    methods: {
        getEasyScroll() {
            let item = document.querySelector(".vue-waterfall-easy-scroll");
            return item ? item : window;
        },
        handleScroll() {
            this.scroll = this.getEasyScroll().scrollTop
        }
    },
    activated() {
        this.getEasyScroll().scrollTo(0, this.scroll)
        this.getEasyScroll().addEventListener('scroll', this.handleScroll)
    }
}