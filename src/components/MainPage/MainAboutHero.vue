<template>
    <v-container class="preview-hero mb-10">
      <div class="main-design-block"></div>
      <v-row class="mb-15 d-flex align-center z-index">
        <v-col cols="10" xl="7" lg="7" md="7" sm="7" 
        offset="1" offset-xl="0" offset-lg="0" offset-md="0" offset-sm="0">
          <v-img
            src="@/assets/student_preview.png"
          ></v-img>
        </v-col>
        <v-col class="text-body-2 text-xl-h6 text-lg-h6 text-md-body-1 text-sm-body-2 onTop" 
        xl="4" lg="4" md="4" sm="4"
        offset="1" offset-xl="1" offset-lg="1" offset-md="1" offset-sm="0">
          <h4 class="text-center text-h5 text-xl-h4 text-lg-h4 text-md-h4 mb-3">Для студентів</h4>
          <ul>
            <li>Он-лайн портфоліо із вашими досягненнями та студентськими роботами</li>
            <li>інформація про ринок праці "з перших уст"</li>
            <li>комунікація з потенційними роботодавцями</li>
            <li>програми стужувань від провідних IT компаній</li>
            <li>актіальні вакансії</li>
            <li>тестові завдання</li>
          </ul>
        </v-col>
      </v-row>
      <v-row class="d-flex align-center">
        <v-col class="text-body-2 text-xl-h6 text-lg-h6 text-md-body-1 text-sm-body-2 onTop" 
        cols="10" xl="4" lg="4" md="4" sm="4"
        offset="1" offset-xl="0" offset-lg="0" offset-md="0" offset-sm="0">
          <h4 class="text-center text-h5 text-xl-h4 text-lg-h4 text-md-h4 mb-3 titles">Для бізнесу</h4>
          <ul>
            <li>Швидкий пошук співробітників серед студентів</li>
            <li>"вирощування" спеціалістів під потреби своєї компанії</li>
            <li>комунікація зі студентами IT спеціальностей</li>
            <li>підвищення кваліфікації майбутніх IT фахівців</li>
            <li>створення тестових завдань для першого етапу рекрутингу</li>
          </ul>
        </v-col>
        <v-col cols="10" xl="7" lg="7" md="7" sm="7"
        offset="1" offset-xl="1" offset-lg="1" offset-md="1"
        offset-sm="1">
          <v-img
            src="@/assets/bisnes_preview.png"
          ></v-img>
        </v-col>
      </v-row>
    </v-container>
</template>

<style scoped>
    .main-design-block{
        position: absolute;
        width: 100%;
        height: 90%;
        top: -7%;
        background: linear-gradient(90deg, rgba(97, 236, 255, 0.7) -31.56%, rgba(11, 129, 229, 0.532) 37.19%, rgba(31, 13, 239, 0.0434755) 123.71%, rgba(195, 196, 196, 0.00364583) 123.73%, rgba(196, 196, 196, 0) 123.74%);
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
    .onTop {
      z-index: 10;
    }
</style>