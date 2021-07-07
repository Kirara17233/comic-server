<template>
    <a :href="id">
    <img class="comic-pic" :src="comic_pic">
    <span>第35话</span>
    </a>
    <a href="/19751/">皇女，刻印反叛者</a>
    <span>2021-06-30</span>
</template>

<script setup>
import { defineProps, reactive } from 'vue'

defineProps({
  comic_id: Number
})

const id = '/' + comic_id + '/'

const state = reactive({
  id: '/' + comic_id + '/',
  pic_url: "https://res.cocomanhua.com/comic" + id + "cover.jpg"
})
</script>
