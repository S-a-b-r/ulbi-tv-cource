import {createStore} from "vuex";

export default createStore({
    state: {
        likes: 2,
        isAuth: false,
    },
    getters: {
        doubleLikes(state) {
            return state.likes * 2;
        }
    },
    mutations: {
        login(state){
            state.isAuth = true;
        },
        logout(state){
            state.isAuth = false;
        },
        incrementLikes(state) {
            state.likes++;
        },
        decrementLikes(state) {
            state.likes--;
        }
    },
    actions: {

    },
    modules: {

    }
})