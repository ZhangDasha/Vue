import Goods from './router/goods.vue'
import Ratings from './router/ratings.vue'
import Seller from './router/seller.vue'

export default{
  routes: [
    {path: '*', redirect: '/goods'},
    {path: '/goods', component: Goods},
    {path: '/ratings', component: Ratings},
    {path: '/seller', component: Seller}
  ]
}
