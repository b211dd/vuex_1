import { createStore } from "vuex";

export default createStore({
    state: {
        name:"Osama Samer",
        age:29,
        title:"front end"
    },
    getters: {
        getNameWithTitle(state){
            return state.name + "(" + state.title +")";
        },
    },
    mutations: {
        changeTitle(state){
            state.title ="web developer";
        }
    }
    
});