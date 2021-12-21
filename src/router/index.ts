import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path:'/',
    redirect:'/login',
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login/Index.vue")
  },
  {
    path:"/",
    name:'dashboard',
    component:() => import("@/views/Dashboard/Index.vue"),
    meta:{
      title:'首页'
    },
    children:[
      {
        path:'/dashboard',
        component:() => import("@/views/Dashboard/main.vue")
      },
      {
        path:'/brokenLine',
        component:() => import("@/views/Echarts/BrokenLine.vue"),
        meta:{
          title:'折线图'
        }
      },
      {
        path:'/draggable-dialog',
        component:() => import("@/views/ComponentsPage/draggable-dialog/draggableDialog.vue"),
        meta:{
          title:'可拖拽弹窗'
        }
      },
      {
        path:'/rich-text',
        component:() => import("@/views/ComponentsPage/tinymece/richText.vue"),
        meta:{
          title:'富文本编辑器'
        }
      },
      {
        path:'/draggable-list',
        component:() => import("@/views/ComponentsPage/draggable-list/draggableList.vue"),
        meta:{
          title:'可拖拽列表'
        }
      }
    ]
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
