import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//import VueQrcodeReader from 'vue-qrcode-reader';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css'
import vuetify from './plugins/vuetify';


Vue.config.productionTip = false
//Vue.use(VueQrcodeReader);
Vue.use(Vuetify);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
