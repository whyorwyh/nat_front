<template>
  <div class="appDownload_content">
    <div class="top-section">
      <div class="left">
        <img class="left-img" src='../assets/appDownload/注册图片.png'/>
      </div>
      <div class="right">
        <p>手机浏览器输入pi.app下载移动客户端APP，即刻开启您的NAT之旅。官方邀请码：xxxx</p>
        <p class="attention">（请务必填写此邀请码，找客服验证后入群学习）</p>
        <div class="qrCode">
          <img class="tabPane1_content-item" src='../assets/appDownload/苹果手机.png'/>
          <img class="tabPane1_content-item" src='../assets/appDownload/安卓手机.png'/>
        </div>
      </div>
    </div>
    <div class="bottom-section">
      <Divider ></Divider>
      <h5 class="title">联系我们</h5>
      <p class="desc attention">请填写正确的邀请码，验证后入群学习NAT相关知识，获取百倍收益</p>
      <div class="qrCode">
        <img class="tabPane1_content-item" src='../assets/appDownload/微信二维码1.png'/>
        <img class="tabPane1_content-item" src='../assets/appDownload/微信二维码2.png'/>
      </div>
    </div>
  </div>
</template>
<script>
import { Divider } from 'view-design'
export default {
  name: 'FileRead',
  components: {
    Divider
  },
  data () {
    return {

    }
  }
}
</script>
<style lang="less" scoped>
.appDownload_content {
  .top-section {
    font-size: 16px;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    .left {
      width: 30%;
      text-align: left;
      img {
        width: 50%;
      }
    }
    .right {
      width: 70%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      color: #ffffff;
      .p {
        padding: 20px;
      }
      .attention {
        color: red;
      }
    }
  }
  .bottom-section {
    font-size: 16px;
    text-align: center;
    .title {
      color: #ffffff;
    }
    .desc {
      padding: 20px;
      color: red;
    }
    .qrCode {

    }
  }
}
</style>
