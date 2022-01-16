<template>
  <div class="w-100">
      <NavUnauthorized />
      <div class="container-fluid mt-3">
        <router-view />
      </div>
    </div>
</template>

<script>
import NavUnauthorized from '@/components/Navbars/NavUnauthorized'

export default {
  name: "default",
  components:{
    NavUnauthorized,
  },
}
</script>