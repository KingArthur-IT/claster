<template>
  <div id="app">
    <vue-extend-layouts />
  </div>
</template>

<script>
import VueExtendLayouts from 'vue-extend-layout'
export default {
  name: 'App',
  components: { VueExtendLayouts },
}
</script>

<style>
  :root {
    --primary-color: linear-gradient(90deg, rgba(97, 236, 255, 0.7) -31.56%, rgba(11, 129, 229, 0.532) 37.19%, rgba(31, 13, 239, 0.0434755) 123.71%, rgba(195, 196, 196, 0.00364583) 123.73%, rgba(196, 196, 196, 0) 123.74%);
    --dark-primary-color: linear-gradient(90deg, #00C4DF -31.56%, rgba(11, 129, 229, 0.76) 37.19%, rgba(31, 13, 239, 0.0621078) 123.71%, rgba(195, 196, 196, 0.00520833) 123.73%, rgba(196, 196, 196, 0) 123.74%);
    --light-solid-primary-color: #00BFFF;
  }
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
  .m-auto{
        margin: auto;
    }
</style>