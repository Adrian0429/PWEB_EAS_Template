import { createRouter, createWebHistory } from 'vue-router'
import SignUp from './SignUp.vue'
import Login from './Login.vue'
import Home from './Home.vue'
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

]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router