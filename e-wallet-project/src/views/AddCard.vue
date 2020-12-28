<template>
  <div>
    <top-view :title="title" :cardTitle="cardTitle"></top-view>
    <card></card>
    <card-form></card-form>
  </div>
</template>

<script>
import TopView from "../components/Top.vue";
import Card from "../components/Card.vue";
import CardForm from "../components/CardForm";

export default {
  components: {
    TopView,
    Card,
    CardForm,
  },
  data() {
    return {
      title: "ADD A NEW BANK CARD",
      cardTitle: "New card",
    };
  },
};
</script>

<style></style>
