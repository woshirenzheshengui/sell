import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/Login'
import Home from '@/views/Home'
import { homedir } from 'os';
import Welcome from "@/views/welcome/Welcome"
import User from "@/views/user/User"
import Student from "@/views/studentConnection/StudentConnection"
import Partici from "@/views/particiPants/ParticiPants"
import Advertising from "@/views/advertisingset/AdvertisingSet"


Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path:"/",
      name:'Home',
      component:Home,
      redirect:{path:'/welcome'},
      children:[
        {
          name:'Welcome',
          path:'welcome',
          component:Welcome
        },{
          name:'user',
          path:'user',
          component:User
        },{
          name:'student',
          path:'student',
          component:Student
        },
        {
          name:'partici',
          path:'partici',
          component:Partici
        },
        {
          name:'advertising',
          path:'advertising',
          component:Advertising
        },
        
       
      ]
    }
  ]
})
