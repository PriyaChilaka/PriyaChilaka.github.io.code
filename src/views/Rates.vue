<template>
  <div class="exchange-rates">
    <div v-if="rates.length === 0">
      <span class="loader is-size-2" />
    </div>
    <div v-else>
      <h1 class="title"><br />Foreign Exchange Rates: {{ date }}</h1>

      <table class="table is-striped">
        <thead>
          <tr>
            <th>Currency</th>
            <th>Rate</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(key, value) in sortData(rates)" :key="value">
            <td>{{ value }}</td>
            <td>{{ formatNum(key) }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from "axios";

const URL = "https://api.exchangeratesapi.io/latest";

export default {
  name: "exchange-rates",
  data: () => ({
    date: [],
    rates: [],
    errors: []
  }),

  mounted() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      axios
        .get(URL)
        .then(response => {
          this.rates = response.data.rates;
          this.date = response.data.date;
        })
        .catch(error => this.errors.push(error));
    },
    sortData(rates) {
      const orderedRates = {};
      Object.keys(rates)
        .filter(rate => rate !== "NZD")
        .sort()
        .forEach(function(key) {
          orderedRates[key] = rates[key];
        });
      return orderedRates;
    },
    formatNum(num) {
      return num.toLocaleString("en-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h1 {
  margin: 1rem 0;
}
a {
  color: #42b983;
}
.exchange-rates {
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
}
.table {
  width: 70%;
  margin: 0 auto;
}
@media (max-width: 575.98px) {
  .table {
    width: 90%;
  }
}
</style>