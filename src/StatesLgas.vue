<template>
    <div>
        <select v-model="state" id="state">
            <option>Select State</option>
            <option v-for="item in states">{{ item.state.name }}</option>
        </select>
        <select v-model="lga" id="lga">
            <option>Select LGA</option>
            <option v-for="lga in lgas">{{ lga.locals.name }}</option>
        </select>
    </div>
</template>

<script>
    import states from './data.json'

    export default {

        data() {
            return {
                states: states,
                lgas: [],
                state: '',
                lga: ''
            }
        },

        watch: {
            state: function(e) {
                if(e) {
                    return this.states.filter(item => {
                        if(item.state.name === e) {
                            this.lgas = item.locals
                        }
                    })
                }
            }
        }

    }
</script>