<template>
    <v-container>
        <h2 class="titles text-center mb-5">Hard Skills</h2>

        <v-card
            max-width="400"
        >
            <v-card-title>
            <h2 class="titles">
                Frontend
            </h2>
            </v-card-title>

            <v-divider class="mx-4"></v-divider>

            <v-card-text>
            <v-chip-group
                column
            >
                <v-chip
                v-for="skill in Skills"
                :key="skill"
                color="blue"
                outlined
                class="ma-2"
                >
                {{ skill }}
                </v-chip>
            </v-chip-group>
            </v-card-text>

        </v-card>

    </v-container>
</template>

<script>

export default {
    name: 'Skills',

    data: () => ({
        Skills: [
            'HTML5', 'CSS3', 'JavaScript', 'VueJS', 'SASS', 'GULP'
        ]
    }),
}
</script>

<style scoped>

</style>