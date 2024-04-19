import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

// 引入组件和样式
// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'
import router from './router/index'

// createApp(App).mount('#app')
const app = createApp(App)
app.use(router)
app.mount('#app')
