<template>
  <div class="index">
    <router-link to="/Text">
     <button class="btn btn-default">点击跳转</button>
</router-link>
  <div class="index-hd">
     <img class="kind-list-img" src="../assets/images/form.png"/>
    <div class="index-desc">欢迎光临购乐坊管理后台</div>
  </div>
  <div class="index-bd">
    <div class="kind-list">
       <div class="kind-list-item"  v-for="item in list" :key="item.id">
          <div  v-on:click="kindToggle(item.id)"  :class="{ 'kind-list-item-hd': item.status, 'kind-list-item-hd-show': item.open }">
            <div class="kind-list-text" >{{item.name}}</div>
             <img class="kind-list-img" :src="item.src"/>
          </div>
          <div :class="{ 'kind-list-item-bd': item.status, 'kind-list-item-bd-show': item.open }">
            <div :class="{'navigator-box': item.status, 'navigator-box-show': item.open} ">
               <van-cell-group v-for=" page in  item.pages" :key="page">
                  <router-link to="/ProductManger">
                    <van-cell :title="page" is-link />
                  </router-link>
                </van-cell-group>
            </div>
          </div>
      </div>
    </div>
  </div>
  
</div>
</template>

<script>
import view from '../assets/images/view.png'
import content from '../assets/images/content.png'
import form from '../assets/images/form.png'
import nav from '../assets/images/nav.png'
import media from '../assets/images/media.png'
import map from '../assets/images/map.png'
import canvas from '../assets/images/canvas.png'
 import {mapGetters, mapActions} from 'vuex';
export default {
  name: 'HelloWorld',
  data () {
    return {
      list: [
        {
          id: 'view',
          name: '商品类型管理',
          open: false,
          status: true,
          src: view,
          pages: ['商品类型查询', '商品类型添加']
        }, {
          id: 'content',
          name: '基础内容',
          open: false,
          status: true,
          src: content,
          pages: ['text', 'icon', 'progress']
        }, {
          id: 'form',
          name: '表单组件',
          open: false,
          status: true,
          src: form,
          pages: ['button', 'checkbox', 'form', 'input', 'label', 'picker', 'radio', 'slider', 'switch', 'textarea']
        }, {
          id: 'nav',
          name: '导航',
          open: false,
          status: true,
          src: nav,
          pages: ['navigator']
        }, {
          id: 'media',
          name: '媒体组件',
          open: false,
          status: true,
          src: media,
          pages: ['image', 'audio', 'video']
        }, {
          id: 'map',
          name: '地图',
          status: true,
          src: map,
          pages: ['map']
        }, {
          id: 'canvas',
          name: '画布',
          status: true,
          src: canvas,
          pages: ['canvas']
        }
      ]
    }
  },
  computed: {...mapGetters(['msg'])},  //对应getters.技术中的msg
  methods: {
    kindToggle: function (id) {
      console.log(id)
      let list = this.list 
      for (var i = 0; i < list.length; i++) {
        console.log(list[i].id)
        if (list[i].id == id) {
          list[i].open = !list[i].open
        } else {
          list[i].open = false
        }
      }
      this.list = list
      console.log(this.list)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
