<template>
    <v-container>
        <v-row>
            <!-- Avatar -->
            <v-col cols="3">
                <v-img src="@/assets/incognito.jpg"></v-img>
            </v-col>
            <!-- User Info -->
            <v-col cols="9">
                <h2 class="titles">{{userName}}</h2>
                <p class="mt-3" v-if="userCity">
                    <strong>Місто: </strong>{{userCity}}
                </p>
                <p class="mt-3" v-if="userAge">
                    <strong>Вік: </strong>{{userAge}}
                </p>
                <p class="mt-3" v-if="userWork.length">
                    <ul class="px-0">
                        <strong>Місце роботи: </strong>
                        <li v-for="(work, index) in userWork" :key="index" class="ml-10">{{work}}</li>
                    </ul>                    
                </p>
                <p class="mt-3" v-if="userEducation.length">
                    <ul class="px-0">
                        <strong>Освіта: </strong>
                        <li v-for="(education, index) in userEducation" :key="index" class="ml-10">{{education}}</li>
                    </ul>                    
                </p>
                <p class="mt-3" v-if="userCite">
                    <a :href="userCite" target="_blank" rel="noopener noreferrer">Github repository</a>
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

export default {
    name: 'MainUserInfoBlock',

    components: {
        
    },

    data: () => ({
        userName: 'Остапенко Артем',
        userCity: 'Маріуполь',
        userAge: '29 лет',
        userWork: ['старший викладач ДВНЗ "Приазовський державний технічний університет"', 'frontend developer', 'CEO "Cluster"', 'фрилансер'],
        userEducation: ['PhD technical sciences, 2020', 'математик-програміст, закінчив ДВНЗ "Приазовський державний технічний університет", 2014'],
        userCite: 'github.com',
    }),
};
</script>

<style scoped>
p{
    text-align: justify;
}
</style>