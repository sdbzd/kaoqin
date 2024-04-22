const routes = [
  {
    path: "/",
    name: "index",
    title: "首页",
    component: () => import("@/views/index.vue"), //.vue不能省略
  },
  {
    path: "/qingjia",
    name: "qingjia",
    title: "请假",
    component: () => import("@/views/Qingjia.vue"), //.vue不能省略
  },
  {
    path: "/waiqin",
    name: "外勤",
    title: "请假",
    component: () => import("@/views/Waiqin.vue"), //.vue不能省略
  },
  {
    path: "/baobei",
    name: "baobei",
    title: "请假",
    component: () => import("@/views/baobei.vue"), //.vue不能省略
  },
  {
    path: "/view",
    name: "view",
    title: "请假",
    component: () => import("@/views/list.vue"), //.vue不能省略
  },
  {
    path: "/buka",
    name: "buka",
    title: "请假",
    component: () => import("@/views/buka.vue"), //.vue不能省略
  },
];
export default routes;
