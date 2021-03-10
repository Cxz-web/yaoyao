<template>
  <div class="wrap">
     <div class="common-title">
       <div class="box">自定义使用场景</div>
     </div>

      <div class="content">
        <div class="info">
         
          <div class="text" style="width:600px;">  
            <div>
              自定义渲染内容以及样式
            </div>

             <img src="./images/7.png" style="width:600px;" alt="">
          </div>
        </div>

        <div class="example">


          <div id="demo" style="margin:100px 0 0 30px;">
            <el-tag type="danger" class="ell-1 common-w">自定义渲染内容</el-tag>
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
        content: '还有很多很多的文本内容,还有很多很多的文本内容,还有很多很多的文本内容,还有很多很多的文本内容,还有很多很多的文本内容,还有很多很多的文本内容,还有很多很多的文本内容,还有很多很多本内容',
    }
  },

  mounted() {
    // 自定义渲染内容和样式
    const easyTip = new EasyTip({
      effectiveArea: document.getElementById('demo'), // 绑定上面的节点
      customStyle: {
        wrap: {
          background: '#f35626',
          color: '#fff',
          boxShadow: "0px 1px 10px black",
          borderRadius: "30px",
          maxWidth: '500px',
          width: '220px',
          padding: "10px 10px 10px 30px",
        },
        triangle: {
          background: '#f35626',
        }
      },
      custom: {
        contentRender: (content, wrapEl) => `
        <div>
          <div>原本的内容参数：${content}</div>
          <div>随意渲染........</div>
            <i class="el-icon-star-off"/> 
            <i class="el-icon-thumb"/> 
            <i class="el-icon-present"/> 
            <i class="el-icon-shopping-cart-2"/> 
            <i class="el-icon-magic-stick"/> 
            <i class="el-icon-headset"/> 
            <i class="el-icon-umbrella"/> 
            <i class="el-icon-star-off"/> 
        </div>`
      }
    });

    easyTip.init()
  },

 

  methods: {
    next() {
      this.$emit('next')
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

</style>
