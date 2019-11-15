<template>
<div class="home_content">
  <div class="row-1">
    <img class="row-1-item" src='../assets/home/首页标题.jpg' alt="首页标题"/>
    <div class="row-1-item audio"><a href="https://v.qq.com/x/page/l08052uardu.html" target="_blank" title="点击观看视频">视频播放</a></div>
    <img class="row-1-item" src='../assets/home/现有的数字资产价值.jpg' alt="现有的数字资产价值"/>
  </div>
  <div class="row-2">
    <img class="row-2-item" src='../assets/home/时间轴.png' alt="时间轴"/>
  </div>
  <Divider ></Divider>
  <div>
    <router-link to="./introduction"><Button type="primary">查看更多</Button></router-link>
    <router-link to="./appDownload"><Button type="primary">下载APP</Button></router-link>
  </div>
</div>
</template>
<script>
import { Button, Divider } from 'view-design'
export default {
  name: 'Home',
  components: {
    Button,
    Divider
  },
  data () {
    return {

    }
  }
}
</script>
<style lang="less" scoped>
.home_content {
  .row-1 {
    display: flex;
    justify-content: space-around;
    height: 300px;
    width: 94%;
    margin: 0 auto;
    .audio {
      display: flex;
      align-items: center;
      justify-content: center;
      background: #090f27;
      border: 1px solid #121814;
    }
    &-item {
      width: 30%;
    }
  }
  .row-2 {
    width: 100%;
    &-item {
      width: 100%;
    }
  }
}
</style>
