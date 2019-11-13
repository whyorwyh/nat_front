import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Home from '@/modules/Home'
import FileRead from '@/modules/FileRead'
import AppDownload from '@/modules/AppDownload'
import Introduction from '@/modules/Introduction'
import Layout from '@/components/Layout'

Vue.use(Router)

export default new Router({
  routes: [
    {
      component: Layout,
      path: '/',
      name: 'home',
      redirect: '/home',
      children: [
        {
          path: '/home',
          component: Home
        }
      ]
    },
    {
      component: Layout,
      path: '/appDownload',
      name: 'appDownload',
      children: [
        {
          path: '/appDownload',
          component: AppDownload
        }
      ]
    },
    {
      component: Layout,
      path: '/introduction',
      name: 'introduction',
      children: [
        {
          path: '/introduction',
          component: Introduction
        }
      ]
    },
    {
      component: Layout,
      path: '/fileRead',
      name: 'fileRead',
      children: [
        {
          path: '/fileRead',
          component: FileRead
        }
      ]
    }
  ]
})
