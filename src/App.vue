<template>
  <div id="app">
    <van-nav-bar
        :title="navtitle"
        :left-text="left_text"
        :left-arrow="left_arrow"
        fixed
        @click-left="onClickLeft"
        @click-right="onClickRight"
    />
    <router-view/>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
export default {
  name: 'App',
  data (){
    return {
      
    }
  },
  computed: {...mapGetters(['navtitle','left_arrow','left_text'])},
  methods :{
    onClickLeft: function () {
      console.log(this.navtitle)
       //if(this.navtitle === '首页')
        this.$router.go(-1)
    },
    onClickRight: function() {
        console.log('onClickRight-')
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 47px;
}
</style>
