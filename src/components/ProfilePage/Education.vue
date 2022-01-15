<template>
<v-container >
    <h2 class="titles text-center mb-5">Освіта</h2>
    <!-- University -->
    <div class="d-flex mt-10 flex-wrap">
        <v-col xl="6" lg="6" md="6" sm="12" cols="12" v-for="university in universities" v-bind:key="university.name">
        <div class="d-flex align-center university-title">
            <div class="mr-6">
                <v-img
                src="@/assets/pstu_logo.png"
                height="60px"
                width="60px"
                ></v-img>
            </div>
            <h3 class="titles">{{university.name}}</h3>
        </div>
        <div class="mt-3" v-for="item in university.delatails" v-bind:key="item.value">
            <strong class="mr-5">{{item.name}}</strong>{{item.value}}
        </div>
    </v-col>
    </div>
</v-container>
</template>

<script>
export default {
    data: () => ({
        universities: 
        [
            {
                name: 'ДВНЗ "Приазовський державний технічний університет"',
                delatails: [
                    {name: 'Освітньо-кваліфікаційний рівень:', value: 'Бакалавр'},
                    {name: 'Факультет:', value: 'Факультет інформаційних технологій'},
                    {name: 'Спеціальність:', value: '113 Прикладна математика'},
                    {name: 'Освітня програма:', value: 'Комп’ютерне моделювання'},
                    {name: 'Рік початку навчання:', value: 2009},
                    {name: 'Рік завершення навчання:', value: 2014},
                ]
            },
            {
                name: 'ДВНЗ "Приазовський державний технічний університет"',
                delatails: [
                    {name: 'Освітньо-кваліфікаційний рівень:', value: 'Бакалавр'},
                    {name: 'Факультет:', value: 'Факультет інформаційних технологій'},
                    {name: 'Спеціальність:', value: '113 Прикладна математика'},
                    {name: 'Освітня програма:', value: 'Комп’ютерне моделювання'},
                    {name: 'Рік початку навчання:', value: 2009},
                    {name: 'Рік завершення навчання:', value: 2014},
                ]
            },
            {
                name: 'ДВНЗ "Приазовський державний технічний університет"',
                delatails: [
                    {name: 'Освітньо-кваліфікаційний рівень:', value: 'Бакалавр'},
                    {name: 'Факультет:', value: 'Факультет інформаційних технологій'},
                    {name: 'Спеціальність:', value: '113 Прикладна математика'},
                    {name: 'Освітня програма:', value: 'Комп’ютерне моделювання'},
                    {name: 'Рік початку навчання:', value: 2009},
                    {name: 'Рік завершення навчання:', value: 2014},
                ]
            },
        ]
    })
}
</script>

<style scoped>
.university-title{
    padding: 2%;
    background: linear-gradient(90deg, rgb(9 212 241 / 70%) -31.56%, rgb(13 140 247 / 53%) 37.19%);
    color: white;
    cursor: pointer;
}
</style>