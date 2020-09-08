//原生js轮播图的实现
class Swiper {
    constructor(options) {
        this.main = options.main //最外层容器,必须
        this.$parent = options.parent // 小圆圈容器,必须
        this.arrImages = options.images// 图片数组,必须
        this.arrow_l = options.arrow_l //左箭头 须mouseSuspend=false生效
        this.arrow_r = options.arrow_r//右箭头 须mouseSuspend=false
        this.imgUrl = null //一些公共变量
        this.sel_li = null
        this.timer1 = null
        this.width = options.width || 300  //轮播图宽度,默认300px
        this.height = options.height || 180 //轮播图宽度,默认180px
        this.duration = options.duration || 2000  //轮播图周期,默认2s
        this.mouseSuspend = false  //鼠标经过轮播图是否暂停 默认不暂停
        this.render()    
    }
    render() {

        if (!(this.main && this.$parent && this.arrImages)) {
            throw new Error('please check the params of main parent images ')
        }

        for (let n = 0; n < this.arrImages.length; n++) {
            //动态生成小圆圈，让其与图片数量相等
            let li = document.createElement('li')
            this.$parent.appendChild(li)
        }
        this.main.style.width = this.width + 'px'
        this.main.style.height = this.height + 'px'
        this.timer1 = setInterval(() => { this.autoMoveLeft() }, this.duration)//自动换一张图片
        this.sel_li = document.querySelectorAll('li')
        this.sel_li[0].classList.add('current')
        if (!this.mouseSuspend) {
            this.main.addEventListener('mouseenter', () => {
                //当鼠标经过图片，移除定时器，同时显示上一张和下一张按钮
                if (this.arrow_r && this.arrow_l) {
                    this.arrow_l.style.display = "block"
                    this.arrow_r.style.display = "block"
                }
                clearInterval(this.timer1)
            })
            this.main.addEventListener('mouseleave', () => {
                //当鼠标离开让定时器运行
                if (this.arrow_r && this.arrow_l) {
                    this.arrow_l.style.display = "none"
                    this.arrow_r.style.display = "none"
                }
                this.timer1 = setInterval(() => { this.autoMoveLeft() }, this.duration)
            })
        }

        if (this.arrow_l) {
            this.arrow_l.addEventListener('click', () => {
                this.autoMoveRight()
            })
        }
        if (this.arrow_r) {
            this.arrow_r.addEventListener('click', () => {
                this.autoMoveLeft()
            })
        }

        for (let i = 0; i < this.arrImages.length; i++) {
            //动态生成img可以随意增减轮播图的图片数量
            let img = new Image()
            img.src = this.arrImages[i]
            img.style.width = this.width + 'px'
            img.style.height = this.height + 'px'
            img.style.left = this.width * i + "px"//让生成的每一张图片紧紧连在一起
            this.main.appendChild(img)
        }
        this.imgUrl = document.querySelectorAll('img')
        for (let m = 0; m < this.arrImages.length; m++) {
            this.sel_li[m].addEventListener('click', () => {
                if (this.imgUrl[m].offsetLeft == 0)//如果点击的小圆圈和展示图相对应，则不做任何操作
                { return }
                else {
                    let timer2 = setInterval(() => {
                        this.time()
                        if (this.imgUrl[m].offsetLeft == 0//让当前小圆圈所代表的图片最左边贴近父容器，则表示显示小圆圈所代表的图片
                        ) {
                            clearInterval(timer2)
                        }
                    })
                }//保证图片迅速切完

            })
        }


    }
    autoMoveLeft() {
        const moveLeft = () => {
            this.time()
            if (this.imgUrl[this.arrImages.length - 1].offsetLeft % this.width == 0) {//当任意一张图片(意思就是图片的下标任意)走完本身长度的n倍时，移除定时器
                clearInterval(timer)
            }
        }
        let timer = setInterval(moveLeft, 50);//每50毫秒图片换完

    }
    autoMoveRight() {

        const moveRight = () => {
            let j = 0
            let x = 0
            for (x = 0; x < this.arrImages.length; x++) {//原理类似time函数
                if (this.imgUrl[x].offsetLeft == this.width * (this.arrImages.length - 1)) {
                    if (x + 1 == this.arrImages.length) { this.sel_li[0].classList.remove('current') }
                    else { this.sel_li[x + 1].classList.remove('current') }

                    this.sel_li[x].classList.add('current')
                    this.imgUrl[x].style.left = -this.width + "px"
                }

            }
            for (j = 0; j < this.arrImages.length; j++) {
                this.imgUrl[j].style.left = this.imgUrl[j].offsetLeft + 50 + "px"

            }

            if (this.imgUrl[this.arrImages.length - 1].offsetLeft % this.width == 0) {
                clearInterval(timer)
            }
        }
        let timer = setInterval(moveRight, 50);
    }
    time() {
        let j = 0
        let x = 0

        for (j = 0; j < this.arrImages.length; j++) {
            this.imgUrl[j].style.left = this.imgUrl[j].offsetLeft - 50 + "px"//调用一次定时器，每张图片左移50px

        }
        for (x = 0; x < this.arrImages.length; x++) {
            if (this.imgUrl[x].offsetLeft == -this.width) {//当当前展示图片走完图片宽度时，将小图片的红色背景色移除，给下一张图片添加红色背景色
                this.sel_li[x].classList.remove('current')
                if (x == this.arrImages.length - 1) { this.sel_li[0].classList.add('current') }//如果当前图片为最后一张，则给第一张图片增加背景色
                else {
                    this.sel_li[x + 1].classList.add('current')
                }
                this.imgUrl[x].style.left = this.width * (this.arrImages.length - 1) + "px"//把这张图片移到轮播图的最末尾，保证轮播图首尾相连
            }
        }
    }
}
