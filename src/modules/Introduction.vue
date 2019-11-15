<template>
  <div class="introduction_content">
    <Tabs :value="tabName">
      <TabPane label="何为NAT" name="1" >
        <div class="tabPane1_content">
          <img class="tabPane1_content-item" src='../assets/whatNat/NAT1.png' alt="NAT1"/>
          <img class="tabPane1_content-item" src='../assets/whatNat/NAT2.png' alt="NAT2"/>
          <img class="tabPane1_content-item" src='../assets/whatNat/技术1.png' alt="技术1"/>
          <img class="tabPane1_content-item" src='../assets/whatNat/技术2.png' alt="技术2"/>
          <img class="tabPane1_content-item" src='../assets/whatNat/为何要推出.png' alt="为何要推出"/>
          <img class="tabPane1_content-item" src='../assets/whatNat/应用场景.png' alt="应用场景">
        </div>
        <Divider ></Divider>
        <router-link to="./appDownload"><Button type="primary">联系我们了解更多</Button></router-link>
      </TabPane>
      <TabPane label="获取NAT" name="2">
        <div class="tabPane2_content">
          <img class="tabPane2_content-item" src='../assets/howNat/01配置比例.png' alt="01配置比例"/>
          <img class="tabPane2_content-item" src='../assets/howNat/02激励体系.png' alt="02激励体系"/>
          <img class="tabPane2_content-item" src='../assets/howNat/03生态福利.png' alt="03生态福利"/>
          <img class="tabPane2_content-item" src='../assets/howNat/04怎么交易.png' alt="04怎么交易"/>
          <img class="tabPane2_content-item" src='../assets/howNat/05巨大财富.png' alt="05巨大财富"/>
        </div>
        <Divider ></Divider>
        <router-link to="./appDownload"><Button type="primary">联系我们了解更多</Button></router-link>
      </TabPane>
    </Tabs>
  </div>
</template>
<script>
import { Tabs, TabPane, Divider, Button } from 'view-design'
export default {
  name: 'FileRead',
  components: {
    Tabs,
    TabPane,
    Divider,
    Button
  },
  data () {
    return {
      tabName: '1'
    }
  }
}
</script>
<style lang="less" scoped>
.introduction_content {
  /deep/ .ivu-tabs{
    color: #ffffff;
  }
  .tabPane1_content {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    &-item {
      width: 50%;
      height: 10%;
      /* object-fit: contain; */
    }
  }
  .tabPane2_content {
    display: flex;
    flex-direction: column;
    img {
      width: 100%;
    }
  }
}
</style>
