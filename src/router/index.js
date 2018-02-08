import Vue from 'vue'
import Router from 'vue-router'
import ImageAnalysis from '@/components/ImageAnalysis'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/hello',
    //   name: 'Hello',
    //   component: HelloWorld
    // },
    // {
    //   path: '/ask',
    //   name: 'QuestionRobot',
    //   component: QuestionRobot
    // },
    // {
    //   path: '/todo',
    //   name: 'TodoList',
    //   component: TodoList
    // },
    {
      path: '/',
      name: 'ImageAnalysis',
      component: ImageAnalysis
    }
  ]
})
