import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('@/views/LoginView.vue')
    },
    {
      path: '/p-login',
      name: 'AdminLogin',
      component: () => import('@/views/AdminLoginView.vue')
    },
    {
      path: '/p-signup',
      name: 'AdminSignin',
      component: () => import('@/views/AdminSigninView.vue')
    },
    {
      path: '/signup',
      name: 'Signup',
      component: () => import('@/views/SignupView.vue')
    },
    {
      path: '/support',
      name: 'Support',
      component: () => import('@/views/SupportView.vue')
    },
 
    {
      path: '/policy',
      name: 'Policy',
      component: () => import('@/views/PolicyView.vue')
    },
 
    {
      path: '/disclaimer',
      name: 'Disclaimer',
      component: () => import('@/views/DisclaimerView.vue')
    },

    {
      path: '/terms',
      name: 'Terms',
      component: () => import('@/views/TermsView.vue')
    },
 
 
  ]
})

export default router
