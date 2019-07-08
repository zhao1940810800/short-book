import Vue from "vue";
import Router from "vue-router";
// import like from "../大家的/三个人级成果文件/src/views/Home.vue";
import articled from "../src/components/zhuyehexihuan/articled.vue";
import comments from "../src/components/zhuyehexihuan/comments.vue";
import yigou from "../src/components/yigou/yigou.vue";
import wodeqianbao from "../src/components/wallet/wodeqianbao.vue";
import help from "../src/components/help/help.vue";
import About from "../src/components/zhuyehexihuan/About.vue";
import Home from "../src/components/zhuyehexihuan/Home.vue";
import setting from "../src/components/set/setting.vue";
import docu from "../src/components/set/docu.vue";
import ziliao from "../src/components/set/ziliao.vue";
import black from "../src/components/set/black.vue";
import zanshang from "../src/components/set/zanshang.vue";
import settings from "../src/components/set/settings.vue";
// import Home from "./views/Home.vue";
// import Login from "./components/Login.vue"
// import Signup from "./components/Signup.vue"

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    // {
    //   path: "/",
    //   name: "home",
    //   component: Home
    // },
    {
      path: "/weixin",
      name: "weixin",
      component: () => import("./components/article/weixin.vue")
    },
    {
      path: "/p",
      name: "p",
      component: () => import("./components/p/index.vue")
    },
    // {
    //   path: "/yuedugengduo",
    //   name: "yuedugengduo",
    //   component: () => import("./components/article/yuedugengduo.vue")
    // },
    {
      path: "/recommendations",
      name: "recommendations",
      component: () => import("./components/recommendations/index.vue")
    },
    {
      path: '/notifications',
      name: "notifications",
      component: () => import("./components/notifications/index.vue"),
      children: [
        {
          path: "/",
          name: "default",
          redirect: "comments"
        },
        {
          path: "comments",
          name: "comments",
          component: () => import('./components/notifications/comments.vue')
        }, {
          path: "chats",
          name: 'chats',
          component: () => import("./components/notifications/chats.vue")
        }, {
          path: "requests",
          name: "requests",
          component: () => import("./components/notifications/requests.vue")
        }, {
          path: "likes",
          name: 'likes',
          component: () => import("./components/notifications/likes.vue")
        }, {
          path: "follows",
          name: "follows",
          component: () => import("./components/notifications/follows.vue")
        }, {
          path: "money",
          name: "money",
          component: () => import("./components/notifications/money.vue")
        }, {
          path: "others",
          name: "others",
          component: () => import("./components/notifications/others.vue")
        }
      ]
    },
    {
      path: '/subscriptions',
      name: "subscriptions",
      component: () => import("./components/subscriptions/index.vue"),
      children: [
        {
          path: '/',
          name: "timeline",
          redirect: "timeline"
          // component: () => import("./components/subscriptions/timeline.vue")
        },
        {
          path: 'timeline',
          name: "timeline",
          component: () => import("./components/subscriptions/timeline.vue")
        },
        {
          path: "subscriptions/:id/:user",
          name: "subscriptions",
          component: () => import("./components/subscriptions/subscriptions.vue")
        }
      ]
    },
    {
      path: "/",
      name: "home",
      component: () => import("./components/index/Home.vue")
    },
    {
      path: "/login",
      name: "login",
      component: () => import("./components/Log/Login.vue")
    },
    {
      path: "/signup",
      name: "signup",
      component: () => import("./components/Log/Signup.vue")
    },
    // {
    //   path: "/about",
    //   name: "about",
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () =>
    //     import(/* webpackChunkName: "about" */ "./views/serial.vue")
    // },
    {
      path: "/edit",
      name: "edit",
      component: () => import("./views/Edit.vue")
    },
    {
      path: "/subscriptions",
      name: "subscriptions",
      component: () => import("./views/subscriptions.vue")
    },
    {
      path: "/collection",
      name: "collection",
      component: () => import("../src/components/collection/collection.vue")
    },
    {
      path: "/yigou",
      name: "yigou",
      component: yigou
    },
    {
      path: "/wodeqianbao",
      name: "wodeqianbao",
      component: wodeqianbao
    },
    {
      path: "/help",
      name: "help",
      component: help
    },
    // {
    //   path: "/About",
    //   name: "About",
    //   component: About
    // },
    {
      path: "/Home",
      name: "Home-home",
      component: Home,
      children: [
        {
          path: "/",
          name: "home-default",
          redirect: 'article'
        },
        {
          path: "article",
          name: "home-article",
          component: () => import("./components/zhuyehexihuan/articled.vue")
        }, {
          path: "comments",
          name: "home-comments",
          component: () => import("./components/zhuyehexihuan/comments.vue")
        }, {
          path: "dynamic",
          name: "home-dynamic",
          component: () => import("./components/zhuyehexihuan/dynamic.vue")
        }, {
          path: "hot",
          name: "home-hot",
          component: () => import("./components/zhuyehexihuan/hot.vue")
        }
      ]
    },
    // {
    //   path: "/setting",
    //   name: "setting",
    //   component: setting
    // },
    {
      path: "/setting",
      name: "setting",
      component: setting,
      children: [
        {
          path: "/",
          component: docu,
        }, {
          path: "docu",
          component: docu
        },
        {
          path: "ziliao",
          component: ziliao
        },
        {
          path: "black",
          component: black,
        },
        {
          path: "zanshang",
          component: zanshang,
        },
        {
          path: "settings",
          component: settings
        }
      ]
    }


  ]
});
