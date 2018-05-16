/*
  vuex 的状态管理
*/

import {playMode} from 'common/js/config'
import {loadSearch, loadFavorite} from 'common/js/cache'

const state = {
  // 歌手状态
  singer: {},
  // 播放器内核状态
  playing: false,
  fullScreen: false,
  // 播放列表,改变播放模式就是修改播放列表
  playlist: [],
  // 原始播放列表
  sequenceList: [],
  // 播放模式
  mode: playMode.sequence,
  currentIndex: -1,
  // 歌单对象
  disc: {},
  // 排行榜详情页
  topList: {},
  // 搜索历史
  searchHistory: loadSearch(),
  // 收藏列表
  favoriteList: loadFavorite()
}

export default state