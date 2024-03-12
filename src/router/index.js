import Vue from 'vue'  
import Router from 'vue-router'  
import Login from '@/views/Login'  
import Home from '@/views/Home'  
import NotFound from '@/views/404'  
  
Vue.use(Router)  
  
const router = new Router({  
  routes: [  
    {  
      path: '/',  
      name: 'Home',  
      component: Home  
    },  
    {  
      path: '/login',  
      name: 'Login',  
      component: Login  
    },  
    {  
      path: '/404',  
      name: 'NotFound', // 修正命名，保持一致性  
      component: NotFound  
    },  
    // 可以添加一个通配符路由来处理未定义的路径  
    {  
      path: '*',  
      redirect: '/404'  
    }  
  ]  
})  
  
router.beforeEach((to, from, next) => {  
  let user = sessionStorage.getItem('user');  
  if (to.path === '/login') {  
    if (user) {  
      next({ path: '/' }); // 如果已登录，重定向到主页  
    } else {  
      next(); // 如果没有登录，允许访问登录页  
    }  
  } else {  
    if (!user && to.path !== '/login') { // 确保非登录页需要用户登录  
      alert("未登录")
      next({ path: '/login' }); // 如果未登录，重定向到登录页  
    } else {  
      next(); // 允许访问目标路由  
    }  
  }  
});  
  
export default router; // 导出配置好的路由器实例