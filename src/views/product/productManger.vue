<template>
 <div> 
   <van-cell-group>
      <van-field
        v-model="product.item_name"
        label="商品类型"
        icon="clear"
        placeholder="请输入商品类型"
        required
        @click-icon="product.item_name = ''"
        :error-message="product.item_name_err"
      />
      <div class="van-cell van-hairline van-field van-field--has-icon">
        <div class="van-cell__title">
          <span>所属类型</span>
        </div>
        <div class="van-cell__value">
          <div @click="pikshow" class="text-align-l">{{product.p_name}}</div>
         </div>
      </div>
      <div class="van-cell van-hairline van-field van-field--has-icon">
        <div class="van-cell__title">
          <span>是否启用</span>
        </div>
        <div class="van-cell__value">
          <van-switch v-model="product.isenabled" />
         </div>
      </div>
   
  </van-cell-group>
  <van-popup v-model="show" position="bottom">
    <van-picker :columns="columns"  @cancel="pikshow" @confirm="onChange" confirm-button-text="确定"  cancel-button-text="取消" show-toolbar />
  </van-popup>
  <div class="div-btn">
      <van-button size="large" type="primary" @click="SaveProduct">提交</van-button>
  </div>



 
  <div class="input-box clearFix">
		<div>
			<input v-model="age" v-verify="age" placeholder="age"/>
			<label class="fl" v-remind="age"></label>
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
      msg: 'Welcome to Your Vue.js App',
      product:{
        p_id: '',
        p_name: '请选择',
        item_name:'',
        item_img:'',
        isenabled: true,
        isoder: 0,
        item_name_err:''
      },
      age:"",
      columns: [
        { text: '杭州', value:'1', disabled: true },
        { text: '宁波', value:'2' },
        { text: '温州', value:'3' }
      ],
      show: false,
    }
  },
  verify: {
    item_name: "required"
  },
  methods: {
    onChange(picker, value, index) {
       this.product.p_id = picker.value
       this.product.p_name = picker.text
       this.show = !this.show
    },
    pikshow() {
        this.show = !this.show
    },
    SaveProduct() {
      console.log(this.$verify.check()); 
      //  if(this.product.item_name === '')
      //  {
      //    this.product.item_name_err = '请输入商品类型'
      //  }
      //   console.log(this.$checkVal.validateNull(this.product.item_name))
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 
</style>
