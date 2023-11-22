import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import LoginView from '@/views/LoginView.vue';
import AdminLoginView from '@/views/AdminLoginView.vue';
import AdminSigninView from '@/views/AdminSigninView.vue';
import SignupView from '@/views/SignupView.vue';
import ResetView from '@/views/ResetView.vue';
import SupportView from '@/views/SupportView.vue';
import PanelView from '@/views/PanelView.vue';
import PolicyView from '@/views/PolicyView.vue';
import DisclaimerView from '@/views/DisclaimerView.vue';
import TermsView from '@/views/TermsView.vue';
import NotFoundView from '@/views/NotFoundView.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
    meta: {
      title: "Maher Agencies - Home",
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginView,
    meta: {
      title: "Maher Agencies - Login",
    }
  },
  {
    path: '/p-login',
    name: 'AdminLogin',
    component: AdminLoginView,
    meta: {
      title: "Maher Agencies - Admin Login",
    }
  },
  {
    path: '/p-signup',
    name: 'AdminSignin',
    component: AdminSigninView,
    meta: {
      title: "Maher Agencies - Admin Signin",
    }
  },
  {
    path: '/signup',
    name: 'Signup',
    component: SignupView,
    meta: {
      title: "Maher Agencies - Signup",
    }
  },
  {
    path: '/reset-password',
    name: 'Reset',
    component: ResetView,
    meta: {
      title: "Maher Agencies - Reset Password",
    }
  },
  {
    path: '/support',
    name: 'Support',
    component: SupportView,
    meta: {
      title: "Maher Agencies - Support",
    }
  },
  {
    path: '/panel',
    name: 'Panel',
    component: PanelView,
    meta: {
      isAdmin: true,
      title: "Maher Agencies - Admin Panel",
    }
  },
  {
    path: '/policy',
    name: 'Policy',
    component: PolicyView,
    meta: {
      title: "Maher Agencies - Privacy Policy",
    }
  },
  {
    path: '/disclaimer',
    name: 'Disclaimer',
    component: DisclaimerView,
    meta: {
      title: "Maher Agencies - Disclaimer",
    }
  },
  {
    path: '/terms',
    name: 'Terms',
    component: TermsView,
    meta: {
      title: "Maher Agencies - Terms and Conditions",
    }
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFoundView,
    meta: {
      title: "404 - Page not found",
    }
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

const isAdmin = () => {
  const admin = localStorage.getItem('admin');
  return admin === 'true'; 
};

const dynamicTitleGuard = (to, from, next) => {
  document.title = to.meta.title || 'Maher Agencies - Job Application Agency';
  next();
};

const adminGuard = (to, from, next) => {
  if (to.matched.some((record) => record.meta.isAdmin)) {
    if (isAdmin()) {
      next();
    } else {
      next('/');
    }
  } else {
    next();
  }
};

router.beforeEach(dynamicTitleGuard);
router.beforeEach(adminGuard);

export default router;
