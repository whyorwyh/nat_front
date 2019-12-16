<template>
  <Layout>
    <Header class="header">
      <Menu mode="horizontal" theme="dark" active-name="1">
        <router-link class="link-item" to='/Home'><MenuItem name="1">主页</MenuItem></router-link>
        <router-link class="link-item" to='/AppDownload'><MenuItem name="2">注册</MenuItem></router-link>
        <router-link class="link-item" to='/Introduction'><MenuItem name="3">介绍</MenuItem></router-link>
        <a class="link-item" href="http://mp.weixin.qq.com/s?__biz=MzU4NDc4MDkwNw==&mid=2247484074&idx=1&sn=cef868b4af43cde23b2d89def4ff3212&chksm=fd95dfaecae256b84af7f8bdda4e7bd1f98b9d48fece86722d8fdc00b34d342eb26b31ce9bae&mpshare=1&scene=1&srcid=&sharer_sharetime=1576025014473&sharer_shareid=4c9c306a99ceede0e8e25ad6e5136ad4#rd" target="_blank"><MenuItem name="4">重要说明</MenuItem></a>
        <!-- <router-link class="link-item" to='/FileRead'><MenuItem name="4">重要说明</MenuItem></router-link> -->
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
