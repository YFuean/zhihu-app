import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)


export default new Vuex.Store({
	state: {
		token: '123456789',
		baseUrl: 'http://localhost:8080/api',
		user: {
			id: 1,
			nickname: '派大星',
			avatar: 'https://public-cdn-oss.mosoteach.cn/avatar/2018/BD/78ad5f1737d80986b420a23fb07d530c.jpg?v=1551849938&x-oss-process=style/s200x200'
		}
	},
	mutations: {
		setToken(state, data) {
			state.token = data;
		},
		setUser(state, data) {
			state.user = data;
		}
	},
	actions: {},
	modules: {}
})
