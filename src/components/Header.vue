<template>
    <v-container>
      <v-row class="d-flex mb-2 mb-sm-8" align="center">
        <v-col lg="2" md="4" sm="5" xs="5" cols="5">
          <v-img
            src="@/assets/cluster_header_logo.png"
            height="100%"
          ></v-img>
        </v-col>
        <v-spacer></v-spacer>
        <v-col cols="1">
            <v-menu
                offset-y
                bottom
            >
            <template v-slot:activator="{ on, attrs }">
                <!-- Avatar + Info -->
                <div class="d-flex align-center">
                    <v-btn v-bind="attrs" v-on="on" elevation="0" x-large color="white">
                        Знайти <v-icon>mdi-menu-open</v-icon>
                    </v-btn>
                </div>
            </template>
            <!-- List -->
                <v-list nav dense class="absolute" transition="slide-y-transition">
                    <v-list-item-group
                        color="primary"
                    >
                    <v-list-item
                        v-for="(item, i) in items"
                        :key="i"
                    >
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
        </v-col>
        <v-col cols="2">
            <v-menu
                offset-y
                bottom
            >
            <template v-slot:activator="{ on, attrs }">
                <!-- Avatar + Info -->
                <div class="d-flex align-center">
                    <div>
                        <v-avatar size="60">
                            <v-img src="https://cdn.vuetifyjs.com/images/john.png"></v-img>
                        </v-avatar>
                    </div>
                        <v-list>
                            <v-list-item>
                            <v-list-item-content>
                                <v-list-item-title class="text-h6">
                                John Leider
                                </v-list-item-title>
                                <v-list-item-subtitle>john@vuetifyjs.com</v-list-item-subtitle>
                            </v-list-item-content>

                            <v-list-item-action v-bind="attrs" v-on="on">
                                <v-icon>mdi-menu-down</v-icon>
                            </v-list-item-action>
                            </v-list-item>
                        </v-list>
                    <div>
                    </div>
                </div>
            </template>
            <!-- List -->
                <v-list nav dense class="absolute" transition="slide-y-transition">
                    <v-list-item-group
                        color="primary"
                    >
                    <v-list-item
                        v-for="(item, i) in items"
                        :key="i"
                    >
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
        </v-col>
      </v-row>
    </v-container>
</template>

<script>
  export default {
    data: () => ({
      items: [
        { text: 'Мій профіль', icon: 'mdi-account-circle-outline' },
        { text: 'Редагувати', icon: 'mdi-account-edit-outline' },
        { text: 'Портфоліо', icon: 'mdi-star-check-outline' },
        { text: 'Повідомлення', icon: 'mdi-message-text-outline' },
        { text: 'Мої підписки', icon: 'mdi-account-supervisor-outline' },
        { text: 'Що нового?', icon: 'mdi-newspaper-variant-multiple' },
        { text: 'Вийти', icon: 'mdi-logout' },
      ],
    }),
  }
</script>