<template>
    <div>
        <p>cartCount: {{cartCount}}</p>
        <button type="button" @click="increment">Increment</button>
    </div>
</template>
<script>
    export default{
        computed:{
            cartCount(){
                return this.$store.getters.cartCount;
            }
        }
    }
</script>
