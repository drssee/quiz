import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import moment from 'moment'
import 'moment/locale/ko'
import axios from 'axios'
import router from "@/router";

Vue.config.productionTip = false
Vue.prototype.$moment = moment;
Vue.prototype.$axios = axios;

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
