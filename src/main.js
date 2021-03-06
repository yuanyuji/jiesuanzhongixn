// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '../static/reset.css'
import '../static/icon/iconfont.css'
import '../static/common.css'
import iView from 'iview';
import 'iview/dist/styles/iview.css';
// import mock from './mock/mock.js'
import { store } from './store/store.js';
// mock.bootstrap()
Vue.config.productionTip = false
Vue.use(iView);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
