<template>
  <div class="easy-tip">
     
    <div class="show" v-if="!firStep">

    <!-- <div >一个简单易用的文字溢出提示框插件，并支持拓展自定义提示样式，支持任意框架，大小仅有3kb</div> -->
    <div class="desc"> 
      <div class="title">
      <span>EasyTip</span>
      <i class="el-icon-chat-dot-square icon"></i>
    </div>
      <div>
      <i class="el-icon-star-on"></i>
      <span>任意框架均可使用，引入简单，无须对项目进行改造</span>
    </div>
    <div>
      <i class="el-icon-star-on"></i>
      <span>自动计算文本溢出情况来决定用户hover时是否展示提示框</span>
    </div>
     <div>
      <i class="el-icon-star-on"></i>
      <span>仅需全局注册，easy-tip会帮你找出需要展示的元素，不需要繁琐一个个节点去操作</span>
    </div>
    <div>
      <i class="el-icon-star-on"></i>
      <span>支持自定义显示内容、样式，友好扩展</span>
    </div>
    <div>
      <i class="el-icon-star-on"></i>
      <span>不引入额外插件，代码大小不到10kb</span>
    </div>
    
    <div></div>
    </div>
       <div  class="button" ref="go" @click="go">Let's go</div>
    </div>



    <div class="wrap" v-show="firStep">
    
      <el-tag type="danger" class="ell-1 left-1" >左边溢出提示{{ content }}</el-tag>

      <el-tag type="danger" class="ell-1 right-1" >右边文字溢出提示{{ content }}</el-tag>

      <el-tag type="danger" class="ell-1 top-1" >上边溢出提示{{ content }}</el-tag>

      <el-tag type="danger" class="ell-1 bottom-1" >下边溢出提示{{ content }}</el-tag>

      <div  class="bottom-1" style="left:300px;bottom:100px;background:white;" ref="test3">选中展示选中展示选中展示选中展示选中展示选中展示选中展示选中展示选中展示选中展示选中展示选中展示选中展示选中展示选中展示选中展示选中展示选中展示选中展示选中展示</div >


      <div  class="bottom-1" style="left:500px;bottom:100px;display:flex;justify-content: space-around;font-size:20px;" ref="test4">

                <i class="el-icon-delete icon"  data-tip="删除"></i>

                <i class="el-icon-setting icon" data-tip="工具" ></i>

                <i class="el-icon-zoom-in icon" data-tip="预览" ></i>

      </div >


      <el-button round @click="change">圆角按钮</el-button>

      <div class="center">
        <el-tag type="danger" class="ell-1" style="left:10%;width:120px;">中间文字溢出{{ content }}</el-tag>
        <el-tag  class="ell-1" style="left:30%;" data-easy="true">文字不溢出强行展示</el-tag >
        <el-tag  class="ell-1" style="left:60%;" >文字不溢出默认不展示</el-tag >
        <el-tag  class="ell-3" style="width:120px;white-space: break-spaces;height:auto;">多行溢出计算：{{ content }}</el-tag  >
      </div>

      

      
      <div  class="ell-1 custom-1" style="left:300px;" ref="test"><el-tag>自定义显示内容</el-tag></div >

      <div  class="ell-1 custom-1" style="left:500px;" ref="test2"><el-tag>自定义显示内容2</el-tag></div >





     
      
     
    </div>

    

  </div>
</template>

<script>
import EasyTip from 'easy-tip';

window.EasyTip = EasyTip;

const easyTip  = new window.EasyTip({
  mustDisplaySign: "easy"
});


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
        customStyle: {
          wrap: {
            backgroundColor: '#f56c6c',
            fontSize: "80px",
            width:"100px",
            borderRadius: '20%',
            textAlign: 'center',
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
       triggerEvent: "select"
     })

     this.easyTip5.init();
    
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
.easy-tip {
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  background-image: linear-gradient(90deg, #74EBD5 0%, #9FACE6 100%);
  font-family: monospace;

}

.title{
  width: 718px;
  text-align: left;
  font-size: 50px;
  padding-top: 100px;
  font-weight: 500;
  color: #f35626;
  margin-bottom: 50px;
}

.icon {
  position: relative;
  top: -14px;
  left: 2px;
}

.show{
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}

.desc{
  color: #f35626;
  font-size: 20px;
  font-weight: 500;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  line-height: 50px;

}

.button{
  width: 200px;
  border: 1px solid #f35626;
  border-radius: 12px;
  cursor: pointer;
  line-height: 38px;
  font-size: 28px;
  background: #f56c6c;
  color: white;
  margin-top: 100px;
}

.button:hover {
  opacity: 0.6;
  font-weight: 400;
}

.desc i {
  margin-right: 20px;
}

.ell-1 {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.ell-2 {
  -webkit-box-orient: vertical;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  overflow: hidden;
}

.ell-3 {
  -webkit-box-orient: vertical;
  display: -webkit-box !important;
  -webkit-line-clamp: 3;
  overflow: hidden;
}

.wrap1 {
  width: 200px;
}

.wrap{
  position: relative;
  height: 100%;
  display: flex;
  align-items: center;
}

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

</style>
