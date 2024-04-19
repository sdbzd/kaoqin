<script setup>
import { Check,Delete,Edit,Message,Search,Star,} from '@element-plus/icons-vue'
</script>
<template>
  <!-- <img src="/vite.svg" class="logo" alt="Vite logo" /> -->

  <!-- <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" /> -->

  <router-view></router-view>
</template>

<style scoped>
.logo {
  height: 3em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
