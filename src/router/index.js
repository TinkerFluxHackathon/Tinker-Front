// src/router/index.js

import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Sign from '../views/Sign.vue'
import Products from '../views/Products.vue'
import Contact from '../views/Contact.vue'
import IA from '../views/IA.vue'
import About from '../views/About.vue'
import Cart from '../views/Cart.vue'

const routes = [
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/',
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
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/cart',
    name: 'cart',
    component: Cart
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
