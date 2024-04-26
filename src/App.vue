<script setup>
import { Check, Delete, Edit, Message, Search, Star, } from '@element-plus/icons-vue'
</script>

<template>
  <nav class="navbar navbar-expand-lg bg-light">
    <div >
      <!-- <a class="navbar-brand" href="/#"> </a> -->
      <!-- <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button> -->
      <span class="text-center">
        请假系统
      </span>
      <span></span>
    </div>
  </nav>
  <!-- <img src="/vite.svg" class="logo" alt="Vite logo" /> -->

  <!-- <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" /> -->
  <div class="container-fluid text-center" align-center>
    <router-view></router-view>
  </div>
</template>
<script>

import {
  House,
  Check,
  Delete,
  Edit,
  Message,
  Search,
  Star,
} from '@element-plus/icons-vue'</script>

<style scoped>
 
</style>
