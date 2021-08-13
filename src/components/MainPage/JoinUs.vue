<template>
    <v-container class="mb-10">
        <div class="text-center text-h5 text-sm-h4 text-md-h3 text-lg-h3 text-xl-h3 mb-7">Приєднуйся до нас!</div>
        <v-row class="mb-10">
        <v-col cols="10" xl="5" lg="5" md="5" sm="5"
        offset="1" offset-sm="1" offset-md="1" offset-lg="0" offset-xl="1">
            <v-btn class="btn button"
                block
                x-large
            >
            Я студент
            </v-btn>
        </v-col>        
        <v-col cols="10" xl="5" lg="5" md="5" sm="5"
        offset="1" offset-sm="0" offset-md="0" offset-lg="2" offset-xl="0">
            <v-btn class="btn button"
                block
                x-large
            >
            Я представник бізнесу
            </v-btn>
        </v-col>
        </v-row>
        <div class="text-center text-h5 text-sm-h4 text-md-h3 text-lg-h3 text-xl-h3 mb-7">Досягнемо більшого разом!</div>
    </v-container>
</template>

<style scoped>
    .button {        
        min-height: 100px;
    }
    .text-h5, .text-sm-h4, .text-md-h3, .text-lg-h3, .text-xl-h3
    {
        font-family: 'Scada Regular' !important;
    }
</style>