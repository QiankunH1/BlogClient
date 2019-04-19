<template>
    <div class="head-wrap">
        <div class="head">
            <!-- <router-link >首页</router-link>
            <router-link >博文</router-link>
            <router-link >交流</router-link>
            <router-link >写博文</router-link> -->
            <span @click="toindex">首页</span>
            <span>博文</span>
            <span>交流</span>
            <span>写博文</span>
            <span @click="tologin">登录</span>

        </div>
    </div>
</template>

<script>
    export default {
        methods: {
            toindex(){
                this.$router.push('/index')
            },
            tologin(){
                this.$router.push('/login')
            }
        },
    }
</script>

<style lang="scss" scoped>
.head-wrap{
    background-color: antiquewhite;
}
.head{
    width: 1200px;
    margin: 0 auto;
    height: 70px;
    line-height: 70px;
    font-size: 20px;
    // text-align: left;
    // padding-left: 200px;
    span{
        display: inline-block;
        margin-right: 50px;
    }
}
</style>