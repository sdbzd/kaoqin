<script setup>
import { onMounted, onUnmounted } from "vue";
import AMapLoader from "@amap/amap-jsapi-loader";
import { ElMessage } from 'element-plus';
let map = null;
const canvas = document.getElementById("container");
// const ctx = canvas.getContext('2d', {willReadFrequently: true});
onMounted(() => {
  AMapLoader.load({
    key: "5576dff99507e4ce3a07479e2f78788d", // 申请好的Web端开发者Key，首次调用 load 时必填
    version: "2.0", // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
    plugins: [
      'AMap.ToolBar',
      'AMap.Scale',
      'AMap.Geolocation',
      'AMap.PlaceSearch',
      'AMap.AutoComplete',
      'AMap.Geocoder',
      'AMap.CitySearch'
    ], // 需要使用的的插件列表，如比例尺'AMap.Scale'等
  })
    .then((AMap) => {
      //  canvas.getContext('2d', {willReadFrequently: true});        
      const map = new AMap.Map("container", {
        // 设置地图容器id
        viewMode: "3D", // 是否为3D地图模式
        zoom: 16, // 初始化地图级别
        // center: [116.397428, 39.90923], // 初始化地图中心点位置
        center: [113.53591, 34.817077],
      });
      //   AMap.plugin('AMap.ToolBar',function(){ 
      //     var toolbar = new AMap.ToolBar(); //缩放工具条实例化
      //     map.addControl(toolbar);
      // });
      AMap.plugin('AMap.Geolocation', function () {
        var GeolocationBar = new AMap.Geolocation(); //缩放工具条实例化
        map.addControl(GeolocationBar);
      });

      // getLocation2();
      getCurrentLocation();

    })
    .catch((e) => {
      console.log(e);
    });
});
// //解析定位结果
const onComplete = (data) => {
  console.log('定位结果：' + data.position) //经纬度信息
  open2();
  // ElMessage({
  //   message: 'Congrats, this is a success message.'+data.position,
  //   type: 'success',
  // })
  // let lnglat = data.position;
  // let marker = new AMap.Marker({  //创建标记
  //   position: new AMap.LngLat(lnglat[0], lnglat[1])
  // })
  // this.map.clearMap()// 清除所有覆盖物（点标志）
  // this.map.add(marker)// 添加点标志
  // let that = this
  // //经纬度转换为中文地址详情
  // that.geocoder.getAddress(lnglat, function (status, result) {
  //   if (status === 'complete' && result.regeocode) {
  //     that.address = result.regeocode.formattedAddress;
  //     that.showInfoWindow(marker);//自定义信息窗体
  //   } else {
  //     that.$message.error('根据经纬度查询地址失败')
  //   }
  // })
};
//   //解析定位错误信息
const onError = (data) => {
  console.log("eddrror" + data);
  open4();
  ElMessage({
    message: ' error' + data.message,
    type: 'warning',
  })
  // this.getLngLatLocation()
};
//   //在获取具体定位失败时调用的代码：（非精准定位！！！）
//   getLngLatLocation() {
//     const that = this;
//     that.geolocation.getCityInfo(function (status, result) {
//       if (status === 'complete') {
//         let data = result.position
//         that.address = result.province + result.city;
//         that.showLocation(data)
//       } else {
//         that.$message.error('获取地址失败')
//       }
//     })
//   },
//获取当前定位
const getCurrentLocation = () => {
  var geolocation = new AMap.Geolocation({
    timeout: 3000,          //超过3秒后停止定位，默认：5s
    enableHighAccuracy: true,
    zoomToAccuracy: true,   //定位成功后是否自动调整地图视野到定位点
  })
  geolocation.getCurrentPosition(function (status, result) {
    //备注：getCurrentPosition方法会调用超时或失败：
    //Get geolocation time out：浏览器定位超时，包括原生的超时，可以适当增加超时属性的设定值以减少这一现象。
    //另外还有个别浏览器（如google Chrome浏览器等）本身的定位接口是黑洞，通过其请求定位完全没有回应，也会超时返回失败。
    //Get geolocation failed：定位失败，Chrome、火狐以及部分套壳浏览器接入的定位服务在国外，有较大限制，失败率高。
    console.log(status, result);
    if (status == 'complete') {
      // 
      onComplete(result)

    } else {
      onError(result) //失败后可使用getCityInfo获取非精准定位（具体到省市）
    }
  })
};
const getLocation2 = () => {
  const geolocation = AMap.plugin('AMap.Geolocation', function () {
    var geolocation = new AMap.Geolocation({
      // 是否使用高精度定位，默认：true
      enableHighAccuracy: true,
      //是否使用安卓定位sdk用来进行定位，需要安卓端sdk配合
      useNative: true,
      // 设置定位超时时间，默认：无穷大
      timeout: 10000,
      needAddress: true,
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
      // self.getLngLatLocation();
    }
  })
};
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
onUnmounted(() => {
  map?.destroy();
});

const open2 = () => {
  ElMessage({
    message: 'Congrats, this is a success message.',
    type: 'success',
  })
}
const open3 = () => {
  ElMessage({
    message: 'Warning, this is a warning message.',
    type: 'warning',
  })
}
const open4 = () => {
  ElMessage.error('Oops, this is a error message.')
}
</script>

<template>
  <div id="container"></div>
</template>

<style scoped>
#container {
  width: 100%;
  height: 500px;
}
</style>,,
