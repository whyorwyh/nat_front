<template>
  <Layout>
    <Header class="header">
      <Menu mode="horizontal" theme="dark" active-name="1">
        <router-link class="link-item" to='/Home'><MenuItem name="1">主页</MenuItem></router-link>
        <router-link class="link-item" to='/AppDownload'><MenuItem name="2">APP下载</MenuItem></router-link>
        <router-link class="link-item" to='/Introduction'><MenuItem name="3">介绍</MenuItem></router-link>
        <router-link class="link-item" to='/FileRead'><MenuItem name="4">文件解读</MenuItem></router-link>
      </Menu>
    </Header>
    <Content class="content">
      <router-view transition transition-mode="out-in"></router-view>
    </Content>
  </Layout>
</template>
<script>
import { Layout, Header, Content, Menu, MenuItem } from 'view-design'
export default {
  name: 'Main',
  components: {
    Layout,
    Header,
    Content,
    Menu,
    MenuItem
  },
  data () {
    return {

    }
  }
}
</script>
<style lang="less" scoped>
.header {
  display: flex;
  justify-content: center;
  position: fixed;
  width: 100%;
  background: #0d1b26;
  z-index: 100;
  .ivu-menu-dark {
    background: #0d1b26;
  }
  /deep/ .ivu-menu-item-selected {
    a {
      color: #247cd9;
    }
  }
}
.content {
  margin-top: 64px;
  padding: 20px;
  background: #142B3D;
  /* min-height: 600px; */
}
</style>
