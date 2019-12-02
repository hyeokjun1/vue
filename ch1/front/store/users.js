export const state = () => ({
    me: null, // 로그인 안한 상태
})

// 동기적 작업 / 비동기 작업이 있으면 안된다. setTimeout, promiss, axios 등
export const mutations = { 
    setMe(state, payload) {
        state.me = payload;
    },
}
// 비동기적 작업 또는 복합적인 작업 / context = { commit, dispatch, state, rootState, getters, rootGetters }
export const actions = { 
    signUp({ commit }, payload) {
        commit('setMe', payload)
    },
    logIn({ commit }, payload) {
        commit('setMe', payload)
    },
    logOut({ commit }, payload) {
        commit('setMe', payload)
    },
}
