import Vue from "vue";
import Vuex from "vuex";

import {
  HomeModule,
  AuthModule,
  ArticleModule,
  ProfileModule
} from "../modules";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    HomeModule,
    AuthModule,
    ArticleModule,
    ProfileModule
  }
});
