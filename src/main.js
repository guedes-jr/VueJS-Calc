import { createApp } from 'vue'
import App from './App.vue'
import Vue from 'vue'
import VueRouter from 'vue-router'
import CalcAdvanced from './components/CalcAdvanced.vue'
createApp(App).mount('#app')
Vue.use(VueRouter)

const routes = [
    {
        path: '/advanced',
        name: 'CalcAdvanced',
        component: CalcAdvanced
    }
]

const router = new VueRouter({
    mode: 'history',
    base: 'http://localhost:8080',
    routes
})

export default router