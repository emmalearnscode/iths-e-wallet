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
      activeCard: [
        {
          id: "",
          holder: "FIRSTNAME LASTNAME",
          number: "XXXXXXXXXXXXXXXX",
          vendor: "",
          validMonth: "00",
          validYear: "0000",
        },
      ],
      form: {
        id: "",
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
    setActiveCard(id) {
      this.activeCard = this.cards.filter((card) => card.id === id);
    },
    removeCardFromList() {
      console.log(this.cards);
      let id = this.activeCard[0].id;
      console.log(id);
      this.cards = this.cards.filter((card) => card.id !== id);
      console.log(this.cards);
      (this.activeCard[0].id = ""),
        (this.activeCard[0].holder = "FIRSTNAME LASTNAME"),
        (this.activeCard[0].number = "XXXXXXXXXXXXXXXX"),
        (this.activeCard[0].vendor = ""),
        (this.activeCard[0].validMonth = "00"),
        (this.activeCard[0].validYear = "0000");
    },
  },
  render: (h) => h(App),
}).$mount("#app");
