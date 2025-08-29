import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import Home from '../views/Home.vue'
import Sign from '../views/Sign.vue'


const routes = [


  { path: '/login',
    name: 'login',
    component: Login },

    { path: '/sign',
    name: 'sign',
    component: Sign },

     {
    path: '/',
    name: 'home',
    component: Home
  },

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
