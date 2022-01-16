<template>
  <div class="w-100">
      <NavAuthorized />
      <div class="container-fluid mt-3">
        <router-view />
      </div>
    </div>
</template>

<script>
import NavAuthorized from '@/components/Navbars/NavAuthorized'

export default {
  name: "default",
  components:{
    NavAuthorized,
  },
}
</script>