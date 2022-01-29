<template>
<v-container >
    <h2 class="titles text-center mb-5">Активності</h2>
    <swiper class="swiper" :options="swiperOption">
        <swiper-slide v-for="(item, index) in activities" :key="index">
            <img :src="require(`@/assets/sertificate${1+index%3}.jpg`)" alt="" width="100%" class="px-3">
                <v-card-text class="pb-0">
                    <h3 v-if="item.title">{{item.title}}</h3>
                    <p class="text--primary" v-if="item.description">{{item.description}}</p>
                </v-card-text>
                <v-chip-group column>
                    <v-chip v-for="(skill, index) in item.skills" :key="index"  color="blue" outlined class="ma-2 ml-5">
                        {{skill}}
                    </v-chip>
                </v-chip-group>
                <v-card-actions>
                    <v-btn text color="light-blue accent-4" >
                        More
                    </v-btn>
                </v-card-actions>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
        <!--
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
        -->
    </swiper>
</v-container>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
export default {
    components: {
      Swiper,
      SwiperSlide
    },
    props: {
        activities: {
            type: Array
        }
    },
    data() {
      return {
        swiperOption: {
          slidesPerView: 3,
          spaceBetween: 30,
          slidesPerGroup: 1,
          loop: true,
          loopFillGroupWithBlank: true,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }
        }
      }
    }
}
</script>

<style lang="scss" scoped>

</style>