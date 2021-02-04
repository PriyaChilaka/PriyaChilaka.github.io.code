<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.jpg" />
    <ExchangeRates msg="Welcome to ExchangeRates " />
  </div>
</template>

<script>
// @ is an alias to /src
import ExchangeRates from "@/components/ExchangeRates.vue";

export default {
  name: "Home",

  components: {
    ExchangeRates
  }
};
</script>
<style scoped lang="scss">
</style>