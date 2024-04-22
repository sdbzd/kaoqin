import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

 
// import "bootstrap/scss/utilities";
import {initAMapApiLoader} from '@vuemap/vue-amap';
import '@vuemap/vue-amap/dist/style.css'
initAMapApiLoader({
  key: '5576dff99507e4ce3a07479e2f78788d',
  //Loca:{
  //  version: '2.0.0'
  //} // 如果需要使用loca组件库，需要加载Loca
})



import 'default-passive-events'
// 引入组件和样式
// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'
import router from './router/index'

// createApp(App).mount('#app')
const app = createApp(App)
app.use(router)
app.mount('#app')
