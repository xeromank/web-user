import { createRouter, createWebHistory } from 'vue-router'
import { useCookies } from "vue3-cookies";
import Home from '../views/Home.vue'

const { cookies } = useCookies();
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(
      /* webpackChunkName: "about" */
      /* webpackPrefetch: true */
      '../views/About.vue')
  },
  {
    path: '/login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(
      /* webpackChunkName: "about" */
      /* webpackPrefetch: true */
      '../views/login.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {

    if(to.name === "Login"){
        return next();
    }

    if (cookies.get("accessToken") == null) {
        return next({ name: 'Login' });
    }

    return next();
})

export default router
