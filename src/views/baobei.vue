<template>
  <my-title msg="报备"></my-title>
  <h4>{{ msg }} </h4>
  <div id="container" ></div>
 <!--  <div class="">
    <div class="flx-align-center mb-10">
      <el-input v-model="address" class="address mr-20" id="address" placeholder="请输入地址"></el-input>
      <el-button type="primary" @click="search">查询</el-button>
      <el-button type="primary" @click="saveAdress">保存</el-button>
    </div> 
    
  </div>-->

  <div class="">
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

      <el-form-item label="地点选择">
        <el-button v-model="form.desc" title="button" v-text="msg" />
      </el-form-item>
      <el-form-item label="地点">
        <el-radio-group v-model="form.resource">
          <el-radio value="Sponsor">南校区</el-radio>
          <el-radio value="Venue">北校区</el-radio>
          <el-radio value="Venue">东校区</el-radio>
          <el-radio value="Venue">其他</el-radio>
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



<!-- <style scoped>
.read-the-docs {
  color: #888;
}
</style> -->
<script setup lang="js" name="map">
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

onMounted(() => {
  AMapLoader.load({
    key: "5576dff99507e4ce3a07479e2f78788d", // 申请好的Web端开发者Key，首次调用 load 时必填
    version: "2.0", // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
    plugins: ["AMap.Scale"], // 需要使用的的插件列表，如比例尺'AMap.Scale'等
  })
    .then((AMap) => {
      map = new AMap.Map("container", {
        // 设置地图容器id
        viewMode: "3D", // 是否为3D地图模式
        zoom: 11, // 初始化地图级别
        center: [116.397428, 39.90923], // 初始化地图中心点位置
      });
    })
    .catch((e) => {
      console.log(e);
    });
});

onUnmounted(() => {
  map?.destroy();
});
// import { MAP_KEY } from "@/config/config";
// import AMapLoader from "@amap/amap-jsapi-loader";
// import { nextTick, onMounted, ref } from "vue";
// import img_icon from "@/assets/images/mark_bs.png";
// import { ElMessage } from "element-plus";
// console.log(img_icon, "icon");

// const address = ref("");

// let geocoder: any;
// const map = ref<any>(null);
// let locationArr = ref<number[]>([116.397428, 39.90923]);
// const initMap = () => {
//   AMapLoader.load({
//     key: MAP_KEY, //api服务key--另外需要在public中使用安全密钥！！！
//     version: "2.0", // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
//     plugins: ["AMap.ToolBar", "AMap.Scale", "AMap.HawkEye", "AMap.MapType", "AMap.Geolocation", "AMap.Geocoder"] // 需要使用的的插件列表
//   })
//     .then(async AMap => {
//       map.value = new AMap.Map("container", {
//         //设置地图容器id
//         viewMode: "2D", //是否为3D地图模式
//         zoom: 18, //初始化地图级别
//         icon: img_icon,
//         center: locationArr.value //初始化地图中心点位置
//       });
//       // map.value.addControl(new AMap.Scale());  // 工具条，控制地图的缩放、平移等
//       // map.value.addControl(new AMap.ToolBar());// 比例尺，显示当前地图中心的比例尺
//       // map.value.addControl(new AMap.HawkEye());// 鹰眼，显示缩略图
//       // map.value.addControl(new AMap.MapType()); // 地图类型，切换卫星地图
//       // map.value.addControl(new AMap.Geolocation()); // 定位，提供了获取用户当前准确位置、所在城市的方法

//       // const icon = new AMap.Icon({
//       // 	size: new AMap.Size(40, 50), //图标的大小
//       // 	imageSize: new AMap.Size(40, 50), //图标的大小
//       // 	image: img_icon,
//       // 	imageOffset: new AMap.Pixel(0, -40)
//       // });

//       const content =
//         '<div class="amap-icon" style="position: absolute; overflow: hidden; width: 19px; height: 33px; opacity: 1;"><img src="https://webapi.amap.com/theme/v1.3/markers/b/mark_bs.png" style="width: 19px; height: 33px; top: 0px; left: 0px;"></div>';
//       const marker = new AMap.Marker({
//         // icon: icon,
//         content,
//         // position: new AMap.LngLat(116.397428, 39.90923), // 经纬度对象，也可以是经纬度构成的一维数组[116.39, 39.9]
//         position: locationArr.value, // 经纬度对象，也可以是经纬度构成的一维数组[116.39, 39.9]
//         title: "",
//         offset: new AMap.Pixel(-10, -30)
//       });

//       // 将创建的点标记添加到已有的地图实例：
//       map.value.add(marker);

//       geocoder = new AMap.Geocoder({ city: "" });
//       console.log(geocoder, "初始化geocoder");

//       // 为地图注册click事件获取鼠标点击出的经纬度坐标
//       map.value.on("click", function (e: { lnglat: { getLng: () => string; getLat: () => string } }) {
//         const lngLats: number[] = [+e.lnglat.getLng(), +e.lnglat.getLat()];
//         console.log(lngLats);
//         geocoder.getAddress(lngLats, (status: any, result: any) => {
//           console.log("result", lngLats, status, result);
//           if (status === "complete" && result.info === "OK") {
//             // result中对应详细地理坐标信息
//             console.log("result", result.regeocode);
//             locationArr.value = lngLats;
//             // map.value.setCenter(lngLats); // 设置中心点
//             marker.setPosition(lngLats); // 标记点位置
//             address.value = result.regeocode.formattedAddress;
//           } else {
//             ElMessage.error("获取失败");
//           }
//         });
//       });
//     })
//     .catch(e => {
//       console.log(e, "error啊");
//       ElMessage.error(e);
//     });
// };

// const search = () => {
//   geocoder.getLocation(address.value, (status: any, result: any) => {
//     console.log("result", address.value, status, result);
//     if (status === "complete" && result.info === "OK") {
//       // result中对应详细地理坐标信息
//       console.log("result", result);
//       console.log("result", result.geocodes[0].location);
//       let lngLat = [result.geocodes[0].location.lng, result.geocodes[0].location.lat];
//       console.log("result", lngLat);
//       locationArr.value = lngLat;
//       initMap();
//     } else {
//       ElMessage.error("查询失败");
//     }
//   });
// };

// const saveAdress = () => { };

// onMounted(async () => {
//   await nextTick();
//   initMap();
// });
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
  padding:0px;
        margin: 0px;
  width: 100%;
  height: 400px;
}
</style>
