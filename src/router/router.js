import Vue from 'vue'
import Router from 'vue-router'
import App from '../App'
import Home from '@/page/home/Index'
import Item from '@/page/item/Index'
import Score from '@/page/score/Index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/item',
      component: Item
    },
    {
      path: '/score',
      component: Score
    }
  ]
})
