import Vue from 'vue'
import App from './App'
import router from './router/router'
import './style/common.less'
import './config/rem'
import { store } from './store/data'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
})
