<template>
    <v-container>
        <h2 class="titles text-center mb-5">Освіта</h2>
        <!-- University -->
        <div class="d-flex mt-10 flex-wrap">
            <v-col xl="6" lg="6" md="6" sm="12" cols="12" v-for="item in education" v-bind:key="item.id">
                <div class="d-flex align-center university-title mb-2">
                    <div class="mr-6">
                        <v-img
                            src="@/assets/pstu_logo.png"
                            height="60px"
                            width="60px"
                        ></v-img>
                    </div>
                    <h3 class="titles">
                        <span>{{item.univercity}}</span>
                    </h3>
                </div>
                <ul>
                    <li v-if="item.degree">
                        <strong class="mr-5">Ступінь:</strong>{{item.degree}}
                    </li>
                    <li v-if="item.faculty">
                        <strong class="mr-5">Факультет</strong>{{item.faculty}}
                    </li>
                    <li v-if="item.speciality">
                        <strong class="mr-5">Спеціальність</strong>{{item.speciality}}
                    </li>
                    <li v-if="item.qualification">
                        <strong class="mr-5">Кваліфікація</strong>{{item.qualification}}
                    </li>
                    <li v-if="item.educationalProgram">
                        <strong class="mr-5">Освітня програма</strong>{{item.educationalProgram}}
                    </li>
                    <li v-if="item.finalYear">
                        <strong class="mr-5">Рік закінчення</strong>{{item.finalYear}}
                    </li>
                    <li v-if="item.otherDescription">
                        <strong class="mr-5"></strong>{{item.otherDescription}}
                    </li>
                </ul>
            </v-col>
        </div>
    </v-container>
</template>

<script>
export default {
    props: {
        education: {
            type: Array
        }
    }
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