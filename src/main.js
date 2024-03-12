import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import api from './http/index.js'

Vue.config.productionTip = false

Vue.use(ElementUI);
Vue.use(api)

new Vue({
  el:'#app',
  router,
  store,
  render: h => h(App)
});
