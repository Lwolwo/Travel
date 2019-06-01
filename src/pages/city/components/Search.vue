<template>
  <div class="search">
    <input type="text"
           placeholder="输入城市名或拼音"
           class="search-input">
  </div>
</template>

<script>
export default {
  name: 'CitySearch'
}
</script>

<style lang="stylus" scoped>
@import '~styles/variables.styl'
.search
  height 0.72rem
  background $bgColor
  padding 0 0.1rem
  .search-input
    height 0.62rem
    line-height 0.62rem
    text-align center
    border-radius 0.06rem
    width 100%
    color #666
    padding 0 0.1rem
    box-sizing border-box
</style>
