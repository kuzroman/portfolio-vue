import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    menuItems: [
      { name: 'Home', path: '/' },
      { name: 'Some', path: '/some' },
    ],
  },
  getters: {
    menuItems: (state) => state.menuItems,
  },
})
