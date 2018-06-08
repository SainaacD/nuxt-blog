export const state = () => ({
  choose: 0
})

export const mutations = {
  change (state, index) {
    state.choose = index
  }
}
