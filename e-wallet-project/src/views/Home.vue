<template>
  <div class="home">
    <top-view :title="title" :cardTitle="cardTitle"></top-view>
    <card></card>
    <card-stack></card-stack>
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
};
</script>
