import Home from '../pages/home/home.vue';
import Fenlei from '../pages/fenlei/fenlei.vue';
import Shiwu from '../pages/shiwu/shiwu.vue';
import Shop from '../pages/shop/shop.vue';
import Person from '../pages/person/person.vue';
import Login from '../pages/login/login.vue'

export default [
  {
    path:'/home',
    component:Home,
    meta:{
      isShowFooter:true
    }
  },
  {
    path: '/fenlei',
    component: Fenlei,
    meta: {
      isShowFooter: true
    }
  },
  {
    path: '/shiwu',
    component: Shiwu,
    meta: {
      isShowFooter: true
    }
  },
  {
    path: '/shop',
    component: Shop,
    meta: {
      isShowFooter: true
    }
  },
  {
    path: '/person',
    component: Person,
  },
  {
    path: '/login',
    component: Login,
  },
  {
    path:'/',
    redirect:'/home'
  }
]