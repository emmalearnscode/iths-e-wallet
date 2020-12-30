import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import cardData from "./assets/cardData.js";

Vue.config.productionTip = false;

new Vue({
  router,
  data() {
    return {
      cards: cardData,

      form: {
        holder: "FIRSTNAME LASTNAME",
        number: "XXXXXXXXXXXXXXXX",
        vendor: "",
        validMonth: "00",
        validYear: "0000",
      },
    };
  },
  methods: {
    addCard(userInfo) {
      this.cards.push(userInfo);
      (this.form.holder = "FIRSTNAME LASTNAME"),
        (this.form.number = "XXXXXXXXXXXXXXXX"),
        (this.form.vendor = ""),
        (this.form.validMonth = "00"),
        (this.form.validYear = "0000");
    },
  },
  render: (h) => h(App),
}).$mount("#app");
