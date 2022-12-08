<script setup>
import { ref } from "vue";
import GridVue from "../../components/Grid.vue";

const searchQuery = ref("");
const gridColumns = ["name", "power", "age"];
const gridData = [
  { name: "Chuck Matilda", power: Infinity, age: 22 },
  { name: "Bruce Lee", power: 9000, age: 21 },
  { name: "Jackie Chen", power: 7000, age: 19 },
  { name: "Jet Li", power: 8000, age: 25 },
];
</script>

<template>
  <form id="search" @submit.prevent>
    Search: <input type="text" name="query" v-model="searchQuery" />
  </form>
  <GridVue :data="gridData" :columns="gridColumns" :filter-key="searchQuery" />
</template>

<style scoped>
#search {
  margin-bottom: 10px;
}
</style>
