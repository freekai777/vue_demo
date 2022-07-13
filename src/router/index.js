import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path:'/',
        name: 'home',
        meta: {
            showBar: true,
            transition: true
        },
        component: ()=> import('../views/HomeInfo')
    },
    {
        path: '/menu',
        name: 'menu',
        meta: {
            showBar: true,
            transition: true
        },
        component: () => import('../views/menu/MenuList')
    }

]

const router = new VueRouter({
    base: process.env.BASE_URL,
    routes
})

router.beforeEach((to, from, next) => {
    if(to.meta.showBar){
        next()
    }else{
        next()
    }
})
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location) {
    return originalPush.call(this, location).catch((err) => err)
}
export default router
