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
import Personalcenter from "@/views/personalcenter"
import Studentconnection from "@/views/StudentConnection/StudentConnection"

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
          component:Welcome,
          meta:{
            requireAuth :true
          }
        },{
          name:'user',
          path:'user',
          component:User,
          meta:{
            requireAuth :true
          }
        },{
          name:'student',
          path:'student',
          component:Student,
          meta:{
            requireAuth :true
          }
        },
        {
          name:'partici',
          path:'partici',
          component:Partici,
          meta:{
            requireAuth :true
          }
        },
        {
          name:'advertising',
          path:'advertising',
          component:Advertising,
          meta:{
            requireAuth :true
          }
        },
        {
          name:'personalcenter',
          path:'personalcenter',
          component:Personalcenter,
          meta:{
            requireAuth :true
          }
        },
        {
          name:'studentconnection',
          path:'studentconnection',
          component:Studentconnection,
          meta:{
            requireAuth :true
          }
        }
      ]
    }
  ]
})
