<template>
    <el-page-header @back="goHome" title="返回" >
        <template #content>
            <!-- <el-button :icon="House" circle /><span class="text-large font-600 mr-3"> 主页
                </span>  <span class="text-large font-600 mr-3"> </span> -->
                <span class="text-large font-600 mr-3">{{ msg }} </span>
        </template>
    </el-page-header>
</template>
  
<script  setup>
import { ArrowLeft, House } from '@element-plus/icons-vue'
import { useRouter, useRoute } from 'vue-router';
defineProps({
    msg: String,
})
const router = useRouter();
const route = useRoute();
function goHome() {
    console.log("test")
    router.push({ path: '/' })
    console.log("home")
}

</script>
  