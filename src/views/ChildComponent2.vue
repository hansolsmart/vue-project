<template>
    <div>
        <button type="button" @click="callFromParent" ref="btn">
            click
        </button>
    </div>
</template>
<script>
    export default{
        methods:{
            callFromParent(){
                console.log('부모 컴포넌트에서 직접 호출한 함수');
            }
        }
    }
</script>
