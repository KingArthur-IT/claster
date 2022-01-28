<template>
  <v-footer padless class="mt-10">
    <v-row>
      <v-col cols="12">
        <v-card flat tile class="text-center">
          <v-divider></v-divider>
          <v-card-text class="pb-0">          
            <v-btn v-for="icon in icons" :key="icon" class="mx-5" icon x-large>
              <v-hover v-slot="{ hover }">
                <v-icon size="36px" :color="hover ? 'blue' : ''">
                    {{ icon }}
                </v-icon>
              </v-hover>
            </v-btn>          
          </v-card-text>

          <!--
          <v-card-text class="pt-1">
              Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          </v-card-text>
          -->       

          <v-card-text class="">
              {{ new Date().getFullYear() }} — <v-icon>mdi-copyright</v-icon><strong> CLUSTER</strong>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
  export default {
    data: () => ({
      icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
    }),
  }
</script>

<style scoped>
</style>
