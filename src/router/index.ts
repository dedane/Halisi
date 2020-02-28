import Vue from 'vue'
import VueRouter from 'vue-router'
import SplashScreen from '../views/SplashScreen.vue'
import QrScan from '../views/QrScan.vue'
import landingpage from '../views/landingpage.vue'
import SignUp from '../views/SignUp.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'SplashScreen',
    component: SplashScreen
  },
  {
    path: '/Registration',
    name: 'Registration',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Registration.vue')
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
  },
  {
    path: '/SignUp',
    name: 'SignUp',
    component: SignUp
  },
]

const router = new VueRouter({
  mode: 'history',
  routes
  
})

export default router
