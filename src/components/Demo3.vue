<template>
  <div class="wrap">
     <div class="common-title">
       <div class="box">可自定义触发时机</div>
     </div>

      <div class="content">
        <div class="info">
         
          <div class="text" style="width:600px;">  
            <div>
              选择不同的触发时机,  配置triggerEvent：'mouse' | 'click' | 'select' , 默认mouse
            </div>

             <img src="./images/9.png" style="width:600px;" alt="">
          </div>
        </div>

        <div class="example">


          <div  style="margin:100px 0 0 30px;display: flex;flex-direction: column;align-items: flex-start;">

            <div id="hover" class="item">
              <el-tag type="danger" class="ell-1 common-w" >hover展示</el-tag>
            </div>

            <div id="select" class="item">
              <el-tag type="danger" class="ell-1 common-w">选择文本内容触发展示</el-tag>
            </div>

            <div id="click" class="item">
              <el-button type="primary" round>click展示</el-button>
            </div>

            <div id="click2" class="item">
              <el-button type="primary" icon="el-icon-edit" circle></el-button>
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
        content: '还有很多很多的文本内容,还有很多很多的文本内容,还有很多很多的文本内容,还有很多很多的文本内容,还有很多很多的文本内容,还有很多很多的文本内容,还有很多很多的文本内容,还有很多很多本内容',
        easyTip: null,
        easyTip1: null,
        easyTip2: null,
        easyTip3: null,
    }
  },

  mounted() {

    this.easyTip = new EasyTip({
      effectiveArea: document.getElementById('hover'), // 绑定上面的节点
      custom: {
        contentRender: (str) => str
      },
      triggerEvent: 'mouse',
    });

    this.easyTip1 = new EasyTip({
      effectiveArea: document.getElementById('click'), // 绑定上面的节点
      custom: {
        contentRender: () => `<div>
          <input style="width:160px;margin-right:12px;" />
          <button style="width:60px;">确定</button>
        </div>`
      },
      triggerEvent: 'click',
    });

    this.easyTip2 = new EasyTip({
      effectiveArea: document.getElementById('select'), // 绑定上面的节点
      triggerEvent: 'select',
      // custom: {
      //   contentRender: (str) => str // 可以自定义展示内容，默认为选中内容
      // },
    });

    this.easyTip.init();
    this.easyTip1.init();
    this.easyTip2.init();

    this.easyTip3 = new EasyTip({
      effectiveArea: document.getElementById('click2'), // 绑定上面的节点
      triggerEvent: 'click',
      custom: {
        contentRender: (str) => `<div style="font-size:69px;"><i class="el-icon-shopping-cart-2"/> </div>`
      },
      customStyle: {
        wrap: {
          background: '#409EFF',
          color: '#fff',
          boxShadow: "0px 1px 10px pink",
          borderRadius: "50%",
          width: '100px',
          height: '100px',
          padding: "10px 10px 10px 30px",
        },
        triangle: {
          background: '#409EFF',
        }
      }
    });
    this.easyTip3.init();
  },

  destroyed() {
    this.easyTip.destroy();
    this.easyTip1.destroy();
    this.easyTip2.destroy();
    this.easyTip3.destroy();
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

.item{
  display: flex;
  margin-bottom: 20px;
}

</style>
