import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { db } from "./db";
import vueMoment from "vue-moment";

import "@fortawesome/fontawesome-free/css/all.css";

Vue.config.productionTip = false;

Vue.db = Vue.prototype.$db = db;

Vue.use(vueMoment);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
