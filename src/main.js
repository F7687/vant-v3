import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index';
import { Button } from 'vant';
import 'lib-flexible/flexible'
import '/@modules/vant/lib/index.css'; // 全局引入样式

createApp(App)
.use(router)
.use(Button) // 注册组件
.mount('#app')

/**移动端rem适配 ：1.安装 yarn add lib-flexible -S  yarn add postcss-pxtorem -D
                2.要在 main.js 引入 lib-flexible  :import 'lib-flexible/flexible'
                3.需要 postcss.config.js 文件，配置,参考postcss.config.js
                    
                 */