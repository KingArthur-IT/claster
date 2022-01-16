<template>
    <v-app>
      <NavUnauthorized />
      <router-view></router-view>
      <Footer></Footer>
    </v-app>
</template>

<script>
import NavUnauthorized from '@/components/Navbars/NavUnauthorized'
import Footer from '@/components/Footer'

export default {
  name: "unauth",
  components:{
    NavUnauthorized, Footer
  },
}
</script>