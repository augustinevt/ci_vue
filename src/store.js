import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    testString: 'Hello World',
    systemRunValue: false,
  },
  mutations: {
    TOGGLE_SYSTEM_RUN_STATE: (state) => {
      // console.log('Mutation action')

      state.systemRunValue = !state.systemRunValue
    }
  },
  actions: {
    toggleSystemRunState: (context) => {
      context.commit("TOGGLE_SYSTEM_RUN_STATE")
    }
  }
})
