<template>
  <div class="singer">
    歌手页面
  </div>
</template>
<script>
  import {getSingerList} from 'api/singer'
  import {ERR_OK} from 'api/config'
  import Singer from 'common/js/singer'

  const HOT_SINGER_LEN = 10
  const HOT_NAME = '热门'

  export default {
    data() {
      return {
        singers: []
      }
    },
    created() {
      this._getSingerList()
    },
    methods: {
      _getSingerList() {
        getSingerList().then((res) => {
          if (res.code === ERR_OK) {
            // console.log(res.data.list)
            this.singers = res.data.list
            console.log(this._normalizeSinger(this.singers))
          }
        })
      },
  // 返回的数据是按热度排行的json，不满足要求，需要重新排列
      _normalizeSinger(list) {
        let map = {
          hot: {
            title: HOT_NAME,
            items: []
          }
        }
        list.forEach((item, index) => {
          if (index < HOT_SINGER_LEN) {
            map.hot.items.push(
            // {
            //   id:item.Fsinger_mid,
            //   name: item.Fsinger_name
            //   avatar: `y.gtimg.cn/music/photo_new/T001R300x300M0000${item.Fsinger_mid}.jpg?max_age=2592000`
            // }
            new Singer({
              name: item.Fsinger_name,
              id: item.Fsinger_mid
            })
            )
          }
          const key = item.Findex
          if (!map[key]) {
            map[key] = {
              title: key,
              items: []
            }
          }
          map[key].items.push(new Singer({
            name: item.Fsinger_name,
            id: item.Fsinger_mid
          }))
        })
        // console.log(map)
        // 为了得到有序列表，我们需要处理 map
        let hot = []
        let ret = []
        for (let key in map) {
          let val = map[key]
          if (val.title.match(/[a-zA-Z]/)) {
            ret.push(val)
          } else if (val.title === HOT_NAME) {
            hot.push(val)
          }
        }
        // 对ret数据做排序,顺序为字母charCode升序
        ret.sort((a, b) => {
          return a.title.charCodeAt(0) - b.title.charCodeAt(0)
        })
        return hot.concat(ret)
      }
    }
  }
</script>
<style lang="stylus">
  .singer
    position: fixed
    top: 88px
    bottom: 0
    width: 100%
</style>