import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./registerServiceWorker";
import dayjs from "dayjs";
import "dayjs/locale/zh-cn";

Vue.config.productionTip = false;
Vue.prototype.$dayjs = dayjs;
dayjs.locale("zh-cn");

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
