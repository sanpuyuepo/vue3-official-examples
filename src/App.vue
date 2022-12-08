<script setup>
// import MarkdownEditor from "./components/MarkdowEditor";
</script>

<template>
  <h1>Official Website Examples</h1>
  <hr />
  <p>
    <router-link to="/">Markdown Editor</router-link> |
    <router-link to="/fetch-data">Fetch Data</router-link> |
    <router-link to="/grid">Grid</router-link> |
    <router-link to="/tree-view">Tree View</router-link> |
    <router-link to="/shuffle-list">Shuffle List</router-link> |
    <router-link to="/modal">Modal</router-link> |
    <router-link to="/todo-mvc/all">TodoMVC</router-link>
  </p>
  <!-- 路由出口 -->
  <router-view></router-view>
</template>

<style>
@import "https://unpkg.com/todomvc-app-css@2.4.1/index.css";
</style>
