<template>
  <my-title msg="报备"></my-title>
  <h4>{{ msg }} </h4>
  <div id="container"></div>
  <!--  <div class="">
    <div class="flx-align-center mb-10">
      <el-input v-model="address" class="address mr-20" id="address" placeholder="请输入地址"></el-input>
      <el-button type="primary" @click="search">查询</el-button>
      <el-button type="primary" @click="saveAdress">保存</el-button>
    </div> 
    
  </div>-->

  <div class="">
    <el-form :model="form" label-width="auto" style="max-width: 600px">
    </el-form>

    <el-form>
      <!-- <el-form-item label="地点选择">
        <el-button v-model="form.desc" title="button" v-text="msg" />
      </el-form-item> -->
      <!-- <el-form-item label="地点">
        <el-radio-group v-model="form.resource">
          <el-radio value="Sponsor">南校区</el-radio>
          <el-radio value="Venue">北校区</el-radio>
          <el-radio value="Venue">东校区</el-radio>
          <el-radio value="Venue">其他</el-radio>
        </el-radio-group>
      </el-form-item> -->
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


</template>



<!-- <style scoped>
.read-the-docs {
  color: #888;
}
</style> -->
<script setup name="map">
import { ref, reactive } from 'vue'
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
import { onMounted, onUnmounted } from "vue";
import AMapLoader from "@amap/amap-jsapi-loader";

let map = null;

const getLocation = () => {
  const self = this
  AMap.plugin('AMap.Geolocation', function () {
    var geolocation = new AMap.Geolocation({
      // 是否使用高精度定位，默认：true
      enableHighAccuracy: true,
      //是否使用安卓定位sdk用来进行定位，需要安卓端sdk配合
      useNative: true,
      // 设置定位超时时间，默认：无穷大
      timeout: 10000,
      needAddress : true,
    })

    geolocation.getCurrentPosition()
    // AMap.event.addListener(geolocation, 'complete', onComplete);
    // AMap.event.addListener(geolocation, 'error', onError);

    function onComplete(data) {
      // data是具体的定位信息
      console.log('定位成功信息：', data);
    }
  //定位错误，使用另一方式定位
    function onError(data) {
      // 定位出错
      console.log('定位失败错误：', data);
      // 调用ip定位
      self.getLngLatLocation();
    }
  })
}
const getLngLatLocation = () => {
  AMap.plugin('AMap.CitySearch', function () {
    var citySearch = new AMap.CitySearch();
    citySearch.getLocalCity(function (status, result) {
      if (status === 'complete' && result.info === 'OK') {
        // 查询成功，result即为当前所在城市信息
        console.log('通过ip获取当前城市：', result)
        //逆向地理编码
        AMap.plugin('AMap.Geocoder', function () {
          var geocoder = new AMap.Geocoder({
            // city 指定进行编码查询的城市，支持传入城市名、adcode 和 citycode
            city: result.adcode
          })

          var lnglat = result.rectangle.split(';')[0].split(',');
          geocoder.getAddress(lnglat, function (status, data) {
            if (status === 'complete' && data.info === 'OK') {
              // result为对应的地理位置详细信息
              console.log(data)
            }
          })
        })
      }
    })
  })
}

onMounted(() => {
  AMapLoader.load({
    key: "5576dff99507e4ce3a07479e2f78788d", // 申请好的Web端开发者Key，首次调用 load 时必填
    version: "2.0", // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
    plugins: ['AMap.ToolBar', 'AMap.MapType', 'AMap.Geolocation', 'AMap.Geocoder', 'AMap.AMapManager', 'AMap.Marker'], // 需要使用的的插件列表，如比例尺'AMap.Scale'等
  })
    .then((AMap) => {
      map = new AMap.Map("container", {
        // 设置地图容器id
        viewMode: "2D", // 是否为3D地图模式
        zoom: 16, // 初始化地图级别
        // center: [116.397428, 39.90923], // 初始化地图中心点位置
        center: [113.535792,34.817184],
      });
      getLocation();
    })
    .catch((e) => {
      console.log(e);
    });

  
});

onUnmounted(() => {
  map?.destroy();
});

</script>

<style lang="scss">
.map {
  // position: relative;
  width: 100%;
  height: 600px;
}

.amap-icon {
  width: 100px !important;
  height: 100px !important;
  overflow: inherit !important;
}
</style>
<style scoped>
#container {
  padding: 0px;
  margin: 0px;
  width: 100%;
  height: 400px;
}
</style>
