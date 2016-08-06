<template>
    <div>
        <div>Count is {{count}}</div>
        <button @click="incrementAsync">+1 async</button>
        <button @click="increment">+1</button>
        <button @click="decrement">-1</button>
    </div>
</template>
<script>
    import * as actions from './actions'
    console.log('#');
    export default {
        vuex : {
            getters : {
                count : state => state.count
            },
            
            actions: actions
        }
    }
</script>