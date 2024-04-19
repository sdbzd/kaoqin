
<template>
  <h4>{{ msg }}<router-link to="/">返回</router-link></h4>

  <div class="card">
    <!-- <button type="button" @click="count++">count is {{ count }}</button> -->
 
  </div>
  
    <!-- <div class="mb-4">
      <el-button>Default</el-button>
      <el-button type="primary">Primary</el-button>
      <el-button type="success">Success</el-button>
      <el-button type="info">Info</el-button>
      <el-button type="warning">Warning</el-button>
      <el-button type="danger">Danger</el-button>
    </div>

    <div class="mb-4">
      <el-button plain>Plain</el-button>
      <el-button type="primary" plain>Primary</el-button>
      <el-button type="success" plain>Success</el-button>
      <el-button type="info" plain>Info</el-button>
      <el-button type="warning" plain>Warning</el-button>
      <el-button type="danger" plain>Danger</el-button>
    </div>
-->
    <div class="mb-8 card">     
      <el-button type="primary" round>请假</el-button>
      <el-button type="success" round>外勤</el-button>
      <el-button type="info" round>报备</el-button>
      <el-button type="warning" round>查看</el-button>
    </div> 
    <div class="card">

    </div>

    <div class="card">
      <el-button :icon="Search" circle />
      <el-button type="primary" :icon="Edit" circle />
      <el-button type="success" :icon="Check" circle />
      <el-button type="info" :icon="Message" circle />
      <el-button type="warning" :icon="Star" circle />
      <el-button type="danger" :icon="Delete" circle />
    </div>
 


  <!-- <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >create-vue</a
    >, the official Vue + Vite starter
  </p>
  <p>
    Install
    <a href="https://github.com/vuejs/language-tools" target="_blank">Volar</a>
    in your IDE for a better DX
  </p> -->
  <!-- <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p> -->
</template>

<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})
import {
  Check,
  Delete,
  Edit,
  Message,
  Search,
  Star,
} from '@element-plus/icons-vue'
const count = ref(0)
</script>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
