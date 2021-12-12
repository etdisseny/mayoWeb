import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;
import "bootstrap/dist/css/bootstrap.css";
import VueRellax from "vue-rellax";
import VueScrollReveal from "vue-scroll-reveal";
Vue.use(VueScrollReveal, {
  class: "v-scroll-reveal",
  duration: 800,
  scale: 1,
  distance: "100px",
});
Vue.use(VueRellax);
new Vue({
  render: (h) => h(App),
}).$mount("#app");
