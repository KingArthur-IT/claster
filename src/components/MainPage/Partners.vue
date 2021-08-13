<template>
    <v-container class="mb-10">
      <div class="text-center text-h5 text-sm-h4 text-md-h4 text-lg-h4 text-xl-h4 mb-7">{{this.title}}</div>
      <v-row>
        <v-col cols="2" 
        offset="1">
          <v-img
            :eager="true"
            :src="this.images[0]"
          ></v-img>
        </v-col>
        <v-col cols="2"
        offset="2">
          <v-img
            :src="this.images[1]"
          ></v-img>
        </v-col>
        <v-col cols="2"
        offset="2">
          <v-img
            :src="this.images[2]"
          ></v-img>
        </v-col>
      </v-row>
    </v-container>
</template>

<script>

export default {
  name: 'Partners',

  data: () => ({
    //
  }),
  props: {
      title: {
          type: String
      },
      images: {
          type: Array
      }
  },

  mounted() {
        //console.log(this.images)
  }
};
</script>

<style scoped>
    .text-h5, .text-sm-h4, .text-md-h4, .text-lg-h4, .text-xl-h4 {
        font-family: 'Scada Regular' !important;
    }
</style>