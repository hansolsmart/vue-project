<template>
    <div>
        <button type="button" @click="setCounter(7)">Set 7</button>
        <p>
            The counter is: {{counter}}
        </p>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                counter:0
            };
        },
        methods:{
            setCounter(counter){
                this.counter = counter;
            }
        }
    }
</script>
