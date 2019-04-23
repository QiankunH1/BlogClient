import Vue from 'vue'
import Router from 'vue-router'
import index from '@/views/index.vue'
import login from '@/views/login.vue'
import NProgress from 'nprogress'



Vue.use(Router)

const components={
  layout:()=>import('@/views/layout.vue'),
  index:()=>import('@/views/index.vue'),
  login:()=>import('@/views/login.vue'),
  register:()=>import('@/views/register.vue'),
  // person:()=>import('@/views/person.vue'),
  personcenter:()=>import('@/views/personcenter.vue'),
}


var router=new Router({
  routes: [  
    {
      path: '/',
      name: 'layout',
      component: components.layout,
      redirect:'/index',
      children:[   
        {
        path: 'index',
        name: 'index',
        component: components.index
         },
        {
        path: 'login',
        name: 'login',
        component: components.login
         },
        {
        path: 'register',
        name: 'register',
        component: components.register
         },
        {
        path: 'personcenter',
        name: 'personcenter',
        component: components.personcenter
         },
        {
        path: 'person',
        name: 'person',
        component: components.person
         },
    ]
    },
   
  ]
})
router.beforeEach((to,from,next) => {
  NProgress.start()
  next()
})

router.afterEach(() => {
  NProgress.done()
})
export default router;
