import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//import VueQrcodeReader from 'vue-qrcode-reader';
import Vuetify from 'vuetify';
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import 'vuetify/dist/vuetify.min.css'
import vuetify from './plugins/vuetify';
import firebase from 'firebase'



var firebaseConfig = {
  apiKey: "AIzaSyDEUPW7yZRXeEg6VjwAxYLKAdB9s3wzAQc",
  authDomain: "halisi-7f68e.firebaseapp.com",
  databaseURL: "https://halisi-7f68e.firebaseio.com",
  projectId: "halisi-7f68e",
  storageBucket: "halisi-7f68e.appspot.com",
  messagingSenderId: "1083623916105",
  appId: "1:1083623916105:web:d83553bf25ae278d1d7598"
};

Vue.config.productionTip = false
//Vue.use(VueQrcodeReader);
Vue.use(Vuetify);
firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
