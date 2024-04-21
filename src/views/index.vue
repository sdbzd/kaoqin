<template>
  <h4>Index{{ msg }}</h4>

  <div class="mb-8">

    <!-- <router-link to="/">首页</router-link> -->
    <el-button type="primary"><router-link to="/qingjia"> 请假</router-link></el-button>
    <el-button type="success"> <router-link to="/waiqin">外勤</router-link></el-button>
    <el-button type="info"> <router-link to="/baobei">报备</router-link></el-button>
    <el-button type="warning"><router-link to="/view">查看</router-link></el-button>
    <el-button type="danger"><router-link to="/buka">补卡</router-link></el-button>
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
  <!-- 
  <div class="mb-8 card">
    <el-button type="primary" round @click="goQingjia">请假</el-button>
    <el-button type="success" round>
      <RouterLink to="/waqin">外勤</RouterLink>
    </el-button>
    <el-button type="info" round>报备</el-button>
    <el-button type="warning" round>查看</el-button>
  </div>
  <div class="card"></div>

  <div class="card">
    <el-button :icon="Search" circle />
    <el-button type="primary" :icon="Edit" circle />
    <el-button type="success" :icon="Check" circle />
    <el-button type="info" :icon="Message" circle />
    <el-button type="warning" :icon="Star" circle />
    <el-button type="danger" :icon="Delete" circle />
  </div> -->

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
import { Check, Delete, Edit, Message, Search, Star, } from '@element-plus/icons-vue'
import { useRouter, useRoute } from 'vue-router';
defineProps({
  msg: String,
})
const router = useRouter();
const route = useRoute();
function goQingjia() {
  console.log("test")
  router.push({ path: '/qingjia' })
  console.log("test2")
}

const count = ref(0)
</script>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
