<template>
    <v-container>
        <h2 class="titles text-center mb-5">Hard Skills</h2>

        <v-row>
            <v-col cols="6" v-for="(skillsObj, index) in hardSkills" :key="index">
                <v-card class="mx-2">
                    <v-card-title>
                        <h2 class="titles">{{skillsObj.field}}</h2>
                    </v-card-title>
                    <v-divider class="mx-4"></v-divider>
                    <v-card-text>
                        <v-chip-group column>
                            <v-chip
                                v-for="skill in skillsObj.skills" :key="skill"
                                color="blue"
                                outlined
                                class="ma-2"
                            >
                                {{ skill }}
                            </v-chip>
                        </v-chip-group>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>

export default {
    name: 'Skills',

    data: () => ({
        hardSkills: [
            {
                field: 'Frontend',
                skills: ['HTML5', 'CSS3', 'JavaScript', 'VueJS', 'SASS', 'GULP']
            },
            {
                field: 'Прикладная математика',
                skills: ['Линейная аглебра', 'Дифференциальные уравнения', 'Численные методы', 'Вычислительная геометрия', 'Математическое моделирование']
            },
            {
                field: 'Моделирование',
                skills: ['Имитационное', 'Математическое', 'Физических процессов', 'Comsol Multiphysics', 'AnyLogic', 'Matlab']
            },
            {
                field: 'Педагогика',
                skills: ['Преподаватель']
            },
            {
                field: 'Наука',
                skills: ['Технические статьи']
            },
        ]
    }),
}
</script>

<style scoped>

</style>