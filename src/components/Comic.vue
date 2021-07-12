<template>
  <a :href="comic.id">
    <img class="comic-pic" :src="'https://res.cocomanhua.com/comic/' + comic.id + '/cover.jpg'">
    <span>{{ comic.latest }}</span>
  </a>
  <a :href="comic.id">{{ comic.name }}</a>
  <span>{{ comic.update.substr(0, 10) }}</span>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps({
  comic: Object
})
</script>

<style scoped>
.comic-pic {
  width: 150px;
  height:200px;
  object-fit: cover;
}
</style>
