import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import cardData from "./assets/cardData.js";

Vue.config.productionTip = false;

new Vue({
  router,
  data() {
    return {
      cards: cardData.cards,
      form: {
        holder: "",
        number: "",
        vendor: "",
        validMonth: "",
        validYear: "",
      },
    };
  },
  render: (h) => h(App),
}).$mount("#app");
