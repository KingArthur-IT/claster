<template>
    <v-container class="onTop">
      <v-row class="d-flex justify-space-between" align="center">
        <!-- Logo -->
        <v-col cols="5" xl="2" lg="2" md="3" sm="3" class="mr-auto">
          <v-img
            src="@/assets/cluster_header_logo.png"
            height="100%"
          ></v-img>
        </v-col>
        <v-spacer></v-spacer>
        <!-- Actions -->
        <div class="ml-auto d-flex align-center">
            <!-- Find Btn -->
            <v-menu offset-y bottom >
                <template v-slot:activator="{ on, attrs }">
                    <v-hover v-slot="{ hover }">
                        <v-icon v-bind="attrs" v-on="on" elevation="0" x-large :class="{'blue--text': hover}" id="findBtn">mdi-magnify-expand</v-icon>
                    </v-hover>
                </template>
                <!-- List -->
                <v-list nav dense transition="slide-y-transition">
                    <v-list-item-group color="primary" >
                        <v-list-item v-for="(item, i) in findItems" :key="i">
                            <v-list-item-icon>
                                <v-icon v-text="item.icon"></v-icon>
                            </v-list-item-icon>

                            <v-list-item-content>
                                <v-list-item-title v-text="item.text"></v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                    </v-list-item-group>
                </v-list>
            </v-menu>
            <!-- User Account -->
            <v-menu offset-y bottom class="d-flex ml-2 ml-xl-8 ml-lg-8 ml-md-8 ml-sm-8" >
                <template v-slot:activator="{ on, attrs }">
                    <!-- Avatar + Info -->
                    <div class="d-flex align-center" v-bind="attrs" v-on="on">
                        <v-avatar :size="avatarSize">
                            <v-img src="https://cdn.vuetifyjs.com/images/john.png"></v-img>
                        </v-avatar>
                        <v-list>
                            <v-list-item>
                                <v-list-item-content class="mobile">
                                    <v-list-item-title class="text-h6">
                                        John Leider
                                    </v-list-item-title>
                                    <v-list-item-subtitle>john@vuetifyjs.com</v-list-item-subtitle>
                                </v-list-item-content>

                                <v-list-item-action>
                                    <v-icon>mdi-menu-down</v-icon>
                                </v-list-item-action>
                            </v-list-item>
                        </v-list>                            
                    </div>
                </template>
                <!-- List -->
                <v-list nav dense transition="slide-y-transition">
                    <v-list-item-group color="primary">
                        <v-list-item v-for="(item, i) in accountItems" :key="i">
                            <v-list-item-icon>
                                <v-icon v-text="item.icon"></v-icon>
                            </v-list-item-icon>

                            <v-list-item-content>
                                <v-list-item-title v-text="item.text"></v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                    </v-list-item-group>
                </v-list>
            </v-menu>
        </div>
      </v-row>
    </v-container>
</template>

<script>
  export default {
    data: () => ({
      accountItems: [
        { text: 'Мій профіль',  icon: 'mdi-account-circle-outline' },
        { text: 'Редагувати',   icon: 'mdi-account-edit-outline' },
        { text: 'Портфоліо',    icon: 'mdi-star-check-outline' },
        { text: 'Повідомлення', icon: 'mdi-message-text-outline' },
        { text: 'Мої підписки', icon: 'mdi-account-supervisor-outline' },
        { text: 'Що нового?',   icon: 'mdi-newspaper-variant-multiple' },
        { text: 'Вийти',        icon: 'mdi-logout' },
      ],
      findItems: [
        { text: 'Знайти студентів',     icon: 'mdi-account-circle-outline' },
        { text: 'Знайти IT компанії',   icon: 'mdi-account-edit-outline' },
        { text: 'Знайти активності',    icon: 'mdi-star-check-outline' },
        { text: 'Знайти вакансії',      icon: 'mdi-message-text-outline' },
      ],
      btnbg: 'linear-gradient(90deg, #00C4DF -31.56%, rgba(11, 129, 229, 0.76) 37.19%, rgba(31, 13, 239, 0.0621078) 123.71%, rgba(195, 196, 196, 0.00520833) 123.73%, rgba(196, 196, 196, 0) 123.74%)',
      avatarSize: 60
    }),
    methods: {
        updateWidth() {
            if (window.innerWidth < 620)
                {
                    this.avatarSize = 40;
                }
            else 
                {
                    this.avatarSize = 60;
                }
        },
    },
    created() {
        window.addEventListener('resize', this.updateWidth);
    },
  }
</script>

<style scoped>
.btn-bg{
    background: linear-gradient(90deg, #00C4DF -31.56%, rgba(11, 129, 229, 0.76) 37.19%, rgba(31, 13, 239, 0.0621078) 123.71%, rgba(195, 196, 196, 0.00520833) 123.73%, rgba(196, 196, 196, 0) 123.74%);
}
.v-list-item__content{
    display: block !important;
}
.mobile{
    display: block;
}
@media screen and (max-width: 600px) {
    .mobile {
        display: none !important
    }
    #findBtn{
        font-size: 0px;
        min-width: 10px !important
    }
    .v-list-item{
        padding: 0 16px 0 0;
    }
}
</style>