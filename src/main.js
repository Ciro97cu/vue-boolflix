import Vue from 'vue'
import App from './App.vue'
import axios from "axios";
import { api } from "./api.js";

import { library } from '@fortawesome/fontawesome-svg-core'

import { faStar as fasol } from '@fortawesome/free-solid-svg-icons'
import { faStar as fareg } from '@fortawesome/free-regular-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(fasol, fareg)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.prototype.$axios = axios;
Vue.prototype.$api = api;

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
