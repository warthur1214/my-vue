import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import QuestionRobot from '@/components/QuestionRobot'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: HelloWorld
    },
    {
      path: '/ask',
      name: 'QuestionRobot',
      component: QuestionRobot
    }
  ]
})
