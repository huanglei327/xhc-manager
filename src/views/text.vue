<template>
 <div> 
  

  <div class="input-box clearFix">
		<div>
			<input v-model="age" v-verify="age" placeholder="age"/>
			<label class="fl" v-remind="age"></label>
		</div>
		<div>
			<input type="text" class="phoneIcon fl" placeholder="手机号码" v-model="regInfo.phone" v-verify="regInfo.phone">
            <label class="f1" >{{regInfo.phone}}</label>
			<label class="fl" v-remind="regInfo.phone"></label>
		</div>
		<button v-on:click="SaveProduct">提交</button>
	</div>
</div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
        age:"",
        regInfo: {
           phone: ""
        }        
    }
  },
  verify: {
    age:"required",
        regInfo: {
        phone: ["required","mobile"]
    }          
  },
  beforeCreate:function(){
      //this.$store.commit( 'getNavTitle','商品类型');
  },
  beforeMount: function () {
     
    //  this.$fetch('/api/Xhc_Product_Type/')
    //   .then((response) => {
    //     console.log(response)
    //   })
  },
  methods: {
    SaveProduct() {
     console.log(this.$verify.check()); 
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 
</style>
