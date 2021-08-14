<template>
  <v-footer    
    padless
  >
  <v-row>
    <v-col cols="12">
      <v-card
        flat
        tile
        class="text-center"
        >
        <v-card-text>
            <v-btn
            v-for="icon in icons"
            :key="icon"
            class="mx-5"
            icon
            x-large
            >
            <v-icon size="36px">
                {{ icon }}
            </v-icon>
            </v-btn>
        </v-card-text>

        <!--
        <v-card-text class="pt-1">
            Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
        </v-card-text>
        -->
        <v-divider></v-divider>

        <v-card-text class="">
            {{ new Date().getFullYear() }} — <v-icon>mdi-copyright</v-icon><strong> Claster</strong>
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
