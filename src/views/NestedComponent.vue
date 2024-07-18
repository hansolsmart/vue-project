<template>
    <div> 
        <PageTitle title="부모 컴포넌트에서 자식컴포넌트로 데이터전달" />
        <page-title :title="title" />
        <blog-pst :likes="post-likes" />
    </div>
</template>

<script>
    import PageTitle from '../components/PageTitle.vue'; //컴포넌트 import
    import BlogPst from '../components/BlogPst.vue';

    export default{
        data(){
            return{
                title:'동적 페이지 타이틀'
            }
        },
        components: {PageTitle, BlogPst} //현재 컴포넌트에서 사용할 컴포넌트 등록
    }

</script>
