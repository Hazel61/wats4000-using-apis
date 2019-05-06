import Vue from 'vue'
import Router from 'vue-router'
import Rhymesaurus from '@/views/Rhymesaurus'
import AdjForNoun from '@/views/AdjForNoun'
import Navigation from '@/components/Navigation'
// TODO: Import new component

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Rhymesaurus',
      component: Rhymesaurus
    },
    {
      path: '/adjfornoun',
      name: 'adjfornoun',
      component: AdjForNoun
    },
    {
      path: '/Navigation',
      name: 'Navigation',
      component: Navigation
    }
    // TODO: Add new route definition here.
  ]
})
