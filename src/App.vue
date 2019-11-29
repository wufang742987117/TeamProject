<template>
  <div id="app">
    <!-- 头部 -->
    <my-headers></my-headers>
    <router-view />
    <!-- 底部 -->
    <my-footer></my-footer>
  </div>
</template>

<script>
  /* 头部*/
  import MyHeaders from '@/components/public/Head'
  /* 底部 */
  import MyFooter from '@/components/public/Footer'
  export default {
    name: 'App',
    components: {
      MyHeaders,
      MyFooter
    }
  }
</script>

<style src="@/assets/css/public.css">
  /* 公共样式 */
  /*@import '/assets/css/public.css';*/

</style>
