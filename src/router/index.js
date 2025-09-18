// src/router/index.js

import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Sign from '../views/Sign.vue'
import Products from '../views/Products.vue'
import Contact from '../views/Contact.vue'
import IA from '../views/IA.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/sign',
    name: 'sign',
    component: Sign
  },
  {
    path: '/products',
    name: 'products',
    component: Products
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact
  },
  {
    path: '/ia',
    name: 'ia',
    component: IA
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
