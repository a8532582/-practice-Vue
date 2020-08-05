import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Todolist from '@/components/Todolist'


Vue.use(Router)  // 告訴 Vue 要使用路由


export default new Router({
    routes: [
        {
            path: '/todolist',
            name: 'todolist',
            component: Todolist
        },
        {
            path: '/',               // 設定路由路徑
            name: 'HelloWorld',      // 設定路由名稱
            component: HelloWorld    // 掛載元件
        }
    ]
})

