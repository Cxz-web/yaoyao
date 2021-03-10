<template>
  <div class="wrap">
     <div class="common-title">文字展示场景</div>

      <div class="content">
        <div class="info">
         
          <div class="text"> 
            <div>
              1.全局接入一次后，会识别出溢出的文字，hover（默认触发时机为hover）的时候会在合适的位置展示内容
            </div>

            <div>
              2.你也可以展示自己想要的文字
            </div>
             <img src="./images/2.jpg" alt="">
          </div>
        </div>

        <div class="example">
          
          <el-tag type="danger" class="ell-1 common-w" style="margin-bottom:30px;margin-right:20px;">{{ content }}{{content}}</el-tag>
          <el-tag type="danger" class="ell-2 common-w" style="margin-bottom:30px;margin-right:20px;">{{ content }}</el-tag> 
          <el-tag type="danger" class="ell-2 common-w" style="margin-bottom:30px;margin-right:20px;">{{ content }}</el-tag> 
          <el-tag type="danger" class="ell-3 common-w" style="margin-bottom:30px;margin-right:20px;">{{ content }}</el-tag>
          <el-tag type="danger" class="ell-3 common-w" style="margin-bottom:30px;margin-right:20px;">不超出默认不展示</el-tag>

          <!-- <el-tag type="danger" class="ell-2 common-w" style="margin-bottom:30px;" data-tip="test">{{ content }}</el-tag>        -->
          <!-- <div class="text show">
            <i class="el-icon-edit"></i>
            <i class="el-icon-delete-solid"></i>
             <i class="el-icon-success"></i>
          </div> -->
        </div>
      </div>


       <div class="content">
        <div class="info">
         
          <div class="text"> 
            <div>
              1.全局接入一次后，会识别出溢出的文字，hover（默认触发时机为hover）的时候会在合适的位置展示内容
            </div>

            <div>
              2.你也可以展示自己想要的文字
            </div>
             <img src="./images/2.jpg" alt="">
          </div>
        </div>

        <div class="example">
          
          <el-tag type="danger" class="ell-1 common-w" style="margin-bottom:30px;margin-right:20px;">{{ content }}{{content}}</el-tag>
          <el-tag type="danger" class="ell-2 common-w" style="margin-bottom:30px;margin-right:20px;">{{ content }}</el-tag> 
          <el-tag type="danger" class="ell-2 common-w" style="margin-bottom:30px;margin-right:20px;">{{ content }}</el-tag> 
          <el-tag type="danger" class="ell-3 common-w" style="margin-bottom:30px;margin-right:20px;">{{ content }}</el-tag>
          <el-tag type="danger" class="ell-3 common-w" style="margin-bottom:30px;margin-right:20px;">不超出默认不展示</el-tag>

          <!-- <el-tag type="danger" class="ell-2 common-w" style="margin-bottom:30px;" data-tip="test">{{ content }}</el-tag>        -->
          <!-- <div class="text show">
            <i class="el-icon-edit"></i>
            <i class="el-icon-delete-solid"></i>
             <i class="el-icon-success"></i>
          </div> -->
        </div>
      </div>

<!-- 
      <el-tag type="danger" class="ell-1 common-w p" style="left:10px;top:10px;">{{ content }}</el-tag> 

      <el-tag type="danger" class="ell-1 common-w p" style="left:10px;bottom:10px;">{{ content }}</el-tag> 

      <el-tag type="danger" class="ell-1 common-w p" style="right:10px;top:10px;">{{ content }}</el-tag> 

      <el-tag type="danger" class="ell-1 common-w p" style="right:10px;bottom:10px;">{{ content }}</el-tag>  -->
    
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
        flag: false
    }
  },

  props: {
    msg: String
  },


  created() {
    easyTip.init();
  },

  mounted() {

    this.easyTip2  = new window.EasyTip({
      effectiveArea: this.$refs.go, 
        direction: 'horizontal',

      customStyle: {
        wrap: {
          backgroundColor: '#f56c6c',
          fontSize: "16px",
          borderRadius: '6px'
        },
        triangle: {
          backgroundColor: '#f56c6c'
        },
      },
      custom : {
        contentRender: () => `<i class="el-icon-star-off"/> <i class="el-icon-star-off"/> <i class="el-icon-star-off"/> 一起看看效果 <i class="el-icon-star-off"></i> <i class="el-icon-star-off"></i> <i class="el-icon-star-off"></i> `
      }
     });

     this.easyTip2.init();

     
  },

  methods: {
    change() {
      if(!this.flag) {
        this.easyTip3.display();
      } else {
        this.easyTip3.hide();
      }

      this.flag = !this.flag;
      
    },
    go() {
        this.easyTip2.destroy();
         const el = document.createElement('div');
          el.innerHTML =`
            <div>
            <i class="el-icon-moon"></i>
            </div>
          `

      this.firStep = true;
      this.easyTip3  = new window.EasyTip({
        effectiveArea: this.$refs.test,
          direction: 'horizontal',

        customStyle: {
          wrap: {
            backgroundColor: '#f56c6c',
            fontSize: "80px",
            width:"100px",
            borderRadius: '20%',
            textAlign: 'center',
            maxWidth: '100px',
          },
            triangle: {
              backgroundColor: '#f56c6c'
            },
          },
        custom : {
          contentRender: () => el
        }
      });
      this.easyTip3.init();

      const easyTip4 = new window.EasyTip({
          direction: 'horizontal',

        effectiveArea: this.$refs.test2,
        custom : {
          contentRender: () => `
          <div>
          <input/>
          <button>确认</button>
          </div>`
        }
      })

      easyTip4.init();
      
      this.easyTip5 = new window.EasyTip({
       effectiveArea: this.$refs.test3,
       triggerEvent: "select",
         direction: 'horizontal',

     })

     this.easyTip5.init();
    
    }
  }
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

}

</style>
