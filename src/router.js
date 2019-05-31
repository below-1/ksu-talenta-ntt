import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/app',
      name: 'app',
      component: () => import(/* webpackChunkName: "about" */ './views/app/App.vue'),
      children: [
        {
          path: 'dataset',
          name: 'dataset',
          component: () => import('./views/app/dataset/list.vue')
        },
        {
          path: 'edit-dataset/:id',
          name: 'edit-dataset',
          props: true,
          component: () => import('./views/app/dataset/edit.vue')
        },
        {
          path: 'data',
          name: 'data-list',
          component: () => import('./views/app/data/list.vue')
        },
        {
          path: 'data-create',
          name: 'data-create',
          component: () => import('./views/app/data/create.vue')
        },
        {
          path: 'data-update/:id',
          name: 'data-update',
          props: true,
          component: () => import('./views/app/data/update.vue')
        },
        {
          path: 'settings',
          name: 'settings',
          component: () => import('./views/app/settings.vue')
        },
        {
          path: 'classification',
          name: 'classification',
          component: () => import('./views/app/classification.vue')
        }
      ]
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
