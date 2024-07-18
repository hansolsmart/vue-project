<script>
    import ApiMixin from '../mixins.js';
    export default{
        mixins: [ApiMixin], //사용할 믹스인 파일을 배열로 등록
        data(){
            return{
                productList: []
                
            };
        },
        async mounted(){
            this.productList = await this.$api("https://48eb2ef8-d294-4171-b12b-442b0561bf01.mock.pstmn.io/list","get");
            console.log(this.productList);
        }
    }
</script>
