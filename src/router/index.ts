import Vue from 'vue'
import VueRouter from 'vue-router' 
import QrScan from '../views/QrScan.vue'
import landingpage from '../views/landingpage.vue'
import SignUp from '../views/SignUp.vue'
import Login from '../views/Login.vue'
import Profile from '../views/profile.vue'
import Product from '../views/Product.vue'
import Company from '../views/company signUp.vue'

Vue.use(VueRouter)

const routes = [
 
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
    path: '/',
    name: 'landingpage',
    component: landingpage
  },
  {
    path: '/SignUp',
    name: 'SignUp',
    component: SignUp
  },
  {
    path: '/Profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/Login',
    name: 'Login',
    component: Login
  },
  {
    path: '/Product',
    name: 'Product',
    component: Product

  },
  {
    path: '/Company',
    name: 'Company',
    component: Company

  }
]

const router = new VueRouter({
  mode: 'history',
  routes
  
})

export default router
