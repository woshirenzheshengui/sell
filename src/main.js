// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'

import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/zh-CN'
import App from './App'
import router from './router'
import axios from 'axios'

Vue.prototype.$axios = axios
Vue.use(ElementUI, { locale })
//注册全局守卫
router.beforeEach((to, from, next) => {
 
  if (to.meta.requireAuth) {
    if (window.sessionStorage.getItem('myid')) {
      next();
    } else {
      next({
        path: '/login',
        query: {redirect: to.fullPath}
      })
    }
  } else {
    next();
  }

});
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({

  el: '#app',

  router,
  components: { App },
  template: '<App/>'
})
