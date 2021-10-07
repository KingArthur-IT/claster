<template>
<v-container >
    <h2 class="titles text-center mb-5">Активності</h2>
    <v-carousel
      :continuous="true"
      :cycle="cycle"
      :show-arrows="true"
      hide-delimiter-background
      delimiter-icon="mdi-minus"
      height="auto"
    >
    <v-carousel-item
        v-for="(slide, i) in slides"
        :key="i"
    >
        <v-card>
            <v-img
                height="auto"
                width="600px"
                src="@/assets/sertificate1.jpg"
            >
            </v-img>
            <v-card-text>
                <h3>Word of the Day</h3>
                <p class="text-h6 text--primary">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi, minima nesciunt. Voluptatum id sint, dicta magnam quibusdam harum eligendi iusto! Quidem quaerat velit nobis omnis dicta molestiae beatae cum et!
                </p>
            </v-card-text>
            <v-card-actions>
            <v-btn
                text
                color="teal accent-4"
                @click="reveal = true"
            >
                Learn More
            </v-btn>
            </v-card-actions>
        </v-card>
    </v-carousel-item>
    </v-carousel>
</v-container>
</template>

<script>
export default {
    data: () => ({
        slides: [
            {title: '', description: ''},
            {title: '', description: ''},
            {title: '', description: ''},
        ]
    })
}
</script>

<style scoped>

</style>