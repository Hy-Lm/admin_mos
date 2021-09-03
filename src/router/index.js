import Vue from 'vue'
import VueRouter from 'vue-router'
import login from "../views/login/login.vue"

Vue.use(VueRouter)

// const router = [
// 	{
// 	  path: '/',
// 	  name: 'login',
// 	  component:login
// 	},
//   {
//     path: '/home/home',
//     name: 'Home',
//     component: function () {
//       return import(/* webpackChunkName: "about" */ '../views/home/home.vue')
//     }
//   },
 
//   {
//     path: '/user/user',
//     name: 'user',
//     // route level code-splitting
//     // this generates a separate chunk (about.[hash].js) for this route
//     // which is lazy-loaded when the route is visited.
//     component: function () {
//       return import(/* webpackChunkName: "about" */ '../views/user/user.vue')
//     }
//   },
//   {
//     path: '/login/login',
//     name: 'login',
//     // route level code-splitting
//     // this generates a separate chunk (about.[hash].js) for this route
//     // which is lazy-loaded when the route is visited.
//     component: function () {
//       return import(/* webpackChunkName: "about" */ '../views/login/login.vue')
//     }
//   }
// ]

const router=new VueRouter({
  routes: [
    {
      path: '/',
      name: 'login',
      component: resolve => require(['@/views/login/login'], resolve),
    },
   {
	   path: '/user/user',
	   name: 'user',
	   component: resolve => require(['@/views/user/user'], resolve),
   },
   {
     path: '/home/home',
     name: 'Home',
     component: resolve => require(['@/views/home/home'], resolve),
   }
    
  ]
})
router.beforeEach((to,from,next)=>{
  console.log('beforeEach',to,from)
  console.log(to.fullPath)
  // console.log("即将退出",from)
  // next()
  if(to.fullPath!='/'){//如果不是登录组件
  console.log(sessionStorage.getItem('user'),"-+=")
    if(!sessionStorage.getItem('user') && sessionStorage.getItem('user')==""){//如果没有登录就进入登录
      next('/')
    }else{
      next()
    }
  }{
    next()
  }
})


export default router
