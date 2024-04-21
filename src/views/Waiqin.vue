
<template>
  <my-title  msg="外勤"></my-title>
  <!-- <h4>{{ msg }}<router-link to="/"><<<<返回</router-link></h4> -->

  <div class="card">
    <el-form :model="form" label-width="auto" style="max-width: 600px">
      <!-- <el-form-item label="Activity name">
        <el-input v-model="form.name" />
      </el-form-item> -->
      <!-- <el-form-item label="Activity zone">
        <el-select v-model="form.region" placeholder="please select your zone">
          <el-option label="Zone one" value="shanghai" />
          <el-option label="Zone two" value="beijing" />
        </el-select>
      </el-form-item> -->
      <el-form-item label="开始时间">
        <el-col :span="11">
          <el-date-picker v-model="form.date1" type="date" placeholder="Pick a date" style="width: 100%" />
        </el-col>

        <el-col :span="2" class="text-center">
          <span class="text-gray-500">-</span>
        </el-col>
        <el-col :span="11">
          <el-time-picker v-model="form.date2" placeholder="Pick a time" style="width: 100%" />
        </el-col>


      </el-form-item>
      <el-form-item label="结束时间">
        <el-col :span="11">
          <el-date-picker v-model="form.date1" type="date" placeholder="Pick a date" style="width: 100%" />
        </el-col>

        <el-col :span="2" class="text-center">
          <span class="text-gray-500">-</span>
        </el-col>
        <el-col :span="11">
          <el-time-picker v-model="form.date2" placeholder="Pick a time" style="width: 100%" />
        </el-col>


      </el-form-item>
      <!-- <el-form-item label="Instant delivery">
        <el-switch v-model="form.delivery" />
      </el-form-item> -->
      <!-- <el-form-item label="请假原因">
        <el-checkbox-group v-model="form.type">
          <el-checkbox value="Online activities" name="type">
            病假
          </el-checkbox>
          <el-checkbox value="Promotion activities" name="type">
            事假
          </el-checkbox>
          <el-checkbox value="Offline activities" name="type">
            其他
          </el-checkbox>
          <el-checkbox value="Simple brand exposure" name="type">
            Simple
          </el-checkbox>
        </el-checkbox-group>
      </el-form-item> -->
      <el-form-item label="请假原因">
        <el-radio-group v-model="form.resource">
          <el-radio value="Sponsor">病假</el-radio>
          <el-radio value="Venue">事假</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="备注">
        <el-input v-model="form.desc" type="textarea" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">确定</el-button>
        <el-button>重填</el-button>
      </el-form-item>
    </el-form>
    <!-- <button type="button" @click="count++">count is {{ count }}</button> -->

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
import { ref ,reactive} from 'vue'
import MyTitle from '../components/Header.vue'
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
const form = reactive({
  name: '',
  region: '',
  date1: '',
  date2: '',
  delivery: false,
  type: [],
  resource: '',
  desc: '',
})

const onSubmit = () => {
  console.log('submit!')
}
</script>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
