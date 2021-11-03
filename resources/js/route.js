import Vue from 'vue'
import Router from 'vue-router';
import ProductsShow from "./pages/products-show.vue";
import ProductsIndex from "./pages/products-index.vue";
import Checkout from "./pages/checkout.vue";
import Shipping from "./pages/shipping.vue";
import Conditions from './pages/conditions.vue'
Vue.use(Router)


export default new Router({
            mode: 'history',
            // base: decodeURI('/'),
            // linkActiveClass: 'nuxt-link-active',
            // linkExactActiveClass: 'nuxt-link-exact-active',

            routes: [
                // {
                //     path: "/user/wishlist",
                //     component: _0f5a94d3,
                //     name: "user-wishlist"
                // },
                {
                    path: "/products",
                    component: ProductsIndex,
                    name: "products_index"
                },
                {
                    path: "/products/:id?",
                    component: ProductsShow,
                    name: "products_show"
                },
                {
                    path: "/checkout",
                    component: Checkout,
                    name: "checkout"
                },
                {
                    path: "/shipping",
                    component: Shipping,
                    name: "shipping"
                },
                {
                    path: "/conditions",
                    component: Conditions,
                    name: "conditions"
                },
            ],

            fallback: false
        });
