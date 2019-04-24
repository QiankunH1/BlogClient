<template>
    <div>
        我是主页
        <el-button @click="btn">测试</el-button>
    </div>
</template>

<script>
    export default {
        name:'',
        data() {
            return {
                
            }
        },
        methods: {
            btn(){
                this.$axios.post('/user/test').then(res=>{
                    console.log(res)
                })
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>