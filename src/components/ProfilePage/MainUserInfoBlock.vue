<template>
    <v-container>
        <v-row>
            <!-- Avatar -->
            <v-col cols="3">
                <v-img src="@/assets/incognito.jpg"></v-img>
            </v-col>
            <!-- User Info -->
            <v-col cols="9">
                <h2 class="titles">{{userInfo.name}}</h2>
                <p class="mt-3" v-if="userInfo.city">
                    <strong>Місто: </strong>{{userInfo.city}}
                </p>
                <p class="mt-3" v-if="userInfo.userAge">
                    <strong>Вік: </strong>{{userInfo.userAge}}
                </p>
                <p class="mt-3" v-if="userInfo.workExperience.length">
                    <ul class="px-0">
                        <strong>Місце роботи: </strong>
                        <li v-for="work in userInfo.workExperience" :key="work.id" class="ml-10">{{work}}</li>
                    </ul>                    
                </p>
                <p class="mt-3" v-if="userInfo.education.length">
                    <ul class="px-0">
                        <strong>Освіта: </strong>
                        <li v-for="education in userInfo.education" :key="education.id" class="ml-10">{{education}}</li>
                    </ul>                    
                </p>
                <p class="mt-3" v-if="userInfo.Cite">
                    <a :href="userInfo.Cite" target="_blank" rel="noopener noreferrer">Github repository</a>
                </p>
            </v-col>
            <v-spacer></v-spacer>
        </v-row>
        <div>
            <h2 class="titles text-center mb-5">Про мене</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod explicabo aut pariatur illum voluptatem exercitationem ea nesciunt accusantium? Quam dolor voluptatum, provident consequatur ab nobis. Expedita perspiciatis consequatur accusantium nisi distinctio eum error itaque assumenda, nam quibusdam iste quod magni, exercitationem non reprehenderit soluta repellat libero omnis. Natus eaque suscipit aut eveniet deleniti adipisci hic dolorem voluptas temporibus dolores? Temporibus atque quod nulla nesciunt quibusdam tenetur placeat incidunt? Officiis omnis harum aliquam consectetur quo dolor labore nulla totam amet natus architecto veniam dolorum, repudiandae accusamus obcaecati, sit sint aspernatur minima sed quod maxime sapiente itaque quas excepturi. Consectetur nulla dolorem aliquid dolorum aliquam sequi maiores rem possimus et officiis, totam saepe ex? Magnam quasi animi provident quidem neque consequuntur vero, nemo nihil facere at labore ratione ipsum quae pariatur odio sed quibusdam voluptas reiciendis corporis quos in beatae delectus fugiat eius! Quo sit iure cumque inventore fuga praesentium. Quaerat consectetur, illum consequuntur delectus ratione alias harum veniam, amet nisi fuga est consequatur. Doloribus architecto nostrum soluta, deserunt vitae saepe illo nemo quas temporibus tempore, eius atque laborum quisquam consectetur aspernatur eaque animi earum. Non corporis iste perspiciatis, rerum quisquam quae eius nulla mollitia illo ipsum amet velit libero, ad inventore?
            </p>
        </div>
    </v-container>
</template>

<script>
import {mapGetters} from "vuex"
export default {
    name: 'MainUserInfoBlock',
    computed:{
        ...mapGetters({
            userInfo: 'user/get_user'
        })
    },

};
</script>

<style scoped>
p{
    text-align: justify;
}
</style>