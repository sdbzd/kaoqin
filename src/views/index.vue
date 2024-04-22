<template>
  <h4>Index{{ msg }}</h4>

  <div class="mb-8 card">
    <!-- <router-link to="/">首页</router-link> -->
    <router-link to="/qingjia"><el-button type="primary"> 请假</el-button></router-link>
   <router-link to="/waiqin">  <el-button type="success"> 外勤</el-button></router-link>
   <router-link to="/baobei"><el-button type="info"> 报备 </el-button></router-link>
   <router-link to="/view"> <el-button type="warning">查看 </el-button> </router-link>
   <router-link to="/buka"><el-button type="danger">补卡</el-button></router-link>
  </div>

  <MyActivity></MyActivity>
  

   
</template>

<script setup>
import { ref } from 'vue'
import { Check, Delete, Edit, Message, Search, Star, } from '@element-plus/icons-vue'
import { useRouter, useRoute } from 'vue-router';
import Activity from "../components/MyActivity.vue"
import MyActivity from '../components/MyActivity.vue';
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
