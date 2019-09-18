import Home from '../pages/home/home.vue';
import Fenlei from '../pages/fenlei/fenlei.vue';
import Shiwu from '../pages/shiwu/shiwu.vue';
import Shop from '../pages/shop/shop.vue';
import Person from '../pages/person/person.vue';

export default [
  {
    path:'/home',
    component:Home,
  },
  {
    path: '/fenlei',
    component: Fenlei,
  },
  {
    path: '/shiwu',
    component: Shiwu,
  },
  {
    path: '/shop',
    component: Shop,
  },
  {
    path: '/person',
    component: Person,
  },
  {
    path:'/',
    redirect:'/home'
  }
]