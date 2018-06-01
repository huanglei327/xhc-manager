import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/index'
import ProductManger from '@/views/product/productManger'
import Text from '@/views/text'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: '首页',
      component: Index
    }, {
      path: '/ProductManger',
      name: '商品类型添加',
      component: ProductManger
    }, {
      path: '/Text',
      name: '测试',
      component: Text
    }
  ]
})
