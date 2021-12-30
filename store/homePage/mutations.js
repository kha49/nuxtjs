import { types } from './state'
export default {
  [types.GET_ALL] (state) {
    state.homeData = []
  },

  [types.GET_ALL_SUCCESS] (state, response) {
    state.homeData = response
  },

  [types.GET_ALL_FAIL] (state) {
    state.homeData = []
  }
}
