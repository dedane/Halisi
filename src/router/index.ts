import Vue from 'vue'
import VueRouter from 'vue-router'
import SplashScreen from '../views/SplashScreen.vue'
import QrScan from '../views/QrScan.vue'
import landingpage from '../views/landingpage.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'SplashScreen',
    component: SplashScreen
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/QrScan',
    name: 'Qr',
    component: QrScan
  },
  {
    path: '/landingpage',
    name: 'landingpage',
    component: landingpage
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
  
})

export default router
