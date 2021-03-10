<template>
  <div class="wrap">
     <div class="common-title">
       <div class="box">一般使用场景</div>
     </div>

      <div class="content">
        <div class="info">
         
          <div class="text"> 
            <div>
              全局接入一次后，会识别出溢出的文字，hover（默认触发时机为hover）的时候会在合适的位置展示内容
            </div>

             <img src="./images/4.png" alt="">
          </div>
        </div>

        <div class="example">
          <el-tag type="danger" class="ell-1 common-w" style="margin-bottom:30px;margin-right:20px;">{{ content }}{{content}}</el-tag>
          <el-tag type="danger" class="ell-2 common-w" style="margin-bottom:30px;margin-right:20px;">{{ content }}</el-tag> 
          <el-tag type="danger" class="ell-2 common-w" style="margin-bottom:30px;margin-right:20px;">{{ content }}</el-tag> 
          <el-tag type="danger" class="ell-3 common-w" style="margin-bottom:30px;margin-right:20px;">{{ content }}</el-tag>
          <el-tag type="danger" class="ell-3 common-w" style="margin-bottom:30px;margin-right:20px;">不超出默认不展示</el-tag>
        </div>
      </div>


       <div class="content" style="margin-top:50px;">
        <div class="info">
         
          <div class="text"> 
            <div>
              在dom元素上往data-tip写入你想展示的文本内容
            </div>

             <img src="./images/3.png" alt="">
          </div>
        </div>

        <div class="example">
          
          <div class="text show">

            <!-- 在dom元素上往data-tip写入你想展示的值 -->
            <i class="el-icon-edit" data-tip="编辑"></i>

            <i class="el-icon-delete-solid" data-tip="删除"></i>

            <i class="el-icon-success" data-tip="确认" ></i>

          </div>
        </div>
      </div>

      <div style="display:flex;justify-content: center;margin-top:30px;">
        <div  class="button2" id="demo" ref="go" @click.once="next">next</div>
      </div>

      
    
  </div>
</template>

<script>


// 简单使用， 两行代码全局接入即可
import EasyTip from 'easy-tip';

const easyTip  = new EasyTip();

easyTip.init();

export default {
  name: 'Demo',
  data() {
    return {
        content: '还有很多很多的文本内容,还有很多很多的文本内容,还有很多很多的文本内容,还有很多很多的文本内容,还有很多很多的文本内容,还有很多很多的文本内容,还有很多很多的文本内容,还有很多很多本内容',
        firStep: false,
        easyTip2: null,
        easyTip3: null,
        flag: false,
        easyTip: null,
    }
  },


  created() {
    
  },

  mounted() {
        console.log(123);

    
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

.test22{
  background: transparent;
}

</style>
