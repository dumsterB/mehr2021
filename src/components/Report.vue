<template>
<div>
    <v-tabs v-model="tab" color="black">
        <v-tab v-for="item in items" :key="item.tab" class="black--text btns" :href="item.href">
            {{ item.tab }}
            <v-chip v-if="item.chip" class="ma-2" color="red" small text-color="white">
                32
            </v-chip>
        </v-tab>

    </v-tabs>
    <v-divider></v-divider>
    <br>
    <div class="hidden-sm-and-down">
        <v-row>
            <v-col cols="10">
                <div class="d-flex ">
                    <v-col class="d-flex" cols="2" md="3" sm="6">
                        <v-select :items="items" label="Tuman" class="rounded-lg commonInputs" outlined></v-select>
                    </v-col>
                    <v-col cols="3" md="3" sm="6">
                        <v-menu ref="menuA" v-model="menuA" :close-on-content-click="false" :return-value.sync="dateA" transition="scale-transition" offset-y min-width="auto">
                            <template v-slot:activator="{ on, attrs }">
                                <v-text-field v-model="dateA" outlined class="rounded-lg commonInputs" label="Picker in menu" append-icon="mdi-calendar" readonly v-bind="attrs" v-on="on"></v-text-field>
                            </template>
                            <v-date-picker v-model="dateA" no-title scrollable>
                                <v-spacer></v-spacer>
                                <v-btn text dark color="primary" @click="menuA = false">
                                    Cancel
                                </v-btn>
                                <v-btn text color="primary" dark @click="$refs.menuA.save(dateA)">
                                    OK
                                </v-btn>
                            </v-date-picker>
                        </v-menu>
                    </v-col>
                    <v-col class="d-flex" cols="3" md="3" sm="6">
                        <v-select :items="items" label="Ma’sul" class="rounded-lg commonInputs" outlined></v-select>
                    </v-col>

                    <v-col class="d-flex " cols="3" md="3" sm="6">
                        <v-btn dark elevation="0" style="background: #27AE60" class="rounded-lg btns filterBtn" x-large>Filterlash</v-btn>
                    </v-col>
                </div>
            </v-col>
        </v-row>
    </div>
    <!--  ADOPTATION FOR MOBILE      -->
    <div class="hidden-md-and-up">
        <div class=" ">
            <v-row>
                <v-col class="d-flex" cols="6" sm="6">
                    <v-select :items="items" label="Tuman" class="rounded-lg " dense full-width outlined></v-select>
                </v-col>

                <v-col cols="6" sm="6">
                    <v-menu ref="menu" v-model="menu" :close-on-content-click="false" :return-value.sync="date" transition="scale-transition" offset-y min-width="auto">
                        <template v-slot:activator="{ on, attrs }">
                            <v-text-field dense v-model="date" outlined label="Picker in menu" append-icon="mdi-calendar" readonly v-bind="attrs" v-on="on"></v-text-field>
                        </template>
                        <v-date-picker v-model="date" no-title scrollable>
                            <v-spacer></v-spacer>
                            <v-btn text color="primary" @click="menu = false">
                                Cancel
                            </v-btn>
                            <v-btn text color="primary" @click="$refs.menu.save(date)">
                                OK
                            </v-btn>
                        </v-date-picker>
                    </v-menu>
                </v-col>
            </v-row>
            <v-row>
                <v-col class="d-flex" cols="6" sm="6">
                    <v-select :items="items" label="Ma’sul" class="rounded-lg " dense small outlined></v-select>
                </v-col>

                <v-col class="d-flex " cols="6" sm="6">
                    <v-btn style="background: #27AE60 " class="rounded-lg" dark elevation="0" large>Filterlash</v-btn>
                </v-col>
            </v-row>

        </div>
    </div>
    <div class="d-flex">
        <h2 class="linksFont">Umumiy</h2>

        <v-chip class="ma-2" color="red" small text-color="white">
            144
        </v-chip>
    </div>
    <br>
    <v-tabs-items v-model="tab">
        <v-tab-item :key="1" value="documents">
            <v-data-table :headers="headers" @click:row="rowClick" item-key="name" :items="desserts" v-model="selected" sort-by="calories" class="elevation-1 grey lighten-5" style="border: none!important; background: none;">
                <template v-slot:top>
                    <v-spacer></v-spacer>
                </template>
                <template v-slot:item.actions="{ item }">
                        <img @click="modalWindow=true"  :item="item"  style="background: none!important;" src="../assets/ArrowDow.svg" alt="">
                </template>
                <template v-slot:no-data>
                    <v-btn color="primary" @click="initialize">
                        ДАННЫЙЛА ЙОК КОМАДИ
                    </v-btn>
                </template>
            </v-data-table>
        </v-tab-item>
    </v-tabs-items>
    <v-tabs-items v-model="tab">
        <v-tab-item :key="1" value="withoutdocuments">
            <v-data-table :headers="headers"  @click:row="rowClick" :items="desserts" sort-by="calories" class="elevation-1 grey lighten-5" style="border: none!important;">
                <template v-slot:top>
                    <v-spacer></v-spacer>
                </template>
             <template v-slot:item.actions="{ item }">
                        <img @click="modalWindow=true"  :item="item"  style="background: none!important;" src="../assets/ArrowDow.svg" alt="">
                </template>
                <template v-slot:no-data>
                    <v-btn color="primary" @click="initialize">
                        ДАННЫЙЛА ЙОК КОМАДИ
                    </v-btn>
                </template>
            </v-data-table>
        </v-tab-item>
    </v-tabs-items>
    <br>
                                            <!-- Modal window -->


      <v-dialog elevation="4"  v-model="modalWindow" hide-overlay no-click-animation max-width="500" persistent fullscreen class="UserModal" transition="scroll-x-reverse-transition">

        <v-card class="flex" style="justify-content: end!important;">
            <v-divider></v-divider>
            <v-list-item class="mt-2">
                <v-btn rounded elevation="0" class="modalBtnE" v-if="!access" @click="access=!access">
                    <v-icon small class="mr-2">mdi-pencil</v-icon>
                    Tahrirlash
                </v-btn>
                <v-card-actions v-if="access">
                    <v-btn outlined class="rounded-xl btns " color="primary" elevation="0" @click="access=false" tile>Bekor qilish</v-btn>
                    <v-btn dark class="rounded-xl btns" elevation="0" color="primary" @click="access=false">Saqlash</v-btn>
                </v-card-actions>
                <v-spacer></v-spacer>
                <v-btn elevation="0" class="modalBtnX" @click="modalWindow=false"><img src="@/assets/x.svg" alt=""></v-btn>
            </v-list-item>
            <v-container>
                <v-row wrap class="pa-5">
                    <v-col cols="8">
                        <v-list-item-group color="primary" class="d-flex justify-space-between">

                            <p style="font-size: 19px" class=" black--text d-flex  mt-2 linksFont">Abror Xoshimjonov
                                Alibekovich</p>

                        </v-list-item-group>
                    </v-col>
                    <v-col cols="4">
                        <v-list-item-title class="text--secondary mt-2 linksFont">10.06.2021 - 08:36
                        </v-list-item-title>
                    </v-col>
                </v-row>
            </v-container>
            <v-list-item>
                <v-container>
                    <v-row wrap>
                        <v-col>
                            <v-list nav dense class="mt-1" v-for="item of usersData" :key="item.title">
                                <v-list-item-group color="primary">
                                    <v-list-item-title class="black--text mt-2 linksFont" v-text="item.title"></v-list-item-title>
                                </v-list-item-group>
                            </v-list>
                        </v-col>
                        <v-col>
                            <v-list nav dense v-for="item of usersData" :key="item.title">
                                <v-list-item-group color="primary" v-if="!access">
                                    <v-list-item-title class="text--secondary mt-2 linksFont" v-text="item.description"></v-list-item-title>
                                </v-list-item-group>
                                <v-text-field v-if="access" :value="item.description" hide-details="auto"></v-text-field>
                            </v-list>
                        </v-col>
                    </v-row>
                </v-container>
            </v-list-item>
        </v-card>
    </v-dialog>
</div>
</template>

<script>
import {
    mapGetters
} from 'vuex'
export default {
    data() {
        return {
            tab: 'dicuments',
            drawer: false,
            access: false,
            selected: [],
            dialog: false,
            modalWindow:false,
            value: [],
            active: false,
            date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
            dateA: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
            menu: false,
            menuA: false,
            items: [{
                    tab: 'Yangilar',
                    content: 'Tab 1 Content',
                    href: '#documents'
                },
                {
                    tab: 'Hujjatsizlar',
                    content: 'Tab 2 Content',
                    chip: true,
                    href: '#withoutdocuments'
                },

            ],
            editedIndex: -1,
            editedItem: {
                name: '',
                calories: 0,
                fat: 0,
                carbs: 0,
                protein: 0,
            },
            desserts: [],
            dialogDelete: false,
            headers: [{
                    text: 'Dessert (100g serving)',
                    align: 'start',
                    sortable: false,
                    value: 'name',
                },
                {
                    text: 'Calories',
                    value: 'calories'
                },
                {
                    text: 'Fat (g)',
                    value: 'fat'
                },
                {
                    text: 'Carbs (g)',
                    value: 'carbs'
                },
                {
                    text: 'Protein (g)',
                    value: 'protein'
                },
                {
                    text: 'Actions',
                    value: 'actions',
                    sortable: false
                },
            ],

            users: [{
                    action: '15 min',
                    headline: 'Brunch this weekend?',
                    subtitle: `I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
                    title: 'Ali Connors',
                },
                {
                    action: '2 hr',
                    headline: 'Summer BBQ',
                    subtitle: `Wish I could come, but I'm out of town this weekend.`,
                    title: 'me, Scrott, Jennifer',
                },
                {
                    action: '6 hr',
                    headline: 'Oui oui',
                    subtitle: 'Do you have Paris recommendations? Have you ever been?',
                    title: 'Sandra Adams',
                },
                {
                    action: '12 hr',
                    headline: 'Birthday gift',
                    subtitle: 'Have any ideas about what we should get Heidi for her birthday?',
                    title: 'Trevor Hansen',
                },
                {
                    action: '18hr',
                    headline: 'Recipe to try',
                    subtitle: 'We should eat this: Grate, Squash, Corn, and tomatillo Tacos.',
                    title: 'Britta Holt',
                },
                {
                    action: '15 min',
                    headline: 'Brunch this weekend?',
                    subtitle: `I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
                    title: 'Ali Connors',
                },
                {
                    action: '2 hr',
                    headline: 'Summer BBQ',
                    subtitle: `Wish I could come, but I'm out of town this weekend.`,
                    title: 'me, Scrott, Jennifer',
                },
                {
                    action: '6 hr',

                    headline: 'Oui oui',
                    subtitle: 'Do you have Paris recommendations? Have you ever been?',
                    title: 'Sandra Adams',
                },
                {
                    action: '12 hr',
                    headline: 'Birthday gift',
                    subtitle: 'Have any ideas about what we should get Heidi for her birthday?',
                    title: 'Trevor Hansen',
                },
                {
                    action: '18hr',
                    headline: 'Recipe to try',
                    subtitle: 'We should eat this: Grate, Squash, Corn, and tomatillo Tacos.',
                    title: 'Britta Holt',
                },
                {
                    action: '6 hr',
                    headline: 'Oui oui',
                    subtitle: 'Do you have Paris recommendations? Have you ever been?',
                    title: 'Sandra Adams',
                },
                {
                    action: '12 hr',
                    headline: 'Birthday gift',
                    subtitle: 'Have any ideas about what we should get Heidi for her birthday?',
                    title: 'Trevor Hansen',
                },
                {
                    action: '18hr',
                    headline: 'Recipe to try',
                    subtitle: 'We should eat this: Grate, Squash, Corn, and tomatillo Tacos.',
                    title: 'Britta Holt',
                },
            ],
        }
    },
    methods: {

        rowClick: function (item, row) {
            row.select(true);
            console.log(item);
            this.modalWindow = true
            console.log(this.modalWindow);
        },

        initialize() {
            this.desserts = [{
                    name: 'Frozen Yogurt',
                    calories: 159,
                    fat: 6.0,
                    carbs: 24,
                    protein: 4.0,
                },
                {
                    name: 'Ice cream sandwich',
                    calories: 237,
                    fat: 9.0,
                    carbs: 37,
                    protein: 4.3,
                },
                {
                    name: 'Eclair',
                    calories: 262,
                    fat: 16.0,
                    carbs: 23,
                    protein: 6.0,
                },
                {
                    name: 'Cupcake',
                    calories: 305,
                    fat: 3.7,
                    carbs: 67,
                    protein: 4.3,
                },
                {
                    name: 'Gingerbread',
                    calories: 356,
                    fat: 16.0,
                    carbs: 49,
                    protein: 3.9,
                },
                {
                    name: 'Jelly bean',
                    calories: 375,
                    fat: 0.0,
                    carbs: 94,
                    protein: 0.0,
                },
                {
                    name: 'Lollipop',
                    calories: 392,
                    fat: 0.2,
                    carbs: 98,
                    protein: 0,
                },
                {
                    name: 'Honeycomb',
                    calories: 408,
                    fat: 3.2,
                    carbs: 87,
                    protein: 6.5,
                },
                {
                    name: 'Donut',
                    calories: 452,
                    fat: 25.0,
                    carbs: 51,
                    protein: 4.9,
                },
                {
                    name: 'KitKat',
                    calories: 518,
                    fat: 26.0,
                    carbs: 65,
                    protein: 7,
                },
            ]
        },
    },
    created() {
        this.initialize()
    },
    computed: {
          ...mapGetters(['usersData'])
    },
    components: {

    }
}
</script>

<style scoped>
    .linksFont {
        font-family: Gilroy;
    }

    .v-slide-group__content {
        background: #FBFBFB;
    }

    table td {
        border: none;
    }

    .v-text-field {
        padding-top: 0px;
        margin-top: 0px;
    }

    table .v-table tbody td {
        height: 40px;
        border: none !important;
        ;
    }

    .theme--light .v-table tbody {
        border-bottom: none !important;
    }

    @media (min-width: 1400px) {
        .commonInputs {
            width: 300px;
        }
    }
</style>
