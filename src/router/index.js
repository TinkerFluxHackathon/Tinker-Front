import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import Home from '../views/Home.vue'


const routes = [
  { path: '/login', 
    component: Login },

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