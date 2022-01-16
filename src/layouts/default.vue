<template>
  <v-app>
    <NavAuthorized />
    <router-view></router-view>
    <Footer />
  </v-app>
</template>

<script>
import NavAuthorized from '@/components/Navbars/NavAuthorized'
import Footer from '@/components/Footer'

export default {
  name: "default",
  components:{
    NavAuthorized, Footer
  },
}
</script>