<script setup>
import { ref, watchEffect } from "vue";

const API_URL = `https://api.github.com/repos/vuejs/core/commits?per_page=3&sha=`;

const branches = ["main", "v2-compat"];

const curBrach = ref(branches[0]);
const commits = ref(null);

watchEffect(async () => {
  const url = `${API_URL}${curBrach.value}`;
  commits.value = await (await fetch(url)).json();
});

function truncate(v) {
  const newline = v.indexOf("\n");
  return newline > 0 ? v.slice(0, newline) : v;
}

function formateDate(v) {
  return v.replace(/T|Z/g, " ");
}
</script>

<template>
  <h2>Latest Vue Core Commits</h2>
  <template v-for="(branch, index) in branches" :key="index">
    <input
      type="radio"
      :id="branch"
      :value="branch"
      name="branch"
      v-model="curBrach" />
    <label :for="branch">{{ branch }}</label>
  </template>
  <p>vuejs/vue@{{ curBrach }}</p>
  <ul>
    <li
      v-for="({ html_url, sha, author, commit }, index) in commits"
      :key="index">
      <a :href="html_url" target="_blank" class="commit">{{
        sha.slice(0, 7)
      }}</a>
      - <span class="message">{{ truncate(commit.message) }}</span
      ><br />
      by
      <span class="author">
        <a :href="author.html_url" target="_blank">{{ commit.author.name }}</a>
      </span>
      at <span class="date">{{ formateDate(commit.author.date) }}</span>
    </li>
  </ul>
</template>

<style scoped>
a {
  text-decoration: none;
  color: #42b883;
}

li {
  line-height: 1.5em;
  margin-bottom: 20px;
}

.author,
.date {
  font-weight: bold;
}
</style>
