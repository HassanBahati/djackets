import { createStore } from 'vuex'

export default createStore({
  // state-variable for informations 
  state: {
    cart: {
      items: [],
    },
    isAuthenticated: false,
    token: '',
    isLoaded: false
  },
  // anchroynous for the states becuase we cant just change them directly 
  mutations: {
  },
  // asncy func to change state 
  actions: {
  },
  modules: {
  }
})
