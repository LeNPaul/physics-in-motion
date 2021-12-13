import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

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
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },

  {
    path: '/one-dimensional-motion',
    name: 'Motion in One Dimension',
    component: () => import('../views/OneDimensionalMotion.vue')
  },
  {
    path: '/one-dimensional-position',
    name: 'Position in One Dimension',
    component: () => import('../views/OneDimensionalMotion/OneDimensionalPosition.vue')
  },
  {
    path: '/one-dimensional-distance-displacement',
    name: 'Distance and Displacement in One Dimension',
    component: () => import('../views/OneDimensionalMotion/OneDimensionalDistanceDisplacement.vue')
  },

  {
    path: '/hookes-law',
    name: `Hooke's Law`,
    component: () => import('../views/HookesLaw.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
