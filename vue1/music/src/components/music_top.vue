<template>
  <div class="top">
    <div class="icon" @click="goback">
      <i class="iconfont icon-left-arrow"></i>
    </div>
    <div class="text">
      <div class="van-ellipsis song">{{songitem.name}}</div>
      <!-- <div class=""></div> -->
      <div class="singer" v-if="songitem.ar">{{songitem.ar[0].name}}</div>
      <div class="singer" v-if="songitem.radio">{{songitem.radio.name}}</div>
    </div>
    <div class="slot" @click="iscollect">
      <i v-if="!collect" class="iconfont icon-shoucang"></i>
      <i v-if="collect" class="iconfont icon-favor-active"></i>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { likelist, like_music } from "../../network/index";
export default {
  computed: {
    ...mapGetters(["songitem", "singsheet"])
  },
  props: {
    id: {
      type: Number,
      default: 0
    }
  },
  methods: {
    // ...mapActions(['']),
    goback() {
      this.$router.go(-1);
    },
    iscollect() {
      if (this.collect) {
        this.like = false;
      } else {
        this.like = true;
      }
      like_music(this.songitem.id, this.like, res => {
        // console.log(res);
        this.collect = !this.collect;
      });
    }
  },
  watch: {
    songitem: function() {
      likelist(res => {
        if (res.ids.indexOf(this.songitem.id) !== -1) {
          // this.like = true;
          this.collect = true;
        } else {
          // this.like = false;
          this.collect = false;
        }
      });
    }
  },
  data() {
    return {
      collect: false,
      like: false
    };
  }
};
</script>
<style lang="stylus" scoped>
.top {
  height: 49px;
  display: flex;

  .icon, .slot {
    line-height: 49px;
    margin-right: 10px;
  }

  .text {
    line-height: 25px;
    flex: 1;
  }
}

.song {
  font-size: 14px;
  color: bisque;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 70vw;
}

.singer {
  font-size: 10px;
  color: darksalmon;
}

.iconfont {
  color: aliceblue;
}

.slot {
  .iconfont {
    color: red;
  }
}
</style>