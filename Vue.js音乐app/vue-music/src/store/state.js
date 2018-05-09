/*
  vuex 的状态管理
*/

import {playMode} from 'common/js/config'

const state = {
  // 歌手状态
  singer: {},
  // 播放器内核状态
  playing: false,
  fullScreen: false,
  playlist: [],
  sequenceList: [],
  mode: playMode.sequence,
  currentIndex: -1
}

export default state