<template>
  <div>
    <div>
        筛选
    </div>
    <div>
      <ul id="list">
      </ul>
    </div>
  </div>
  <HelloWorld msg="Hello Vue 3 + Vite" />
</template>

<script setup>
import Comic from './components/Comic.vue'

const ListRendering = {
  data() {
    return {
      comics: axios.get('/public/data.json')
      .then(response => response.data.list)
    }
  }
};

// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/script-setup-2/active-rfcs/0000-script-setup.md
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
