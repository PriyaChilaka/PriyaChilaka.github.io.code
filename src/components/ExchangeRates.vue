<template>
  <div class="exchange">
    <h1>{{ msg }}</h1>
    <p>
      Check rates, send money securely, set rate alerts, receive notifications
      and more
    </p>

    <select v-model="selected">
      <option disabled value="">Select currency</option>
      <option>Euro</option>
      <option>INR</option>
      <option>SEK</option>
    </select>

    <b-button type="button" v-on:click="onClick">Click</b-button>
  </div>
</template>

<script>
export default {
  name: "ExchangeRates",
  data() {
    return {
      selected: "",
      userName: this.msg
    };
  },
  props: {
    msg: String
  },
  methods: {
    onClick: function() {
      alert("Thank you");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h1 {
  margin: 0;
}

.img {
  height: 1px;
}
</style>
