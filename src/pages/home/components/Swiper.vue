<template>
  <div class="wrapper">
    <swiper :options="swiperOption"
            v-if="showSwiper">
      <!-- slides -->
      <swiper-slide v-for="item of list"
                    :key="item.id">
        <img :src="item.imgUrl"
             class="swiper-img">
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"
           slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      }
    }
  },
  computed: {
    showSwiper () {
      return this.list.length
    }
  }
}
</script>

<style lang="stylus" scoped>
.wrapper >>> .swiper-pagination-bullet-active
  background #fff
.wrapper
  width 100%
  height 0
  overflow hidden
  padding-bottom 31.25%
  .swiper-img
    width 100%
</style>
