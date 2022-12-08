<!--
可定制插槽和 CSS 过渡效果的模态框组件。
-->
<script setup>
import ModalVue from "./Modal.vue";
import { ref } from "vue";

const showModal = ref(false);
</script>

<template>
  <button id="show-modal" @click="showModal = true">Show Modal</button>
  <!-- Teleport: 内置组件，将一个组件内部的一部分模板‘传送’到该组件的DOM结构外层的位置去，如下：将Modal组件的template模板传送到Modal组件DOM结构的外层 -->
  <Teleport to="body">
    <!-- 使用这个 modal 组件，传入 prop -->
    <ModalVue :show="showModal" @close="showModal = false">
      <template #header>
        <h3>custom header</h3>
      </template>
    </ModalVue>
  </Teleport>
</template>

<style scoped>
#show-modal {
  border: 1px solid #000;
  border-radius: 2px;
  padding: 2px 4px;
}
</style>
