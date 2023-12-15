import { createRouter, createWebHistory } from 'vue-router'
import SignUp from './views/SignUp.vue'
import Login from './views/Login.vue'
import Home from './views/Home.vue'
import Index from './views/Index.vue'
const routes = [
    {
        name: 'SignUp',
        path: '/SignUp',
        component: SignUp,
    },
    {
        name: 'Login',
        path: '/Login',
        component: Login,
    },
    {
        name: 'Home',
        path: '/Home',
        component: Home,
    },
    {
        name: 'Index',
        path: '/',
        component: Index,
    },

]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router