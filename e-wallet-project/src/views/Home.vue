<template>
  <div>
    <top-view :title="title" :cardTitle="cardTitle"></top-view>
    <card></card>
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
