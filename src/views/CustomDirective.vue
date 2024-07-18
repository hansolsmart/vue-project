<template>
    <div style="height:1000px;">
        <p v-pin = "position">
            페이지 고정 영역
        </p>
    </div>
</template>
<script>
    export default{
        directives:{
            pin:{
                mounted(el,binding){
                    el.style.position = 'fixed';
                    el.style.top = binding.value.top + 'px';
                    el.style.left = binding.value.left + 'px';
                }
            }
        },
        data(){
            return{
                position: {top:50, left:100}
            };
        }
    }
</script>
