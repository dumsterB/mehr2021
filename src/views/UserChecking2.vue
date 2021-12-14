<template>
    <div>
        <v-dialog
            v-model="dialogRight"
            max-width="800"
            class="UserModal "
            transition="dialog-bottom-transition"
        >
            <template v-slot:activator="{ on, attrs }">
                <v-btn elevation="0" v-bind="attrs"
                       v-on="on" dark style="background: #2F80ED" class="primary btns rounded-lg">
                    Boshlash
                </v-btn>
            </template>

            <v-card class="pa-5 grey lighten-5">
                <v-tabs-items v-model="tab" class="grey lighten-5">
                    <v-tab-item :key="1"
                                value="withoutdocuments"
                    >
                        <v-list-item class="mt-2">
                            <v-btn rounded elevation="0" v-if="!access" @click="access=!access"
                                   style="border: 1px solid lightgray">
                                <v-icon small class="mr-2">mdi-pencil</v-icon>
                                Tahrirlash
                            </v-btn>

                            <v-card-actions v-if="access">
                                <v-btn outlined class="rounded-xl btns " color="primary" elevation="0"
                                       @click="access=false" tile>Bekor qilish
                                </v-btn>
                                <v-btn dark class="rounded-xl btns" elevation="0" color="primary" @click="access=false">
                                    Saqlash
                                </v-btn>
                            </v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn elevation="0" @click="dialogRight=false"><img src="@/assets/x.svg" alt=""></v-btn>
                        </v-list-item>
                    </v-tab-item>
                </v-tabs-items>
                <br>
                <v-tabs
                    v-model="tab"
                    color="black"
                   class="tabModal grey lighten-5"
                >
                    <v-tab

                        v-for="item in items"
                        :key="item.tab"
                        class="black--text grey lighten-5  "

                        :href="item.href"

                    >
                        {{ item.tab }}
                        <v-chip
                            v-if="item.chip"
                            class="ma-2"
                            color="red"
                            small
                            text-color="white"
                        >
                            32
                        </v-chip>
                    </v-tab>

                </v-tabs>

                <v-tabs-items v-model="tab" class="grey lighten-5">
                    <v-tab-item :key="1"
                                value="documents"
                    >
                        <v-container>
                            <v-row>
                                <v-col
                                    class="d-block"
                                    cols="6"
                                    md="6"
                                    sm="12"
                                >
                                    <v-list-item-title class="black--text mt-2 linksFont">Vasiy ish statusi
                                    </v-list-item-title>
                                    <v-select
                                        :items="items"
                                        label="Ma’sul"
                                        class="rounded-lg"
                                        outlined
                                    ></v-select>
                                    <v-text-field class="rounded-lg" outlined value="Navro’zobod 4-uy"></v-text-field>
                                    <v-text-field class="rounded-lg" outlined value="Tozalik mudiri"></v-text-field>
                                    <v-list-item-title class="black--text ml-2 linksFont">Eshik rasmi
                                    </v-list-item-title>
                                    <v-text-field class="rounded-lg mb-5" outlined
                                                  value="+998 (90) 945-67-54"></v-text-field>
                                    <v-list-item-title class="black--text ml-2 mt-5  linksFont">Eshik rasmi
                                    </v-list-item-title>
                                    <v-file-input
                                        lass="rounded-lg" outlined
                                        label="+998 (90) 945-67-54"
                                    ></v-file-input>
                                </v-col>
                                <v-col
                                    class="d-block"
                                    cols="6"
                                    md="6"
                                    sm="12"
                                >
                                    <v-list-item-title class="black--text mt-2 linksFont">Vasiy ish statusi
                                    </v-list-item-title>
                                    <v-select
                                        :items="items"
                                        label="Ma’sul"
                                        class="rounded-lg"
                                        outlined
                                    ></v-select>
                                    <v-text-field class="rounded-lg" outlined value="Navro’zobod 4-uy"></v-text-field>
                                    <v-text-field class="rounded-lg" outlined value="Tozalik mudiri"></v-text-field>
                                    <v-list-item-title class="black--text ml-2 linksFont">Eshik rasmi
                                    </v-list-item-title>
                                    <v-text-field class="rounded-lg mb-5" outlined
                                                  value="+998 (90) 945-67-54"></v-text-field>
                                    <v-list-item-title class="black--text ml-2 mt-5  linksFont">Geolokatsiya
                                    </v-list-item-title>
                                    <v-file-input
                                        lass="rounded-lg" outlined
                                        label="+998 (90) 945-67-54"
                                    ></v-file-input>
                                </v-col>
                            </v-row>
                            <v-btn class="btns rounded-lg primary" elevation="0" style="background: #2F80ED" large dark>
                                Tasdiqlash
                            </v-btn>
                        </v-container>
                    </v-tab-item>
                </v-tabs-items>
                <v-tabs-items v-model="tab" class="grey lighten-5">
                    <v-tab-item :key="1"
                                value="withoutdocuments"
                    >
                        <v-container>
                            <v-row wrap>
                                <v-col cols="12">
                                    <v-list-item-group
                                        color="primary"
                                        class="d-flex justify-space-between"
                                    >

                                        <p style="font-size: 19px" class=" black--text d-flex  mt-2 linksFont">Abror
                                            Xoshimjonov
                                            Alibekovich</p>

                                    </v-list-item-group>
                                </v-col>
                            </v-row>
                        </v-container>
                        <v-list-item>
                            <v-container>
                                          <v-row wrap>
                        <v-col>
                            <v-list
                                nav
                                dense
                                class="mt-1"
                                v-for="item of usersData" :key="item.title"
                            >
                                <v-list-item-group
                                    color="primary"
                                >
                                    <v-list-item-title class="black--text mt-2 linksFont" v-text="item.title"></v-list-item-title>
                                </v-list-item-group>
                            </v-list>
                        </v-col>
                        <v-col>
                            <v-list
                                nav
                                dense
                                v-for="item of usersData" :key="item.title"
                            >
                                <v-list-item-group
                                    color="primary"
                                    v-if="!access"
                                >
                                    <v-list-item-title class="text--secondary mt-3 linksFont"
                                                       v-text="item.description"></v-list-item-title>
                                </v-list-item-group>
                                <v-text-field
                                    v-if="access"
                                    :value="item.description"
                                    hide-details="auto"
                                style="padding:1px;!important; margin-top:1px!important"
                                ></v-text-field>
                            </v-list>
                        </v-col>
                    </v-row>
                            </v-container>
                        </v-list-item>
                    </v-tab-item>
                </v-tabs-items>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
import {mapGetters,} from 'vuex'

export default {
    data() {
        return {
            access: false,
            value: '',
            tab: 'dicuments',
            dialog: false,
            items: [
                {tab: 'Ma’lumotlarni to’ldirish', content: 'Tab 1 Content', href: '#documents'},
                {tab: 'Mavjud ma’lumotlar', content: 'Tab 2 Content', chip: true, href: '#withoutdocuments'},
            ],
            selectedItem: [],
            dialogRight: false,
        }
    },
    methods: {},
    computed: {
        ...mapGetters(['usersData'])
    },
}
</script>

<style scoped>
.UserModal {
    justify-content: flex-start;
    max-height: 100vh !important;
}
.v-slide-group__content{
    background: white!important;
}
</style>
