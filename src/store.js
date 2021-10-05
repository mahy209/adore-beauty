import Vue from 'vue';
import Vuex from 'vuex';
// import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    infoPage:[],
    cartItems:[],
    items: [
      {
        id:0,
        img: require('@/assets/pro (1).jpg'),
        title: 'serum 1',
        price: 150,
        color: 'blue',
        type: 'serum'
      }, {
        id:1,
        img: require('@/assets/pro (2).jpg'),
        title: 'mask 1',
        price: 230,
        color: 'white',
        type: 'masks'
      }, {
        id:2,
        img: require('@/assets/pro (3).jpg'),
        title: 'package 1',
        price: 360,
        color: 'blue',
        type: 'package'
      }, {
        id:3,
        img: require('@/assets/pro (4).jpg'),
        title: 'package 2',
        price: 500,
        color: 'white',
        type: 'package'
      }, {
        id:4,
        img: require('@/assets/pro (5).jpg'),
        title: 'package 3',
        price: 240,
        color: 'white',
        type: 'package'
      }, {
        id:5,
        img: require('@/assets/pro (6).jpg'),
        title: 'serum 2',
        price: 100,
        color: 'red',
        type: 'serum'
      }, {
        id:6,
        img: require('@/assets/pro (7).jpg'),
        title: 'mask 2',
        price: 500,
        color: 'red',
        type: 'masks'
      }, {
        id:7,
        img: require('@/assets/pro (21).jpg'),
        title: 'make up 1',
        price: 80,
        color: 'red',
        type: 'makeUp'
      },
      {
        id:8,
        img: require('@/assets/pro (9).jpg'),
        title: 'mask 3',
        price: 390,
        color: 'white',
        type: 'masks'
      },
      {
        id:9,
        img: require('@/assets/pro (10).jpg'),
        title: 'mask 4',
        price: 750,
        color: 'blue',
        type: 'masks'
      },
      {
        id:10,
        img: require('@/assets/pro (11).jpg'),
        title: 'mask 5',
        price: 45,
        color: 'white',
        type: 'masks'
      },
      {
        id:11,
        img: require('@/assets/pro (12).jpg'),
        title: 'serum 3',
        price: 150,
        color: 'red',
        type: 'serum'
      },
      {
        id:12,
        img: require('@/assets/pro (13).jpg'),
        title: 'serum 4',
        price: 750,
        color: 'blue',
        type: 'serum'
      },
      {
        id:13,
        img: require('@/assets/pro (14).jpg'),
        title: 'serum 5',
        price: 400,
        color: 'white',
        type: 'serum'
      },
      {
        id:14,
        img: require('@/assets/pro (18).jpg'),
        title: 'serum 6',
        price: 305,
        color: 'white',
        type: 'serum'
      },
      {
        id:14,
        img: require('@/assets/pro (19).jpg'),
        title: 'serum 7',
        price: 600,
        color: 'blue',
        type: 'serum'
      },
      {
        id:14,
        img: require('@/assets/pro (20).jpg'),
        title: 'serum 8',
        price: 800,
        color: 'red',
        type: 'serum'
      }
    ]
  },
  // plugins: [createPersistedState()],
  getters: {
    itemsNumber(state){  // Cart Component
      return state.cartItems.length
    },
    totalPrice(state) { // Cart Component
      if (state.cartItems.length != 0){
       return state.cartItems.reduce((a, b) => {
         return (b.price == null ) ? a : a + b.price
       }, 0)
      }
    },
    infoLength(state) { // Info Component
      if(state.infoPage.length > 0) {
        return state.infoPage.splice(0, 1)
      }
    }
  },
  mutations: {
    inCart(state, n) { // Cart Component
      return state.cartItems.push(n)
    },
    outCart(state, n) { // Cart Component
      let index = state.cartItems.findIndex(x => x.id === n)
      return state.cartItems.splice(index, 1)
    },
    addtoInfo(state, n) { // Info Component
       return state.infoPage.push(n)
    }
  },
})
