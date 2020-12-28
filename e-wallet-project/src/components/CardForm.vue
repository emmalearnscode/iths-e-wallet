<template>
  <form>
    <label for="card-number">Card number</label>
    <input type="text" name="card-number" placeholder="XXXX XXXX XXXX XXXX" />
    <label for="card-name">Cardholder name</label>
    <input type="text" name="card-name" placeholder="FIRSTNAME LASTNAME" />
    <div class="valid">
      <div class="valid-flex">
        <label for="valid-month">Month</label>
        <select name="valid-month">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
        </select>
      </div>
      <div class="valid-flex">
        <label for="valid-year">Year</label>
        <select name="valid-year">
          <option value="2021">2021</option>
          <option value="2022">2022</option>
          <option value="2023">2023</option>
          <option value="2024">2024</option>
          <option value="2025">2025</option>
        </select>
      </div>
    </div>
    <label for="vendor">vendor</label>
    <select name="vendor">
      <option value="bitcoin">Bitcoin Inc</option>
      <option value="blockchain">Blockchain Inc</option>
      <option value="evilcorp">Evil Corp</option>
      <option value="ninja">Ninja Bank</option>
    </select>
    <button class="inverted-btn">Add Card</button>
  </form>
</template>

<script>
export default {};
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
