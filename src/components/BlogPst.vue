<template>
    <h2>{{likes}}</h2>
</template>

<script>
    export default{
        props: {
            likes:{
                type:String,
                default: ""
            }
        }
    }
</script>
