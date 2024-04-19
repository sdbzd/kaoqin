const routes = [
  {
    path: "/",
    name: "index",
    title: "首页",
    component: () => import("@/components/index.vue"), //.vue不能省略
  },
  {
    path: "/qingjia",
    name: "qingjia",
    title: "请假",
    component: () => import("@/components/Qingjia.vue"), //.vue不能省略
  },
  {
    path: "/waiqin",
    name: "waiqin",
    title: "请假",
    component: () => import("@/components/Waiqin.vue"), //.vue不能省略
  },
  {
    path: "/baobei",
    name: "baobei",
    title: "请假",
    component: () => import("@/components/Waiqin.vue"), //.vue不能省略
  },
  {
    path: "/view",
    name: "view",
    title: "请假",
    component: () => import("@/components/Waiqin.vue"), //.vue不能省略
  },
];
export default routes;
