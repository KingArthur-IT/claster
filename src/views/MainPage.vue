<template>
    <div class="overflow-hide">
        <v-row>
            <v-col cols="10" offset="1" class="title-shift text-center text-lg-h3 text-md-h3 text-sm-h4 text-h5">
                <strong class="titles">
                    Кластер - це платформа, що об’єднує IT спеціалістів заради спільного розвитку
                </strong>
            </v-col>
        </v-row>
        <v-container class="preview-hero ">
            <div class="main-design-block"></div>
            <v-row class="mb-15 d-flex align-center z-index">
                <v-col  cols="10" xl="7" lg="7" md="7" sm="7" 
                        offset="1" offset-xl="0" offset-lg="0" offset-md="0" offset-sm="0">
                    <v-img src="@/assets/computer.jpeg" class="img-shade"></v-img>
                </v-col>
                <v-col  class="text-body-2 text-xl-h6 text-lg-h6 text-md-body-1 text-sm-body-2 onTop" 
                        xl="4" lg="4" md="4" sm="4"
                        offset="1" offset-xl="1" offset-lg="1" offset-md="1" offset-sm="0">
                    <h4 class="text-center text-h5 text-xl-h4 text-lg-h4 text-md-h4 mb-3">IT спеціалістам</h4>
                    <ul>
                        <li>Портфоліо із вашими досягненнями та досвідом роботи</li>
                        <li>Інформація для професійного розвитку</li>
                        <li>Комунікація між фахівцями та IT компаніями</li>
                        <li>Програми стужувань від провідних IT компаній</li>
                        <li>Актуальні вакансії</li>
                        <li>Тестові завдання</li>
                    </ul>
                </v-col>
            </v-row>
            <v-row class="d-flex align-center">
                <v-col  class="text-body-2 text-xl-h6 text-lg-h6 text-md-body-1 text-sm-body-2 onTop" 
                        cols="10" xl="4" lg="4" md="4" sm="4"
                        offset="1" offset-xl="0" offset-lg="0" offset-md="0" offset-sm="0">
                        <h4 class="text-center text-h5 text-xl-h4 text-lg-h4 text-md-h4 mb-3 titles">Для бізнесу</h4>
                    <ul>
                        <li>Швидкий пошук партнерів, контактів та співробітників</li>
                        <li>Зручне створення події</li>
                        <li>Можливість зміцнити ринок IT спеціалістів</li>
                    </ul>
                </v-col>
                <v-col  cols="10" xl="7" lg="7" md="7" sm="7"
                        offset="1" offset-xl="1" offset-lg="1" offset-md="1"
                        offset-sm="1">
                    <v-img src="@/assets/it-team.jpeg" class="img-shade"></v-img>
                </v-col>
            </v-row>
            <v-row class="mb-15 d-flex align-center z-index">
                <v-col  cols="10" xl="7" lg="7" md="7" sm="7" 
                        offset="1" offset-xl="0" offset-lg="0" offset-md="0" offset-sm="0">
                    <v-img src="@/assets/student_preview.png" class="img-shade"></v-img>
                </v-col>
                <v-col  class="text-body-2 text-xl-h6 text-lg-h6 text-md-body-1 text-sm-body-2 onTop" 
                        xl="4" lg="4" md="4" sm="4"
                        offset="1" offset-xl="1" offset-lg="1" offset-md="1" offset-sm="0">
                    <h4 class="text-center text-h5 text-xl-h4 text-lg-h4 text-md-h4 mb-3">Закладам вищої оствіти та здобувачам освіти</h4>
                    <ul>
                        <li>Розширення мережі контактів та співпраця із IT спеціалістами</li>
                        <li>Пошук курсів, стажувань та практик</li>
                        <li>Посилення навчальних програм</li>
                        <li>Он-лайн портфоліо для студентів</li>
                    </ul>
                </v-col>
            </v-row>
        </v-container>
        <v-container class="mb-10">
            <div class="text-center text-h5 text-sm-h4 text-md-h4 text-lg-h4 text-xl-h4 mb-10">Партнери</div>
            <v-row>
                <v-col cols="2" offset="1">
                    <v-img :src="require(`@/assets/arhat_logo.png`)"></v-img>
                </v-col>
                <v-col cols="2" offset="2">
                    <v-img :src="require(`@/assets/pstu_logo.png`)"></v-img>
                </v-col>
                <v-col cols="2" offset="2">
                    <v-img :src="require(`@/assets/1991_logo.png`)" ></v-img>
                </v-col>
            </v-row>
        </v-container>
        <div class="text-center text-h5 text-sm-h4 text-md-h4 text-lg-h4 text-xl-h4 mb-7">Приєднуйся до нас!</div>
        <Button :text="'Приєднатися'" :isLarge="true" class="d-flex m-auto"/>
    </div>
</template>

<script>
    import Button from '@/components/UIKit/Button'

    export default {
    name: 'MainPage',
    components: {
        Button
    },

    data: () => ({

    }),
    };
</script>

<style scoped>
    .main-design-block{
        position: absolute;
        width: 100%;
        height: 90%;
        top: 0;
        background: var(--primary-color);
        transform: rotate(-12deg);
        right: -35%;
        z-index: 0; 
    }
    .preview-hero{
        margin-top: 185px;
        position: relative;
    }
    .text-h5, .text-xl-h4, .text-lg-h4, .text-md-h4{
      font-family: 'Scada Regular' !important;
    }
    .title-shift{
        margin-bottom: -100px;
    }
</style>