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
      cardsArray: [],
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
      this.cardsArray.push(userInfo);
      console.log(this.cardsArray);
    },
  },
  render: (h) => h(App),
}).$mount("#app");
