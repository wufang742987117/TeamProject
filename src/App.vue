<template>
  <div id="app">
		<my-headers></my-headers>
    <router-view/>
    <my-footer></my-footer>
  </div>
</template>

<script>
import MyHeaders from '@/components/public/Head'
import MyFooter from '@/components/public/Footer'
export default {
  name: 'App',
  components: {
	   MyHeaders,MyFooter
	}
  
}
</script>

<style>
    @import '/assets/css/public.css';
    #app {
      font-family: 'Avenir', Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      text-align: center;
      color: #2c3e50;
    }
</style>
