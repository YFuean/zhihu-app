import Vue from 'vue'
import VueRouter from 'vue-router'
import Nav from '../views/Nav.vue'
import Home from '../views/Home.vue'
import Explore from '../views/Explore.vue'
import Special from '../views/Special.vue'
import Recommoned from '../views/Recommoned.vue'
import Follow from '../views/Follow.vue'
import Hot from '../views/Hot.vue'
import QuestionWaiting from '../views/QuestionWaiting.vue'
import Login from '../views/Login.vue'
import RoundTable from '../views/RoundTable.vue'
import Favorite from '../views/Favorite.vue'
import zhuanlan from '../views/ZhuanLan'
import Columns from '../views/Columns.vue'
import People from '../views/People.vue'
Vue.use(VueRouter)

const routes = [
 // 这两个为顶层路由,都拥有整个浏览器大小的布局自由度
 {
    path: '/',
    component: Nav,
 	children:[{
 		path: '/',
 		redirect: 'home'
 	},
 	{
 		path: 'home',
 		component: () => import('../views/Home.vue'),
 		// 跟home有关的一组子路由,点哪个显示哪个
 		children: [
 			{
 				// 直接定向到推荐,默认显示
 				path: '/',
 				redirect: 'recommoned'
 			},
 			{
 				path: 'recommoned',
 				component: () => import('../views/Recommoned.vue')
 			},
 			{
 				path: 'follow',
 				component: () => import('../views/Follow.vue')
 			},
 			{
 				path: 'hot',
 				component: () => import('../views/Hot.vue')
 			}
 		]
 	},
 	{
 		path: 'explore',
 		component: () => import('../views/Explore.vue')
 	},
 	{
 		path: 'special/all',
 		component: () => import('../views/Special.vue')
 	},
	{
		path: 'roundtable/all',
		component: () => import('../views/RoundTable.vue')
	},
	{
		path: 'favorite/all',
		component: () => import('../views/Favorite.vue')
	},
 	{
 		path: 'question/waiting',
 		component: () => import('../views/QuestionWaiting.vue')
 	},
	{
		path: 'recommoned',
		component: () => import('../views/Recommoned.vue')
		}
 	]
 },
 {
	 path:'/zhuanlan',
	 component:zhuanlan,
	 children:[{
		path: '/',
		redirect: 'columns/random'
	 },
	 {
		path: 'columns/random',
		component: () => import('../views/Columns.vue')
	}]
 },
 {
	 path:'/people',
	 component: People
 },
 {
   path: '/login',
   component: Login
 }
]

const router = new VueRouter({
  routes
})

export default router
