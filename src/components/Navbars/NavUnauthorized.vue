<template>
    <v-container>
      <v-row class="d-flex mb-2 mb-sm-8" align="center">
        <v-col lg="3" md="4" sm="4" xs="5" cols="5">
          <router-link :to="{name: 'MainPage'}">
            <v-img src="@/assets/claster_logo.png" alt="Cluster"></v-img>
          </router-link>
        </v-col>
        <v-spacer></v-spacer>
        <div lg="9" md="8" sm="8" xs="7" cols="7" class="d-flex justify-content-between align-center flex-column flex-xl-row flex-lg-row flex-md-row">
          <v-col class="text-right text-lg-h4 text-md-h4 text-sm-h4 text-h5 mr-1">
            <div class="titles title-mob-hide">
              Кластер IT фахівців
            </div>
          </v-col>
          <div class="d-flex justify-content-between align-center">
            <Button :text="'Приєднатися'" @click.native="registrate" class="mr-2"/>
            <Button :text="'Увійти'" @click.native="signIn"/>
          </div>
        </div>
      </v-row>
    </v-container>
</template>

<script>
import Button from '@/components/UIKit/Button'

export default {
  name: 'NavUnauthorized',
  components: {Button},
  methods: {
    signIn(){
      this.goToPage('SignIn', 'log-in');
    },
    registrate(){
      this.goToPage('SignIn', 'reg');
    },
    goToPage(name, param){
      if (this.$route.name === name && this.$route.params.enter_type === param)
        return;
      this.$router.push({name: name, params: {enter_type: param}})
    }
  }
}
</script>

<style scoped>
@media screen and (max-width: 600px) {
  .title-mob-hide{
    display: none;
  }  
} 

</style>