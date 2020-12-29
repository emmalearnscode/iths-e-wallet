<template>
  <div>
    <top-view :title="title" :cardTitle="cardTitle"></top-view>
    <card :number="cardNumber" :holder="cardHolder" :expiry="expiryDate" :vendor="vendor"></card>
    <card-stack></card-stack>
    <button @click="addCardRoute">ADD NEW CARD</button>
  </div>
</template>

<script>
import TopView from "../components/Top.vue";
import Card from "../components/Card.vue";
import CardStack from "../components/CardStack";

export default {
  components: {
    TopView,
    Card,
    CardStack,
  },
  data() {
    return {
      title: "E-WALLET",
      cardTitle: "Active card",
    };
  },
  methods: {
    addCardRoute() {
      this.$router.push("/addcard");
    },
  },
  computed: {
    cardNumber() {
      return this.$root.cards[0].number
    },
    cardHolder() {
      return this.$root.cards[0].holder
    },
    expiryDate() {
      return this.$root.cards[0].validMonth + "/" + this.$root.cards[0].validYear;
    },
    vendor() {
      return this.$root.cards[0].vendor;
    },
  }
};
</script>

<style>
button {
  width: 100%;
  padding: 1rem;
  font-family: "PT Mono", monospace;
  border: 1px solid black;
  border-radius: 5px;
  font-size: 1.2rem;
  font-weight: 600;
  margin: 1rem 0;
  background-color: #fff;
  text-transform: uppercase;
  cursor: pointer;
}

.inverted-btn {
  background-color: black;
  color: white;
}
</style>
