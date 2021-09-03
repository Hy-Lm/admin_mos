import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
	  userList:{},
	  count:1,
	  showPost:false,
	  
  },
  mutations: {
	  add_mutation(){
	  		state.count++
	  	},
  },
  actions: {
	  add({commit}){
	  		commit('add_mutation')
	  	},
  },
  modules: {
	  
  }
})
