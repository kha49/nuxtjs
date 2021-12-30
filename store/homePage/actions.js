import { types } from './state'
export default {
  async getAll ({ commit }) {
    commit(types.GET_ALL)
    try {
      const homepage = await this.$repo.home.getAll()
      if (homepage) {
        commit(types.GET_ALL_SUCCESS, homepage.data)
      }
    } catch (error) {
      commit(types.GET_ALL_FAIL, error)
    }
  }
}
