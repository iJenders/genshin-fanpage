import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    // Save scroll position when using back/next navigation on browser
    if (savedPosition) {
      return savedPosition
    }

    // Don't alter scroll while opening or closing videoPlayer on HomeView
    if (from.name == 'home' && (to.hash == '#video' || from.hash == '#video')) {
      return
    }

    // Sets scroll to 0
    return { top: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/regions',
      name: 'regions',
      component: () => import('../views/RegionsView.vue')
    },
    {
      path: '/characters',
      name: 'characters',
      component: () => import('../views/CharactersView.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not found',
      component: () => import('../views/NotFound.vue')
    },
  ]
})

export default router
