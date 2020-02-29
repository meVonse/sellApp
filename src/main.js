import Vue from 'vue'
import App from './App.vue'
import router from './router'
// iView框架
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
Vue.use(ViewUI);
// 引入全局样式
import './assets/styles/reset.less';
import './assets/styles/common.less';




Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
