import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Login from '@/views/TheLogin'
import Container from '@/container/Container'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      // name: 'HelloWorld',
      name: 'Container',
      // component: HelloWorld
      component: Container
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    }
  ]
})
