<script setup>
import { ref } from "vue";
import TreeItem from "./TreeItem.vue";

const treeData = ref({
  name: "Yopox Tree",
  children: [
    { name: "hello" },
    { name: "world" },
    {
      name: "child folder",
      children: [
        {
          name: "child folder",
          children: [{ name: "hello" }, { name: "world" }],
        },
        { name: "hello" },
        { name: "world" },
        {
          name: "child folder",
          children: [{ name: "hello" }, { name: "world" }],
        },
      ],
    },
  ],
});
</script>

<template>
  <ul>
    <TreeItem class="item" :model="treeData" />
  </ul>
</template>

<style scoped>
.item {
  cursor: pointer;
  line-height: 1.5;
}
</style>
