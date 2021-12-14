<template>
<div>
    <v-row justify="center">
        <v-dialog
            v-model="dialog"
            persistent
            max-width="350"
        >
            <template v-slot:activator="{ on, attrs }">
                <v-btn
                    dark
                    class="btns"
                    style="background: #2F80ED"
                    elevation="0"
                    v-bind="attrs"
                    block
                    v-on="on"
                >
                   Chiqish
                </v-btn>
            </template>
            <v-card class="pa-2 justify-center text-center" width="100%">
                <v-card-title class="text-h5 ml-12">
                    Aniq akkauntdan <br>
                    chiqasizmi?
                </v-card-title>
                <v-card-actions class="justify-space-between">
                    <v-btn
                        class="btns rounded-lg"
                        outlined
                        color="primary"
                        dark
                        large

                        @click="dialog = false"
                    >
                        Ha chiqaman
                    </v-btn>
                    <v-btn
                        class="primary btns rounded-lg"
                        large
                        @click="dialog = false"
                    >
                        Bekor qilish
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-row>
</div>
</template>

<script>
export default {
    name: "Logout",
    data(){
        return{
            dialog:false
        }
    }
}
</script>

<style scoped>

</style>
