// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import verify from "vue-verify-plugin";
import './assets/css/common.css'
import {post,fetch,patch,put} from './utils/http'
import * as validate_ from './utils/validate'//引用文件
import store from './store/index'

import { Button, Collapse, CollapseItem, Cell, CellGroup, NavBar, Icon, AddressEdit, Field,Switch, Picker, Actionsheet, popup   } from 'vant'

Vue.use(Button).use(Collapse).use(CollapseItem).use(Cell).use(CellGroup).use(
  NavBar).use(Icon).use(AddressEdit).use(Field).use(Switch).use(Picker).use(
    Actionsheet).use(popup)
Vue.use(verify,{
      blur:true
});
Vue.config.productionTip = false
Vue.prototype.$http = axios
//定义全局变量
Vue.prototype.$post = post
Vue.prototype.$fetch = fetch
Vue.prototype.$patch = patch
Vue.prototype.$put = put
Vue.prototype.$checkVal = validate_

router.beforeEach((to, from, next) => {
  next()
})

router.afterEach((to, from, next) => {
  if(to.path === '/'){
    store.commit('getNavList', {'navtitle':to.name,'left_text':'','left_arrow':false})
  }
  else{
    store.commit('getNavList', {'navtitle':to.name,'left_text':'返回','left_arrow':true})
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
