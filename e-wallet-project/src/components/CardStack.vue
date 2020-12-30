<template> 
<section>
  <p>ALL CARDS</p>
<section class="card-stack">
  
  <card-view v-for="card of cards" 
  :key="card.id"
  :id="card.id" 
  :number="card.number" 
  :holder="card.holder" 
  :expiry="card.validMonth + '/' + card.validYear" 
  :vendor="card.vendor"
  >
  </card-view>
  </section>
  </section>
  </template>

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
.card-stack {
  display: grid;
  grid-auto-rows: 4rem;
  margin-bottom: 10rem;
}

p {
  font-family: "PT Mono", monospace;
  color: rgba(0, 0, 0, 0.4);
  font-weight: 700;
  text-align: center;
  padding-top: 2rem;
  padding-bottom: .5rem;
}


</style>
