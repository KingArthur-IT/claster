<template>
  <v-app>
    <router-view></router-view>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  components: {
    
  },

  data: () => ({
  }),
};
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
  .z-index{
    z-index: 2;
  }
  .btn {
    background: linear-gradient(90deg, #00C4DF -31.56%, rgba(11, 129, 229, 0.76) 37.19%, rgba(31, 13, 239, 0.0621078) 123.71%, rgba(195, 196, 196, 0.00520833) 123.73%, rgba(196, 196, 196, 0) 123.74%);
    color: #ffffff !important;
    font-weight: 600;
  }
</style>