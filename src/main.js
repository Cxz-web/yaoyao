import Vue from 'vue'
import App from './App.vue'
import 'animate.css';
import { Button, Tag } from 'element-ui';


Vue.config.productionTip = false

Vue.use(Button);

Vue.use(Tag);



new Vue({
  render: h => h(App),
}).$mount('#app')
