<template>
  <ul class="list">
    <li class="item"
        @click="handleLetterClick"
        @touchstart.prevent="handleTouchStart"
        @touchmove="handleTouchMove"
        @touchend="handleTouchEnd"
        :ref="item"
        v-for="item of letters"
        :key="item">{{item}}
    </li>
  </ul>
</template>

<script>
export default {
  name: 'CityAlphebet',
  props: {
    cities: Object
  },
  data () {
    return {
      touchStatus: false,
      startY: 0,
      timer: null
    }
  },
  computed: {
    letters () {
      const letters = []
      for (let i in this.cities) {
        letters.push(i)
      }
      return letters
    }
  },
  /* 被重新渲染的时候：性能优化 */
  updated () {
    this.startY = this.$refs['A'][0].offsetTop
  },
  methods: {
    handleLetterClick (e) {
      this.$emit('change', e.target.innerText)
    },
    handleTouchStart () {
      this.touchStatus = true
    },
    /* 对右边字母进行拖动左边的列表也会随之变化 */
    handleTouchMove (e) {
      if (this.touchStatus) {
        if (this.timer) {
          clearTimeout(this.timer)
        }
        /* 如果正在做滚动的话，就让他延迟16ms后执行。在16ms之间又执行了滚动，那么他将会上一次操作清除，执行这一次要做的事 */
        /* 函数节流的操作：提高网页性能 */
        this.timer = setTimeout(() => {
          const touchY = e.touches[0].clientY - 79
          const index = Math.floor((touchY - this.startY) / 20)
          if (index >= 0 && index < this.letters.length) {
            this.$emit('change', this.letters[index])
          }
        }, 16)
      }
    },
    handleTouchEnd () {
      this.touchStatus = false
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/variables.styl'
.list
  display flex
  flex-direction column
  justify-content center
  position absolute
  top 1.58rem
  right 0
  bottom 0
  width 0.4rem
  .item
    line-height 0.4rem
    text-align center
    color $bgColor
</style>
