import StatesLgas from './StatesLgas.vue';

const nigeriaStatesLgas = {
    install(Vue, options) {
        Vue.component('v-states-lgas', StatesLgas)
    }
}

// Automatic installation if Vue has been added to the global scope.
if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(nigeriaStatesLgas)
}

export default nigeriaStatesLgas