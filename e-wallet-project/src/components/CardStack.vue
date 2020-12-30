<template> <section>
  <card-view v-for="card of cards" 
  :key="card.id"
  :id="card.id" 
  :number="card.number" 
  :holder="card.holder" 
  :expiry="card.validMonth + '/' + card.validYear" 
  :vendor="card.vendor"
  >
  </card-view>
  </section></template>

<script>
  import cardView from "../components/Card.vue"

export default {
  components: {
    cardView
  },
  computed: {
    cards() {
      return this.$root.cards
    }
  },
    };
</script>

<style scoped>
section {
  padding-top: 2rem;
  display: grid;
  grid-auto-rows: 4rem;
  margin-bottom: 10rem;
}



</style>
