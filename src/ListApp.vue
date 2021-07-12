<template>
  <div>
    <div>
        筛选
    </div>
    <div>
      <ul>
        <li v-for="comic in comics">
          <Comic :comic="comic" />
        </li>
      </ul>
    </div>
  </div>
  <HelloWorld msg="Hello Vue 3 + Vite" />
</template>

<script setup>
import Comic from './components/Comic.vue'
import { ref } from "vue";
import axios from 'axios'

const nPages = ref(0)
const comics = ref(null)
axios.get('http://kira7.com/data/page/30/1').then(response => {
  nPages.value = response.data.nPages
  comics.value = response.data.list
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
