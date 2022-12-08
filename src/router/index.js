import * as VueRouter from "vue-router";

// 导入路由组件
import MarkdownEidtor from "../views/MarkdownEditor/Index.vue";

// 定义路由
const routes = [
  {
    path: "/",
    component: MarkdownEidtor,
  },
  {
    path: "/fetch-data",
    component: () => import("../views/FetchData/Index.vue"),
  },
  {
    path: "/grid",
    component: () => import("../views/Grid/Index.vue"),
  },
  {
    path: "/tree-view",
    component: () => import("../views/TreeView/Index.vue"),
  },
  {
    path: "/modal",
    component: () => import("../views/Modal/Index.vue"),
  },
  {
    path: "/shuffle-list",
    component: () => import("../views/TranList/Index.vue"),
  },
  {
    path: "/todo-mvc/:type",
    component: () => import("../views/TodoMVC/Index.vue"),
  },
];

// 创建路由实例
const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes,
});

// 导出路由
export default router;
