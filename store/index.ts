type globalState = {
  currentPage: string[]
}

export const state: any = (): globalState => ({
  currentPage: ['home'],
})

export const mutations = {
  SET_currentPage(state: globalState, newPage: string[]) {
    state.currentPage = newPage
  },
}
