<template>
  <transition name="slide">
    <div class="user-center">
      <div class="back" @click="back">
        <i class="icon-back"></i>
      </div>

      <div class="love">
        <i class="play"></i>
        <span class="b">我喜欢的</span>
      </div>

      <div class="play-btn" ref="playBtn" @click="random">
        <i class="icon-play"></i>
        <span class="text">随机播放全部</span>
      </div>
      <div class="list-wrapper" ref="listWrapper">
        <scroll ref="favoriteList" class='list-scroll' :data="favoriteList">
          <div class="list-innner">
            <song-list :songs="favoriteList" @select="selectSong"></song-list>
          </div>
        </scroll>
      </div>
      <div class="no-result-wrapper" v-show="!favoriteList.length">
        <no-result title="暂无收藏歌曲"></no-result>
      </div>
    </div>
  </transition>
</template>
<script>
  import {mapGetters, mapActions} from 'vuex'
  import Scroll from 'base/scroll/scroll'
  import SongList from 'base/song-list/song-list'
  import NoResult from 'base/no-result/no-result'
  import Song from 'common/js/song'
  import {playlistMixin} from 'common/js/mixin'

  export default {
    mixins: [playlistMixin],
    computed: {
      ...mapGetters([
        'favoriteList'
      ])
    },
    components: {
      Scroll,
      SongList,
      NoResult
    },
    methods: {
      handlePlaylist(playlist) {
        const bottom = playlist.length > 0 ? '60px' : ''
        this.$refs.listWrapper.style.bottom = bottom
        this.$refs.favoriteList && this.$refs.favoriteList.refresh()
      },
      selectSong(song) {
        this.insertSong(new Song(song))
      },
      back() {
        this.$router.back()
      },
      random() {
        let list = this.favoriteList
        if (list.length === 0) {
          return
        }
        list = list.map((song) => {
          return new Song(song)
        })
        this.randomPlay({
          list
        })
      },
      ...mapActions([
        'insertSong',
        'randomPlay'
      ])
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"

  .user-center
    position: fixed
    top: 0
    bottom: 0
    z-index: 100
    width: 100%
    background: $color-background
    &.slide-enter-active, &.slide-leave-active
      transition: all 0.3s
    &.slide-enter, &.slide-leave-to
      transform: translate3d(100%, 0, 0)
    .back
      position absolute
      top: 0
      left: 6px
      z-index: 50
      .icon-back
        display: block
        padding: 10px
        font-size: $font-size-large-x
        color: $color-theme
    .switches-wrapper
      margin: 10px 0 30px 0
    
    .love
      box-sizing: border-box
      width: 135px
      padding: 7px 0
      margin: 15px auto
      text-align: center
      color: $color-text-l
      border-radius: 100px
      font-size: 0
      .play
        display: inline-block
        vertical-align: middle
        margin-right: 6px
        font-size: $font-size-medium-x
      .b
        display: inline-block
        vertical-align: middle
        font-size: 16px

    .play-btn
      box-sizing: border-box
      width: 135px
      padding: 7px 0
      margin: 0 auto
      text-align: center
      border: 1px solid  $color-text-l
      color: $color-text-l
      border-radius: 100px
      font-size: 0
      .icon-play
        display: inline-block
        vertical-align: middle
        margin-right: 6px
        font-size: $font-size-medium-x
      .text
        display: inline-block
        vertical-align: middle
        font-size: $font-size-small
    .list-wrapper
      position: absolute
      top: 110px
      left: 30px
      bottom: 0
      width: 100%
      .list-scroll
        height: 100%
        overflow: hidden
        .list-inner
          padding: 20px 30px
    .no-result-wrapper
      position: absolute
      width: 100%
      top: 50%
      transform: translateY(-50%)
</style>