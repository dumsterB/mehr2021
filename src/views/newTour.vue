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
                        color="primary"
                        dark
                        v-bind="attrs"
                        block
                        v-on="on"
                    >
                        Chiqish
                    </v-btn>
                </template>
                <v-card class="pa-2 justify-center text-center" >
                    <v-card-actions>
                        <v-spacer></v-spacer>

                        <v-btn  @click="dialog=!dialog" elevation="0"><img   src="../assets/x.svg" alt=""></v-btn>
                    </v-card-actions>
                    <v-card-text>Yangi tur nomi</v-card-text>
                    <v-card-actions class="justify-space-between">
                        <v-btn
                            class="btns rounded-lg"
                            outlined
                            color="primary"
                            dark
                            large

                            @click="dialog = false"
                        >
                            O’quv qurollari
                        </v-btn>
                        <v-btn
                            class="primary btns rounded-lg"
                            large
                            @click="dialog = false"
                        >
                            Qo’shish
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
