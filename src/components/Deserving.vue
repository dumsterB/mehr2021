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
                <div class="d-flex">
                    <v-col class="d-flex" cols="4" sm="3">
                        <v-select :items="items" label="Tuman" class="rounded-lg commonInputs" outlined></v-select>
                    </v-col>

                    <v-col class="d-flex" cols="4" sm="3">
                        <v-select v-model="selectedFruits" :items="fruits" class="rounded-lg commonInputs" outlined label="Barchasi" multiple>
                        </v-select>
                    </v-col>
                    <v-col class="d-flex" cols="4" sm="3">
                        <v-select :items="items" label="Ma’sul" class="rounded-lg commonInputs" outlined></v-select>
                    </v-col>

                    <v-col class="d-flex " cols="4" sm="3">
                        <v-btn dark style="background:#27AE60 " elevation="0" class="rounded-lg btns" x-large>Filterlash</v-btn>
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
            <v-data-table :headers="headers" @click:row="rowClick" :items="desserts" sort-by="calories" class="elevation-1 grey lighten-5" style="border: none!important;">
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
    <v-dialog v-model="modalWindow" max-width="800" fullscreen class="UserModal " transition="scroll-x-reverse-transition">

        <v-card class="pa-5">
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
                    <v-row wrap style="align-items: start">
                        <v-col>
                            <v-list nav dense class="mt-1">
                                <v-list-item-group v-model="selectedItem" color="primary">
                                    <v-list-item-group v-model="selectedItem" color="primary">
                                        <v-list-item-title class="black--text mt-2 linksFont">Tasdiqlovchi
                                        </v-list-item-title>
                                        <br>
                                        <v-list-item-title class="black--text mt-2 linksFont">Status
                                        </v-list-item-title>
                                        <br>
                                        <v-list-item-title class="black--text mt-2 linksFont">Guruh
                                        </v-list-item-title>
                                    </v-list-item-group>

                                </v-list-item-group>
                            </v-list>
                        </v-col>
                        <v-col>
                            <v-list nav dense>
                                <v-list-item-group v-model="selectedItem" color="primary">

                                    <v-list-item-group v-model="selectedItem" color="primary">
                                        <v-list-item-title class="text--secondary mt-4 linksFont">Abu Ubayda ibn
                                            Huzayfa
                                        </v-list-item-title>
                                        <br>
                                        <v-btn class="btns rounded-xl" elevation="0" dark style="background:#27AE60 ">Haqdor
                                        </v-btn>
                                        <br><br>
                                        <v-select :items="items" :disabled="!access" label="Ma’sul" class="rounded-lg"></v-select>
                                        <br>
                                        <v-textarea :disabled="!access" name="input-7-1" value="Ilojisi bo’lsa oilaga ko’proq kartoshka mahsulotlari yetkazilishini so’ramoqda." hint="Hint text"></v-textarea>
                                    </v-list-item-group>
                                </v-list-item-group>
                            </v-list>
                        </v-col>
                    </v-row>
                    <v-row wrap style="align-items: start">
                        <v-col>
                            <v-list nav dense class="mt-1">
                                <v-list-item-group v-model="selectedItem" color="primary">
                                    <v-list-item-group v-model="selectedItem" color="primary">
                                        <v-list-item-title class="black--text mt-2 linksFont">Ta’min kuni
                                        </v-list-item-title>
                                        <br>
                                        <v-list-item-title class="black--text mt-2 linksFont">Qo’shimcha ta’minot
                                        </v-list-item-title>
                                    </v-list-item-group>

                                </v-list-item-group>
                            </v-list>
                        </v-col>
                        <v-col>
                            <v-list nav dense>
                                <v-list-item-group v-model="selectedItem" color="primary">

                                    <v-list-item-group v-model="selectedItem" color="primary">
                                        <v-list-item-title class="text--secondary mt-4 linksFont">21.06.2021 - 12 kun qoldi
                                        </v-list-item-title>
                                        <br>
                                        <v-select :disabled="!access" :items="items" label="Sport va ta’lim" class="rounded-lg"></v-select>
                                        <v-textarea name="input-7-1" :disabled="!access" value="Ilojisi bo’lsa oilaga ko’proq kartoshka mahsulotlari yetkazilishini so’ramoqda." hint="Hint text"></v-textarea>
                                    </v-list-item-group>
                                </v-list-item-group>
                            </v-list>
                        </v-col>
                    </v-row>
                    <v-row wrap style="align-items: start">
                        <v-col>
                            <v-list nav dense class="mt-1">
                                <v-list-item-group v-model="selectedItem" color="primary">
                                    <v-list-item-group v-model="selectedItem" color="primary">
                                        <v-list-item-title class="black--text mt-2 linksFont">Ariza manbai
                                        </v-list-item-title>
                                        <br>
                                        <v-list-item-title class="black--text mt-2 linksFont">Pasport ma’lumoti
                                        </v-list-item-title>
                                        <br>
                                        <v-list-item-title class="black--text mt-2 linksFont">Pasport rasmi
                                        </v-list-item-title>
                                    </v-list-item-group>

                                </v-list-item-group>
                            </v-list>
                        </v-col>
                        <v-col>
                            <v-list nav dense>
                                <v-list-item-group v-model="selectedItem" color="primary">

                                    <v-list-item-group v-model="selectedItem" color="primary">
                                        <v-select :items="items" :disabled="!access" label="Sport va ta’lim" class="rounded-lg"></v-select>
                                        <v-select :items="items" :disabled="!access" label="Sport va ta’lim" class="rounded-lg"></v-select>
                                        <v-file-input :disabled="!access" lass="rounded-lg" outlined label="fewfewfewfew"></v-file-input>
                                    </v-list-item-group>
                                </v-list-item-group>
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
export default {
    data() {
        return {
            tab: 'documents',
            selected: '',
            active: false,
            menu: false,
            modalWindow: false,
            access:false,
            fruits: [
                'Apples',
                'Apricots',
                'Avocado',
                'Kiwis',
                'Kumquat',
                'Lemons',
                'Limes',
                'Watermelons',
                'Zucchini',
            ],
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
            selectedFruits: [],
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
               rowClick: function (item, row) {
            row.select(true);
            console.log(item);
            this.modalWindow = true
        },
        toggle() {
            this.$nextTick(() => {
                if (this.likesAllFruit) {
                    this.selectedFruits = []
                } else {
                    this.selectedFruits = this.fruits.slice()
                }
            })
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
        }
    },
    created() {
        this.initialize()
    },
    computed: {
        likesAllFruit() {
            return this.selectedFruits.length === this.fruits.length
        },
        likesSomeFruit() {
            return this.selectedFruits.length > 0 && !this.likesAllFruit
        },
        icon() {
            if (this.likesAllFruit) return 'mdi-close-box'
            if (this.likesSomeFruit) return 'mdi-minus-box'
            return 'mdi-checkbox-blank-outline'
        },
    },
    components: {}
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
</style>
