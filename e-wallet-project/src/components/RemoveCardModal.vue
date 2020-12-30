<template>
<section @click.self="cancelModal">
  <div>
    <h3>Are you sure you want to remove the current active card?</h3>
    <button @click="removeCardConfirmed">Yes</button>
    <button class="inverted-btn" @click="cancelModal">Cancel</button>
  </div>
</section>
</template>

<script>
export default {
methods: {
  cancelModal() {
    this.$emit("closeModal")
  },
  removeCardConfirmed() {
    this.$root.removeCardFromList()
    this.cancelModal()
  }
}
}
</script>

<style scoped>
section {
  background-color: rgba(0,0,0,0.7);
  
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  display: grid;
  place-items: center;
}

div {
  padding: 1rem;
  background: #fff;
  border-radius: 10px;
  width: 370px;
  
}

h3 {
  font-family: "Source Sans Pro", sans-serif;
  text-align:center;
}

</style>