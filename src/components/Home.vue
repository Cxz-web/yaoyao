<template>
  <div class="easy-tip">
     
    <div class="desc"> 
      <div class="title">
        <span>EasyTip</span>
        <img src="../assets/logo.svg" alt="" class="icon">
      </div>
    </div>

    <div class="desc">
      <i class="el-icon-star-on"></i>
      <span>任意框架均可使用，引入简单，无须对项目进行改造</span>
    </div>
    
    <div class="desc">
      <i class="el-icon-star-on"></i>
      <span>自动计算文本溢出情况来决定用户hover时是否展示提示框</span>
    </div>
    
    <div class="desc">
      <i class="el-icon-star-on"></i>
      <span>仅需全局注册，easy-tip会帮你找出需要展示的元素，不需要繁琐一个个节点去操作</span>
    </div>
    
    <div class="desc">
      <i class="el-icon-star-on"></i>
      <span>支持自定义显示内容、样式，友好扩展</span>
    </div>
    
    <div class="desc">
      <i class="el-icon-star-on"></i>
      <span>不引入额外插件，代码大小不到10kb</span>
    </div>
    

    <div>
       <div id="demo" class="button" ref="go" @click.once="next">Let's go</div>
    </div>    

  </div>
</template>

<script>
import EasyTip from './index'

export default {
  name: 'Home',

  data() {
    return {
      easyTip: null
    }
  },

  mounted() {
     this.easyTip = new EasyTip({
      effectiveArea: document.getElementById('demo'), // 绑定上面的节点
      custom: {
        contentRender: (str) => `<div>
          <span>一款简单易用的弹框插件～</span>
        </div>`
      },
      customStyle: {
        wrap: {
          background: '#f56c6c',
          fontSize: '18px',
          padding: '12px 22px',
          borderRadius: '10px',
        },
        triangle: {
          background: '#f56c6c',
        }
      }
    });

    this.easyTip.init();
  },

  destroyed() {
    this.easyTip.destroy()
  },

  methods: {
    next() {
      this.$emit('next')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.easy-tip {
  width: 100%;
  height: 100%;
  overflow-y: hidden;
  font-family: monospace;
  display: flex;
  flex-direction: column;
  align-items: center;

}

.title{
  width: 718px;
  text-align: left;
  font-size: 80px;
  padding-top: 80px;
  font-weight: 500;
  color: #f35626;
  margin-bottom: 60px;
}

.icon {
  position: relative;
  top: -14px;
  left: 2px;
  width: 69px;
}

.show{
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}

.desc{
  color: #f35626;
  font-size: 24px;
  display: flex;
  flex-direction: row;
  min-width: 1000px;
  align-items: center;
  line-height: 90px;
}

.button{
  width: 230px;
  border: 1px solid #f35626;
  border-radius: 12px;
  cursor: pointer;
  line-height: 50px;
  font-size: 32px;
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

</style>
