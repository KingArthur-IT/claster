<template>
  <div id="app">
    <vue-extend-layouts />
  </div>
</template>

<script>
import VueExtendLayouts from 'vue-extend-layout'
export default {
  name: 'App',
  components: { VueExtendLayouts }
}
</script>

<style>
  @font-face {
    font-family: 'Montserrat Regular';
    src: url('~@/fonts/Montserrat-Regular.eot');
    src: url('~@/fonts/Montserrat-Regular.eot?#iefix') format('embedded-opentype'),
    url('~@/fonts/Montserrat-Regular.woff') format('woff'),
    url('~@/fonts/Montserrat-Regular.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'Montserrat Semibold';
    src: url('~@/fonts/Montserrat-SemiBold.eot');
    src: url('~@/fonts/Montserrat-SemiBold.eot?#iefix') format('embedded-opentype'),
    url('~@/fonts/Montserrat-SemiBold.woff') format('woff'),
    url('~@/fonts/Montserrat-SemiBold.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'Scada Regular';
    src: url('~@/fonts/Scada-Regular.eot');
    src: url('~@/fonts/Scada-Regular.eot?#iefix') format('embedded-opentype'),
    url('~@/fonts/Scada-Regular.woff') format('woff'),
    url('~@/fonts/Scada-Regular.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }
  * {
    font-family: 'Montserrat Regular' !important;
    
  }
  .titles {
    font-family: 'Scada Regular' !important;
  }
  .overflow-hide{
    overflow: hidden;
  }
  .onTop {
      z-index: 10;
    }
  .relative{
    position: relative;
  }
</style>