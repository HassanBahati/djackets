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
    // adding funtinality to add to cart 
    // func to store items in local browser storage 
    initializeStore(state){
      if (localStorage.getItem('cart')){
        state.cart = JSON.parse(localStorage.getItem('cart'))
      }else{
        // if item doesnt exist in ls create it 
        localStorage.setItem('cart', JSON.stringify(state.cart))
      }
    },
    addToCart(state, item){
      // var to help check if it exists 
      const exists = state.cart.items.filter(i => i.product.id === item.product.id)

      // if length is larger than 0 then item exists in cart       
      if(exists.length){ 
        exists[0].quantity = parseInt(exists[0].quantity) + parseInt(item.quantity)
      }else{
        // if doesnt exist add it 
        state.cart.items.push(item)
      }

      // when browser is refreshed restor default cart 
      localStorage.setItem('cart', JSON.stringify(state.cart))
    },
  },
  // asncy func to change state 
  actions: {
  },
  modules: {
  }
})
