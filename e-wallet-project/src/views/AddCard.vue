<template>
  <div>
    <top-view :title="title" :cardTitle="cardTitle"></top-view>
    <card
      :number="cardNumber"
      :holder="cardHolder"
      :expiry="expiryDate"
      :vendor="vendor"
      
    ></card>
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
  computed: {
    cardNumber() {
      return this.$root.form.number;
    },
    cardHolder() {
      return this.$root.form.holder;
    },
    expiryDate() {
      return this.$root.form.validMonth + "/" + this.$root.form.validYear;
    },
    vendor() {
      return this.$root.form.vendor;
    },
    
  },
};
</script>

<style></style>
