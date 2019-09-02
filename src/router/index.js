import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import FirstLevel from '@/components/FirstLevel'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/first',
      name: 'FirstLevel',
      component: FirstLevel
    }
  ]
})
