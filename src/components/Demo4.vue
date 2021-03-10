<template>
  <div class="wrap">
     <div class="common-title">
       <div class="box">Api调用</div>
     </div>

      <div class="content">
        <div class="info">
         
          <div class="text" style="width:600px;">  
            <div>
              取消默认的触发时机,  配置triggerEvent：'none', 通过display展开，hide隐藏
            </div>

             <img src="./images/11.png" style="width:600px;" alt="">
          </div>
        </div>

        <div class="example">


          <div  style="margin:100px 0 0 30px;">

            <div id="demo" class="item">
              <el-tag type="danger" class="ell-1 common-w" >通过Api调用展示我</el-tag>
            </div>

         
            <div id="click" class="item">
              <el-button type="primary" round @click="show">展示开关</el-button>
            </div>

          </div>
          
        </div>
      </div>


      <div style="display:flex;justify-content: center;margin-top:30px;">
        <div  class="button2" ref="go" @click.once="next">next</div>
      </div>

      
    
  </div>
</template>

<script>
import EasyTip from './index'



export default {
  name: 'Demo',
  data() {
    return {
      easyTip: null,
      flag: true
    }
  },

  mounted() {

    this.easyTip = new EasyTip({
      effectiveArea: document.getElementById('demo'), // 绑定上面的节点
      triggerEvent: 'none', // 取消默认的hover展示
      custom: {
        contentRender: (str) => `<div style="font-size:80px;text-indent:0px;">
        <i class="el-icon-location-outline"/> </div>`
      },
      customStyle: {
        wrap: {
          background: '#f35626',
          color: '#fff',
          boxShadow: "0px 1px 10px pink",
          borderRadius: "50%",
          width: '100px',
          height: '100px',
          padding: "10px 10px 10px 30px",
        },
        triangle: {
          background: '#f35626',
        }
      }
    });
    this.easyTip.init();

  },

  destroyed() {
    this.easyTip.destroy();
  },

  methods: {
    next() {
      this.$emit('next')
    },
    show() {
      if(this.flag) {
        this.easyTip.display();
        this.flag = false
        return
      }
      this.easyTip.hide();
      this.flag = true;      
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>



.left-1 {
  position: absolute;
  left: 20px;
  top: 20px;
  width: 200px;
}

.right-1{
  position: absolute;
  right: 20px;
  top: 20px;
  width: 200px;
}

.top-1{
   position: absolute;
   left: 50%;
   transform: translateX(-50%);
   top: 20px;
   width: 200px;
}


.bottom-1{
  position: absolute;
  left: 50%;
  bottom: 20px;
  width: 200px;
  transform: translateX(-50%);
}

.center{
  display: flex;
  justify-content: space-around;
  width: 100%;
}

.center-1 {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 200px;
}

.custom-1{
  position: absolute;
  top: 70%;
  left: 50%;
}

.show{
  display: flex;
  width: 300px;
  font-size: 22px;
  justify-content: space-around;
}

.item{
  display: flex;
  margin-bottom: 20px;
}

</style>
