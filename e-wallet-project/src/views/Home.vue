<template>
  <div>
    <top-view :title="title" :cardTitle="cardTitle"></top-view>
    <card :id="cardId" :number="cardNumber" :holder="cardHolder" :expiry="expiryDate" :vendor="vendor"></card>
    <card-stack v-if="this.$root.cards.length > 0"></card-stack>
    <button @click="addCardRoute">ADD NEW CARD</button>
    <button v-if="this.$root.activeCard[0].id !== ''" class="inverted-btn" @click="confirmRemoveCard">REMOVE CARD</button>
    <remove-card v-if="modalVisible" @closeModal="cancelModal"></remove-card>
  </div>
</template>

<script>
import TopView from "../components/Top.vue";
import Card from "../components/Card.vue";
import CardStack from "../components/CardStack";
import RemoveCard from "../components/RemoveCardModal.vue"

export default {
  components: {
    TopView,
    Card,
    CardStack,
    RemoveCard
  },
  data() {
    return {
      title: "E-WALLET",
      cardTitle: "Active card",
      modalVisible: false,
    };
  },
  methods: {
    addCardRoute() {
      this.$router.push("/addcard");
    },
    confirmRemoveCard() {
      this.modalVisible = true;
      
    },
cancelModal() {
  this.modalVisible = false;
}
  },
  computed: {
    cardNumber() {
      return this.$root.activeCard[0].number
    },
    cardHolder() {
      return this.$root.activeCard[0].holder
    },
    expiryDate() {
      return this.$root.activeCard[0].validMonth + "/" + this.$root.activeCard[0].validYear;
    },
    vendor() {
      return this.$root.activeCard[0].vendor;
    },
    cardId() {
      return this.$root.activeCard[0].id;
    }
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
  margin: 1rem 0 0 0;
  background-color: #fff;
  text-transform: uppercase;
  cursor: pointer;
}

.inverted-btn {
  background-color: black;
  color: white;
}
</style>
