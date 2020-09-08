<template>
  <div class="main">
    <musictop :id="songitem.id"></musictop>
    <van-swipe :show-indicators="false">
      <van-swipe-item>
        <div class="swipe-music">
          <div class="big-circle">
            <div class="small-circle" :style="{ animationPlayState :isplay?'running':'paused'}">
              <img v-if="songitem.al" :src="songitem.al.picUrl" alt />
              <img v-if="singsheet[index].radio" :src="singsheet[index].radio.picUrl" alt />
            </div>
          </div>
        </div>
      </van-swipe-item>
      <van-swipe-item>
        <div class="swipe-lrc">
          <!-- <musictop></musictop> -->
          <BScroll :listenScroll="true" ref="scroll_lrc" :top="0">
            <div>
              <div class="item_lrc" v-for="(item,index) in 5"></div>
              <div
                v-show="songlrc.arrtext"
                class="item_lrc"
                v-for="(item,index) in songlrc.arrtext"
                :key="index"
              >
                <span class="bglrc" ref="lrc">{{item}}</span>
                <div class="active_lrc" ref="active_lrc">
                  <div class="in" ref="in" :class="currentlrc===index ? 'activated_Lrc':''">{{item}}</div>
                </div>
              </div>
              <div class="item_lrc" v-show="!songlrc.arrtext">
                <div class="bglrc">暂无歌词</div>
              </div>
              <div class="item_lrc" v-for="(item,index) in 5"></div>
            </div>
          </BScroll>
        </div>
      </van-swipe-item>
    </van-swipe>

    <div class="control">
      <div class="progress">
        <div class="left">{{currentTime}}</div>
        <div class="middle">
          <van-slider
            bar-height="4px"
            active-color="#ee0a24"
            v-model="values"
            @change="moving"
            @drag-start="movestart"
            @drag-end="moveend"
          >
            <div slot="button" class="custom-button"></div>
          </van-slider>
        </div>
        <div class="right">{{duration}}</div>
      </div>
      <div class="wrapper">
        <div class="item" @click="rules">
          <i v-show="playrules===0" class="iconfont icon-shunxu small"></i>
          <i v-show="playrules===1" class="iconfont icon-suijibofang-"></i>
          <i v-show="playrules===2" class="iconfont icon-danquxunhuan"></i>
        </div>
        <div class="item" @click="front">
          <i class="iconfont icon-shangyishou"></i>
        </div>
        <div class="item" @click="playing">
          <i v-show="!isplay" class="iconfont icon-bofang big-font big"></i>
          <i v-show="isplay" class="iconfont icon-zanting big-font big"></i>
        </div>
        <div class="item" @click="nextone">
          <i class="iconfont icon-xiayidan"></i>
        </div>
        <div class="item" @click="isShow">
          <i class="iconfont icon-gengduo small"></i>
        </div>
      </div>
    </div>
    <div class="background">
      <img v-if="songs.al" :src="songs.al.picUrl" alt />
      <img v-if="singsheet[index].radio" :src="singsheet[index].radio.picUrl" alt />
      <div class="mask"></div>
    </div>
    <div @click="hidden">
      <more v-show="isshow" @sendfn="currentplay"></more>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import BScroll from "./scroll";
import { mixin } from "../mixin/mixins";
import more from "./more";
import musictop from "./music_top";
import Vue from "vue";
export default {
  mixins: [mixin],
  watch: {
    value: function() {
      if (!this.touching) {
        this.values = this.value;
      }
    },
    currentTime: function() {
      let timer =
        this.currentTime.slice(0, 2) * 60 + this.currentTime.slice(3, 5) * 1;
      if (timer === 0) {
        this.$refs.scroll_lrc.scrollTo(0, 0);
      }
      let indexs = Array.from(this.songlrc.arrdatatime).indexOf(timer);
      if (indexs !== -1) {
        while (true) {
          //查找最后一个
          let index2 = Array.from(this.songlrc.arrdatatime).indexOf(
            timer,
            indexs + 1
          );
          if (index2 === -1) {
            break;
          } else {
            indexs = index2;
          }
        }
        this.currentlrc = indexs;
        this.$refs.scroll_lrc.scrollTo(
          0,
          Array.from(this.songlrc.arrdatatime).indexOf(timer) * -40
        );
        {
          let style = document.styleSheets && document.styleSheets[26];

          if (
            style.rules &&
            style.rules[0] &&
            style.rules[0].name !== "activate"
          ) {
            style.insertRule(
              `@keyframes activate {
                0%{
                  width:0
                  }
                100% {
                  width:${this.lrcWidth[`${this.currentlrc}`]}px
                    } 
                        }`,
              0
            );
          } else {
            style.deleteRule(0);
            style.insertRule(
              `@keyframes activate {
                0%{
                  width:0
                  }
                100% {
                  width:${this.lrcWidth[`${this.currentlrc}`]}px
                    } 
                        }`,
              0
            );
          }
          if (this.currentlrc + 1 !== this.songlrc.length) {
            this.$refs.in[this.currentlrc].style.animationDuration =
              this.songlrc.arrdatatime[this.currentlrc + 1] -
              this.songlrc.arrdatatime[this.currentlrc] +
              "s";
          }

          // let timer1 = setInterval(() => {
          //   if (this.$refs.in && this.$refs.in[this.currentlrc]) {
          //     this.$refs.in[this.currentlrc].style.width =
          //       this.$refs.in[this.currentlrc].offsetWidth + 1 + "px";
          //     if (
          //       this.$refs.in[this.currentlrc].offsetWidth+2 >
          //       this.lrcWidth[this.currentlrc]
          //     ) {
          //       this.$refs.in[this.currentlrc].style.opacity = 0;
          //       clearInterval(timer1);
          //       timer1=null
          //     }
          //   }
          // }, ((this.songlrc.arrdatatime[this.currentlrc + 1] - this.songlrc.arrdatatime[this.currentlrc]) * 1000) / this.lrcWidth[this.currentlrc]);
        }

        if (
          this.currentlrc === this.songlrc.arrdatatime.length ||
          timer === 0
        ) {
          this.currentlrc = 0;
        }
      }
    }
  },
  data() {
    return {
      currentlrc: 0,
      activelrc: "",
      lrcWidth: []
    };
  },
  methods: {
    moving(value) {
      // console.log(this.values);
      this.Value(this.values);
      this.Seek();
    },

    scroll(e) {
      // console.log(e);
    },
    movestart() {
      this.touching = true;
    },
    moveend() {
      this.touching = false;
    },
    currentplay(index) {
      this.currentIndex = index;
      this.run();
      this.Playing();
    },
    isShow() {
      this.isshow = true;
    },
    hidden() {
      this.isshow = false;
    },

    front() {
      if (this.playrules === 0) {
        this.currentIndex = this.index;
        this.currentIndex--;
        this.lrc_Width();
        this.run();
        this.Playing();
      }
      this.suiji_and_danqu();
    },
    rules() {
      this.playRules();
      // console.log(this.playrules);
    }
  },
  mounted() {
    Vue.prototype._this = this;
    if (!this.$route.query.isplay) {
      this.api();
    }
    // setTimeout(() => {
    //   this.$refs.lrc.forEach(item => {
    //     this.lrcWidth.push(item.offsetWidth);
    //   });

    //   this.$refs.active_lrc.forEach((item, key) => {
    //     item.style.width = this.lrcWidth[key] + "px";
    //   });
    // }, 1000);
  },
  components: {
    BScroll,
    more,
    musictop
  }
};
</script> 
<style lang="css">
</style>
<style lang="stylus" scoped>
@keyframes rotate {
  0% {
    transform: rotate(0);
  }

  50% {
    transform: rotate(180deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

.active_lrc {
  margin: 0 auto;
  position: relative;
  bottom: 40px;
  color: aquamarine;

  .in {
    width: 0;
    animation: lrcactiveed 30s;
    overflow: hidden;
  }

  .activated_Lrc {
    color: aquamarine;
    animation: activate 3s linear;
  }
}

.item_lrc {
  color: aliceblue;
  font-size: 14px;
  text-align: center;
  height: 40px;
  line-height: 40px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  .bglrc {
    width: auto;
  }
}

.activelrc {
  color: aquamarine;
  text-align: center;
  font-size: 14px;
  height: 40px;
  line-height: 40px;
  overflow: hidden;
}

.swipe-music {
  position: relative;
  height: 80vh;
}

.swipe-lrc {
  height: 80vh;
}

.wrapper {
  display: flex;
  height: 30px;

  .item {
    flex: 1;
    line-height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;

    .iconfont {
      font-size: 25px;
      color: #ffffff;
    }

    .small {
      font-size: 15px;
    }

    .big {
      font-size: 30px;
    }
  }
}

.background {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;

  img {
    width: 100vw;
    height: 100%;
    filter: blur(30px);
  }
}

.mask {
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  top: 0;
  background-color: #000;
  opacity: 0.4;
}

.custom-button {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: #ffffff;
}

.control {
  padding: 0 10px;
  box-sizing: border-box;
  position: fixed;
  left: 0;
  right: 0;
  height: 15vh;
  bottom: 2vh;

  .progress {
    display: flex;
    height: 20px;
    margin-bottom: 30px;

    .left, .right {
      font-size: 10px;
      flex: 1;
      color: #ffffff;
      line-height: 20px;
    }

    .middle {
      flex: 10;
      margin: 0 10px;
      position: relative;
      top: 7px;
    }
  }
}

.big-circle {
  position: absolute;
  top: 20%;
  left: 15%;
  width: 70vw;
  height: 70vw;
  background-color: #1E1E20;
  border: 4px solid #34394C;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  .small-circle {
    border-radius: 50%;
    width: 50vw;
    height: 50vw;
    overflow: hidden;
    animation: rotate 27s linear infinite;
    animation-play-state: running;

    img {
      width: 50vw;
      height: 50vw;
    }
  }
}

.main {
  padding: 5px 10px;
  position: relative;
  height: 100vh;
  box-sizing: border-box;
}
</style>