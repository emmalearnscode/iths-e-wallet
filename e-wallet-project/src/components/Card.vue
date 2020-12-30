<template>
  <div class="card" :class="bgColor" @click="makeActiveCard">
    <img v-if="vendor === 'vendor-bitcoin'"
      class="card-chip"
      src="../assets/images/chip-dark.svg"
      alt="credit card chip image"
    />
    <img v-else
      class="card-chip"
      src="../assets/images/chip-light.svg"
      alt="credit card chip image"
    />
    <img v-if="vendor === 'vendor-bitcoin' " class="vendor-logo" src="../assets/images/vendor-bitcoin.svg" alt="Bank vendor logo" />
    <img v-else-if="vendor === 'vendor-blockchain' " class="vendor-logo" src="../assets/images/vendor-blockchain.svg" alt="Bank vendor logo" />
    <img v-else-if="vendor === 'vendor-evil' " class="vendor-logo" src="../assets/images/vendor-evil.svg" alt="Bank vendor logo" />
    <img v-else-if="vendor === 'vendor-ninja' " class="vendor-logo" src="../assets/images/vendor-ninja.svg" alt="Bank vendor logo" />
    <p class="card-number">{{ formatNumber }}</p>
    <p class="card-name p-small">CARDHOLDER NAME</p>
    <p class="inputted-name">{{ holder }}</p>
    <p class="valid p-small">VALID UNTIL</p>
    <p class="expiry-date">{{ expiry }}</p>
  </div>
</template>

<script>
export default {
  props: {
    number: String,
    holder: String,
    expiry: String,
    vendor: String,
    id: String,
    
  },
  methods: {
    makeActiveCard() {
      this.$root.setActiveCard(this.id);
    }
  },
  computed: {
    bgColor() {
      if (this.vendor === "vendor-bitcoin") {
        return "bg-bitcoin"
      }
      else if (this.vendor === "vendor-blockchain") {
        return "bg-blockchain"
      }
      else if (this.vendor === "vendor-evil") {
        return "bg-evil"
      }
      else if (this.vendor === "vendor-ninja") {
        return "bg-ninja"
      }
      else {
        return "bg-grey"
      }
    },
    formatNumber() {
      let formattedNum = ""
      if (this.number) {
for (let i = 0; i < this.number.length; i++) {
        if (i % 4 === 0) {
          formattedNum = formattedNum + " " + this.number[i]
        }
        else {
          formattedNum += this.number[i]
        }
      }
      }
      
      return formattedNum
    }
  }
  
  
};
</script>

<style scoped>
.card {
  width: 100%;
  height: 220px;
  border-radius: 10px;
  padding: 1rem;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 0px 0.5rem;
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-template-rows: 6fr 3fr 1fr 1fr;
  margin-bottom: 1rem;
}

.bg-bitcoin {
  background-color: #ffb43f;
}

.bg-blockchain {
  background-color: #8051E5;
  color: white;
}

.bg-ninja {
  background-color: #2f2f2f;
  color: white;
}

.bg-evil {
  background-color: #DD2f4e;
  color: white;
}

.bg-grey {
background: #d8d8d8;
}

.vendor-logo {
  justify-self: end;
}

p {
  font-family: "PT Mono", monospace;
  font-size: 1.1rem;
}

.p-small {
  font-size: 0.7rem;
}

.card-number {
  grid-row: 2;
  grid-column: 1/3;
  font-size: 1.7rem;
  padding-top: 0.5rem;
  padding-bottom: 0.8rem;
}
.card-name {
  grid-row: 3;
}

.inputted-name {
  grid-row: 4;
  align-self: end;
  text-transform: uppercase;
}

.valid {
  grid-row: 3;
  grid-column: 2;
  justify-self: end;
}

.expiry-date {
  grid-row: 4;
  grid-column: 2;
  justify-self: end;
  align-self: end;
}
</style>
