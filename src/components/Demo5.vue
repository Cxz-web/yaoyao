<template>
  <div class="wrap">
    
    
    <div id="demo">
      <el-button type="danger" round @click="go">点击跳转文档页，来接入吧～</el-button>
    </div>

    
      
    
  </div>
</template>

<script>



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
      custom: {
        contentRender: (str) => `<div style="font-size:20px;padding-left:14px;">  
          <div style="margin-top:30px;">感谢</div>
          <div>看完这里！！</div>
          <div>
            <i class="el-icon-coffee-cup" ></i>
            <i class="el-icon-coffee-cup" ></i>
            <i class="el-icon-coffee-cup" ></i>
            <i class="el-icon-coffee-cup" ></i>
          </div>
        
        </div>`
      },
      customStyle: {
        wrap: {
          background: '#f35626',
          color: '#fff',
          boxShadow: "0px 1px 10px pink",
          borderRadius: "50%",
          width: '150px',
          height: '150px',
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
    go() {
      window.open("https://github.com/Cxz-web/easy-tip/tree/main")
    },
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

.wrap{
  display: flex;
  align-items: center;
  justify-content: center;
}

</style>
