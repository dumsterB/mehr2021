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
    <div class="d-flex">
        <h2 class="linksFont">Umumiy</h2>
        <v-chip class="ma-2" color="red" text-color="white" small>
            144
        </v-chip>
    </div>

    <v-tabs-items v-model="tab">
        <v-tab-item :key="1" value="documents">
            <v-data-table @click:row="rowClick" :headers="headers" :items="desserts" sort-by="calories" class="elevation-1 grey lighten-5" style="border: none!important;">
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
            <v-data-table :headers="headers" @click:row="rowClick"  :items="desserts" sort-by="calories" class="elevation-1 grey lighten-5" style="border: none!important;">
                <template v-slot:top>

                    <v-spacer></v-spacer>
                    <v-dialog v-model="dialog" max-width="500px">
                    </v-dialog>
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
           <v-dialog
            v-model="modalWindow"
            hide-overlay
            no-click-animation
            max-width="500"
            persistent
            fullscreen
            class="UserModal"
            transition="scroll-x-reverse-transition"
        >
            <!-- <template v-slot:activator="{ on, attrs }">

                <img v-bind="attrs"
                     v-on="on" src="../assets/ArrowDow.svg"
                     alt="">
            </template> -->
            <v-card>
                <v-divider></v-divider>
                <v-list-item class="mt-2">
                    <v-spacer></v-spacer>
                    <v-btn elevation="0" class="modalBtnX" @click="modalWindow=!modalWindow"><img src="../assets/x.svg" alt=""></v-btn>
                </v-list-item>
                <v-container>
                    <v-row wrap class="pa-5">
                        <v-col cols="8">
                            <v-list-item-group
                                v-model="selectedItem"
                                color="primary"
                                class="d-flex justify-space-between"
                            >
                                <p style="font-size: 19px" class=" black--text d-flex  mt-2 linksFont">Abror Xoshimjonov
                                    Alibekovich</p>
                            </v-list-item-group>
                        </v-col>
                        <v-col cols="4">
                            <v-list-item-title class="text--secondary mt-2 linksFont"
                            >3 kun loldi
                            </v-list-item-title>
                        </v-col>
                    </v-row>
                </v-container>
                <v-list-item>
                    <v-container>
                        <v-row wrap style="align-items: start">
                            <v-col>
                                <v-list
                                    nav
                                    dense
                                    class="mt-1"

                                >
                                    <v-list-item-group
                                        v-model="selectedItem"
                                        color="primary"
                                    >
                                        <v-list-item-group
                                            v-model="selectedItem"
                                            color="primary"
                                        >

                                            <v-list-item-title class="black--text mt-2 linksFont">Status
                                            </v-list-item-title>
                                            <br>
                                            <v-list-item-title class="black--text mt-2 linksFont">Tasdiqlovchi
                                            </v-list-item-title>
                                            <br>
                                            <v-list-item-title class="black--text mt-2 linksFont">Guruhlash dedlayni
                                            </v-list-item-title>
                                        </v-list-item-group>

                                    </v-list-item-group>
                                </v-list>
                            </v-col>
                            <v-col>
                                <v-list
                                    nav
                                    dense

                                >
                                    <v-list-item-group
                                        v-model="selectedItem"
                                        color="primary"
                                        v-if="!access"
                                    >

                                        <v-list-item-group
                                            v-model="selectedItem"
                                            color="primary"
                                            v-if="!access"
                                        >
                                            <v-btn class="btns rounded-xl" elevation="0" dark
                                                   style="background:#27AE60 ">Tasdiqlandan
                                            </v-btn>
                                            <br>
                                            <v-list-item-title class="text--secondary mt-4 linksFont">Abu Ubayda ibn
                                                Huzayfa
                                            </v-list-item-title>
                                            <br>
                                            <v-list-item-title class="text--secondary mt-4 linksFont">18.06.2021 - 3 kun
                                                qoldi
                                            </v-list-item-title>
                                        </v-list-item-group>
                                    </v-list-item-group>
                                </v-list>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-list-item>
                <v-container>
                    <v-row wrap class="pa-5">
                        <v-col cols="8">
                            <v-list-item-group
                                v-model="selectedItem"
                                color="primary"
                                class=" justify-space-between"
                            >
                                <v-list-item-title class="text--secondary  linksFont">Haqdorning ma’lumotlarini to’liq
                                    <br> holatga
                                    keltirish
                                </v-list-item-title>
                                <br>
                                <v-list-item-title class="text--secondary mt-4 linksFont">Haqdorni ta’minot bo’yicha
                                    guruhlash
                                </v-list-item-title>
                            </v-list-item-group>
                        </v-col>
                        <v-col cols="4">
                            <UserChecking2 ></UserChecking2>
                            <br><br>
                            <UserChecking3></UserChecking3>
                        </v-col>
                    </v-row>
                </v-container>
            </v-card>
        </v-dialog>
</div>
</template>

<script>
import UserChecking2 from "../views/UserChecking2";
import UserChecking3 from "../views/UserCheking3";
export default {
    data() {
        return {
            tab: 'dicuments',
            selected: '',
            drawer: false,
            drawerLeft: false,
            modalWindow:false,
            active: false,
            date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
            menu: false,
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
            dialog: false,
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
            ],
        }
    },

    methods: {
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
           rowClick: function (item, row) {
            row.select(true);
            console.log(item);
            this.modalWindow = true
        },
    },
    created() {
        this.initialize()
    },
    components: {
         UserChecking2,UserChecking3
    },
}
</script>

<style>
.linksFont {
    font-family: Gilroy;
}

.v-slide-group__content {
    background: #FBFBFB;
}

table td {
    border: none;
}

.v-dialog--fullscreen,
.mainModal {
    right: 0;
    left: auto !important;
}
</style>
