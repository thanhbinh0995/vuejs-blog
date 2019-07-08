import Vue from "vue";
import Vuetify from "vuetify";
import "babel-polyfill";

Vue.use(Vuetify);

import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";

import { USER_TYPE } from "@/types";
import { ApiService } from "./services";
import DateFilter from "./common/date.filter";
import ErrorFilter from "./common/error.filter";

import "vuetify/dist/vuetify.min.css";
import "./assets/main.css";

Vue.config.productionTip = false;
Vue.filter("date", DateFilter);
Vue.filter("error", ErrorFilter);

ApiService.init();

// Ensure we checked auth before each page load.
router.beforeEach((to, from, next) =>
  Promise.all([store.dispatch(USER_TYPE.CHECK_AUTH)]).then(next)
);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
