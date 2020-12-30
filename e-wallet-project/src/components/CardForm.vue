<template>
  <form @submit.prevent="addCardToData">
    <label for="card-number">Card number</label>
    <input
      type="text"
      name="card-number"
      placeholder="XXXX XXXX XXXX XXXX"
      maxlength="16"
      v-model="form.number"
      @input="cardNumber"
      required
    />
    <label for="card-name">Cardholder name</label>
    <input
      type="text"
      name="card-name"
      placeholder="FIRSTNAME LASTNAME"
      maxlength="24"
      v-model.trim="form.holder"
      @input="cardHolder"
      required
    />
    <div class="valid">
      <div class="valid-flex">
        <label for="valid-month">Month</label>
        <select
          name="valid-month"
          v-model="form.validMonth"
          @change="expiryMonth"
          required
        >
          <option value="" selected disabled hidden></option>
          <option value="01">1</option>
          <option value="02">2</option>
          <option value="03">3</option>
          <option value="04">4</option>
          <option value="05">5</option>
          <option value="06">6</option>
          <option value="07">7</option>
          <option value="08">8</option>
          <option value="09">9</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
        </select>
      </div>
      <div class="valid-flex">
        <label for="valid-year">Year</label>
        <select name="valid-year" v-model="form.validYear" @change="expiryYear" required>
          <option value="" selected disabled hidden></option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
          <option value="2023">2023</option>
          <option value="2024">2024</option>
          <option value="2025">2025</option>
        </select>
      </div>
    </div>
    <label for="vendor">vendor</label>
    <select name="vendor" v-model="form.vendor" @change="selectVendor" required>
      <option value="vendor-bitcoin">Bitcoin Inc</option>
      <option value="vendor-blockchain">Blockchain Inc</option>
      <option value="vendor-evil">Evil Corp</option>
      <option value="vendor-ninja">Ninja Bank</option>
    </select>
    <button class="inverted-btn">Add Card</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      form: {
        id: "",
        number: "",
        holder: "",
        vendor: "",
        validMonth: "",
        validYear: "",
      },
    };
  },
  methods: {
    cardNumber() {
      this.$root.form.number = this.form.number;
    },
    cardHolder() {
      this.$root.form.holder = this.form.holder;
    },
    expiryMonth() {
      this.$root.form.validMonth = this.form.validMonth;
    },
    expiryYear() {
      this.$root.form.validYear = this.form.validYear;
    },
    selectVendor() {
      this.$root.form.vendor = this.form.vendor;
    },
  addCardToData() {
    this.form.id = (Date.now()).toString()
    this.$root.addCard(this.form)
  this.$router.push("/")
}
    },
};
</script>

<style scoped>
form {
  margin: 1.5rem 0;
  display: flex;
  flex-direction: column;
}

label {
  font-family: "PT Mono", monospace;
  text-transform: uppercase;
  font-size: 0.8rem;
  margin-top: 1rem;
}

input,
select {
  padding: 0.8rem;
}

.valid {
  display: flex;
  flex-direction: row;
}

.valid-flex {
  display: flex;
  flex-direction: column;
  width: 50%;
}

.valid-flex + .valid-flex {
  margin-left: 1rem;
}
</style>
