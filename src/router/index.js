import {createRouter,createWebHashHistory} from 'vue-router'
import Home from '../views/Home/index.vue'
import Other from '../views/Other/index.vue'

// createRouter 创建路由实例
const router=createRouter({
    history:createWebHashHistory(),// hash模式：createWebHashHistory，history模式：createWebHistory
    routes:[
        {
            path:'/',
            component:Home
        },
        {
            path:'/Other',
            component:Other
        }
    ]
});
// 抛出路由实例, 在 main.js 中引用
export default router