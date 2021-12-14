import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        loading: false,
        error: null,
        dialogForUser: false,
        tableClicked: false,
        usersData: [{
                title: 'Ariza manbai',
                description: 'O’zi orqali kelgan',
                id: 1
            },
            {
                title: 'Pasport ma’lumoti',
                description: 'O’zi orqali kelgan',
                id: 2
            },
            {
                title: 'Pasport rasmi',
                description: 'O’zi orqali kelgan',
                id: 3

            },
            {
                title: 'Farzand guvohnomasi',
                description: 'O’zi orqali kelgan'
            },
            {
                title: 'Guvohnoma rasmi',
                description: 'O’zi orqali kelgan'
            },
            {
                title: 'Status',
                description: 'O’zi orqali kelgan'
            },
            {
                title: 'Tuman',
                description: 'O’zi orqali kelgan'
            },
            {
                title: 'Manzil',
                description: 'O’zi orqali kelgan'
            },
            {
                title: 'Tel.raqam',
                description: 'O’zi orqali kelgan'
            },
            {
                title: 'O’lim qog’ozi',
                description: 'O’zi orqali kelgan'
            },
            {
                title: 'Nikoh statusi',
                description: 'O’zi orqali kelgan'
            },
            {
                title: 'Zaks rasmi',
                description: 'O’zi orqali kelgan'
            },

        ],
        access: false,
    },
    mutations: {
        setLoading(state, payload) {
            state.loading = payload
        },
        setDialogUser(state, payload) {
            state.dialogForUser = payload
        }
    },
    actions: {
        setLoading({ commit }, payload) {
            commit('setLoading', payload)
        }
    },
    getters: {
        loading(state) {
            return state.loading
        },
        dialogForUser(state) {
            return state.dialogForUser
        },
        usersData(state) {
            return state.usersData
        },
        tableClicked(state) {
            return state.tableClicked = !state.tableClicked
        }
    },
})
export default store