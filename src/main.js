import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';//引入ElementUI
import 'element-ui/lib/theme-chalk/index.css';//引入ElementUI-css
import router from './router'
import store from './store'
// 引入Antd
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

Vue.use(ElementUI);//挂载
Vue.use(Antd);


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
