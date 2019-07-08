import Vue from "vue";
import Router from "vue-router";
import { PATH_URL } from "../constants";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: PATH_URL.HOME.path,
      component: () => import("@/views/Home"),
      children: [
        {
          path: PATH_URL.HOME.GLOBAL.path,
          name: PATH_URL.HOME.GLOBAL.name,
          component: () => import("@/views/HomeGlobal")
        },
        {
          path: PATH_URL.HOME.FEED.path,
          name: PATH_URL.HOME.FEED.name,
          component: () => import("@/views/HomeMyFeed")
        },
        {
          path: PATH_URL.HOME.TAG.path,
          name: PATH_URL.HOME.TAG.name,
          component: () => import("@/views/HomeTag")
        }
      ]
    },
    {
      name: PATH_URL.LOGIN.name,
      path: PATH_URL.LOGIN.path,
      component: () => import("@/views/Login")
    },
    {
      name: PATH_URL.REGISTER.name,
      path: PATH_URL.REGISTER.path,
      component: () => import("@/views/Register")
    },
    {
      name: PATH_URL.SETTING.name,
      path: PATH_URL.SETTING.path,
      component: () => import("@/views/Settings")
    },
    // Handle child routes with a default, by giving the name to the
    // child.
    // SO: https://github.com/vuejs/vue-router/issues/777
    {
      path: PATH_URL.PROFILE.path,
      component: () => import("@/views/Profile"),
      children: [
        {
          path: PATH_URL.PROFILE.INDEX.path,
          name: PATH_URL.PROFILE.INDEX.name,
          component: () => import("@/views/ProfileArticles")
        },
        {
          name: PATH_URL.PROFILE.FAVORITE.name,
          path: PATH_URL.PROFILE.FAVORITE.path,
          component: () => import("@/views/ProfileFavorited")
        }
      ]
    },
    {
      name: PATH_URL.ARTICLE.INDEX.name,
      path: PATH_URL.ARTICLE.INDEX.path,
      component: () => import("@/views/Article"),
      props: true
    },
    {
      name: PATH_URL.ARTICLE.EDIT.name,
      path: PATH_URL.ARTICLE.EDIT.path,
      props: true,
      component: () => import("@/views/ArticleEdit")
    }
  ]
});
