<template>
<v-container >
    <h2 class="titles text-center mb-5">Активності</h2>
    <v-carousel
      :continuous="true"
      :show-arrows="true"
      hide-delimiter-background
      delimiter-icon="mdi-minus"
      height="auto"
    >
    <v-carousel-item v-for="(item, i) in activities" :key="i">
        <v-layout row>
            <v-flex xs4 :key="j" v-for="j in 3">
                <v-card>
                    <v-img height="300px" width="95%" :src="item.img" class="mx-2"></v-img>
                    <v-card-text class="pb-0">
                        <h3>{{item.title}}</h3>
                        <p class="text--primary">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi, minima nesciunt. Voluptatum id sint, dicta magnam quibusdam harum eligendi iusto! Quidem quaerat velit nobis omnis dicta molestiae beatae cum et!
                        </p>
                    </v-card-text>
                    <v-chip-group column>
                        <v-chip v-for="(skill, index) in item.skills" :key="index"  color="blue" outlined class="ma-2 ml-5">
                            {{skill}}
                        </v-chip>
                    </v-chip-group>
                    <v-card-actions>
                        <v-btn text color="teal accent-4" >
                            Learn More
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>
    </v-carousel-item>
    </v-carousel>
</v-container>
</template>

<script>
export default {
    props: {
        activities: {
            type: Array
        }
    }
}
</script>

<style scoped>

</style>